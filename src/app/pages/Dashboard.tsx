import { useMemo, useState, useEffect, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { SummaryCards } from '../features/dashboard/SummaryCards';
import { CardSkeleton } from '../components/skeletons/CardSkeleton';
import { ChartSkeleton } from '../components/skeletons/ChartSkeleton';
import { TableSkeleton } from '../components/skeletons/TableSkeleton';
import { getSpendingByCategory, getMonthlyData } from '../utils/calculations';
import { Transaction } from '../types';
import { toast } from 'sonner';
import BalanceTrendChart from '../features/dashboard/BalanceTrendChart';
import CategoryBreakdownChart from '../features/dashboard/CategoryBreakdownChart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar } from 'lucide-react';
import { TransactionsTable } from '../features/transactions/TransactionsTable';
import { MonthPicker } from '../components/ui/month-picker';

export default function Dashboard() {
  const { transactions, isLoading, deleteTransaction, userRole } = useApp();
  const [showSkeletons, setShowSkeletons] = useState(true);
  const [timePeriod, setTimePeriod] = useState<'month' | 'year' | 'all'>('all');
  const [selectedMonth, setSelectedMonth] = useState<string>(new Date().toISOString().slice(0, 7)); // YYYY-MM
  const [selectedYear, setSelectedYear] = useState<string>(new Date().getFullYear().toString());

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setShowSkeletons(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter transactions based on selected time period
  const filteredTransactions = useMemo(() => {
    if (timePeriod === 'all') {
      return transactions;
    } else if (timePeriod === 'month') {
      return transactions.filter(txn => txn.date.startsWith(selectedMonth));
    } else if (timePeriod === 'year') {
      return transactions.filter(txn => txn.date.startsWith(selectedYear));
    }
    return transactions;
  }, [transactions, timePeriod, selectedMonth, selectedYear]);

  // Get available months and years from transactions
  const availableMonths = useMemo(() => {
    const months = new Set<string>();
    transactions.forEach(txn => {
      months.add(txn.date.slice(0, 7)); // YYYY-MM
    });
    return Array.from(months).sort().reverse();
  }, [transactions]);

  const availableYears = useMemo(() => {
    const years = new Set<string>();
    transactions.forEach(txn => {
      years.add(txn.date.slice(0, 4)); // YYYY
    });
    return Array.from(years).sort().reverse();
  }, [transactions]);

  const spendingByCategory = useMemo(() => getSpendingByCategory(filteredTransactions), [filteredTransactions]);
  const monthlyData = useMemo(() => getMonthlyData(filteredTransactions), [filteredTransactions]);

  const handleDeleteTransaction = useCallback((id: string) => {
    if (confirm('Are you sure you want to delete this transaction?')) {
      deleteTransaction(id);
      toast.success('Transaction deleted successfully');
    }
  }, [deleteTransaction]);

  const handleEditTransaction = useCallback((transaction: Transaction) => {
    // Navigate to transactions page for editing
    window.location.href = '/transactions';
  }, []);

  const canEdit = userRole === 'admin';
  const canDelete = userRole === 'admin';

  if (showSkeletons || isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
          <div className="h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <ChartSkeleton />
          <ChartSkeleton />
        </div>
        {userRole === 'admin' && (
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mt-2" />
            </CardHeader>
            <CardContent className="p-6">
              <TableSkeleton rows={10} />
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header with Time Period Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track your financial summary and spending patterns
          </p>
        </div>
        
        {/* Time Period Selector */}
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Select value={timePeriod} onValueChange={(value: 'month' | 'year' | 'all') => setTimePeriod(value)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
          
          {/* Month Selector */}
          {timePeriod === 'month' && availableMonths.length > 0 && (
            <MonthPicker 
              selectedMonth={selectedMonth} 
              onMonthChange={setSelectedMonth}
              availableMonths={availableMonths}
            />
          )}
          
          {/* Year Selector */}
          {timePeriod === 'year' && availableYears.length > 0 && (
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {availableYears.map(year => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      </div>

      {/* Summary Cards */}
      <SummaryCards transactions={filteredTransactions} />

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Balance Trend Chart */}
        <BalanceTrendChart data={monthlyData} />

        {/* Category Breakdown Bar Chart */}
        <CategoryBreakdownChart data={spendingByCategory.slice(0, 8)} />
      </div>

      {/* Recent Transactions - Admin Only */}
      {userRole === 'admin' && (
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Recent Transactions</CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Latest financial activity
              {timePeriod !== 'all' && (
                <span className="ml-2 text-blue-600 dark:text-blue-400">
                  ({timePeriod === 'month' 
                    ? new Date(selectedMonth + '-01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                    : timePeriod === 'year' ? selectedYear : 'All Time'
                  })
                </span>
              )}
            </p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-6">
              <TransactionsTable 
                data={filteredTransactions.slice(0, 10)} 
                onDelete={handleDeleteTransaction} 
                onEdit={handleEditTransaction} 
                canEdit={canEdit} 
                canDelete={canDelete} 
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
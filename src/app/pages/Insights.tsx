import { useMemo, memo, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import {
  getHighestSpendingCategory,
  getMonthlyComparison,
  formatCurrency,
  calculateTotalIncome,
  calculateTotalExpenses,
  getSpendingByCategory,
  getMonthlyData
} from '../utils/calculations';
import {
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Target,
  Calendar,
  PiggyBank,
  Info,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip';

const InsightCard = memo(({ icon: Icon, title, children, tooltip }: any) => (
  <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-gray-900 dark:text-white flex items-center text-lg">
          <Icon className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
          {title}
        </CardTitle>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs max-w-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
));

InsightCard.displayName = 'InsightCard';

export default function Insights() {
  const { transactions } = useApp();
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number | undefined>(undefined);

  const insights = useMemo(() => ({
    highestSpending: getHighestSpendingCategory(transactions),
    monthlyComparison: getMonthlyComparison(transactions, selectedMonthIndex),
    totalIncome: calculateTotalIncome(transactions),
    totalExpenses: calculateTotalExpenses(transactions),
    spendingByCategory: getSpendingByCategory(transactions),
  }), [transactions, selectedMonthIndex]);

  const { highestSpending, monthlyComparison, totalIncome, totalExpenses, spendingByCategory } = insights;

  const savingsAmount = useMemo(() => totalIncome - totalExpenses, [totalIncome, totalExpenses]);
  const savingsRate = useMemo(() => 
    totalIncome > 0 ? (savingsAmount / totalIncome) * 100 : 0,
    [savingsAmount, totalIncome]
  );

  const averageTransactionAmount = useMemo(() => 
    transactions.length > 0
      ? transactions.reduce((acc, txn) => acc + txn.amount, 0) / transactions.length
      : 0,
    [transactions]
  );

  const incomeTransactions = useMemo(() => transactions.filter(t => t.type === 'income'), [transactions]);
  const expenseTransactions = useMemo(() => transactions.filter(t => t.type === 'expense'), [transactions]);

  const averageIncome = useMemo(() => 
    incomeTransactions.length > 0
      ? incomeTransactions.reduce((acc, txn) => acc + txn.amount, 0) / incomeTransactions.length
      : 0,
    [incomeTransactions]
  );

  const averageExpense = useMemo(() => 
    expenseTransactions.length > 0
      ? expenseTransactions.reduce((acc, txn) => acc + txn.amount, 0) / expenseTransactions.length
      : 0,
    [expenseTransactions]
  );

  const topCategories = useMemo(() => spendingByCategory.slice(0, 3), [spendingByCategory]);
  const totalTopCategoriesSpending = useMemo(() => 
    topCategories.reduce((acc, cat) => acc + cat.value, 0),
    [topCategories]
  );
  const topCategoriesPercentage = useMemo(() => 
    totalExpenses > 0 ? (totalTopCategoriesSpending / totalExpenses) * 100 : 0,
    [totalTopCategoriesSpending, totalExpenses]
  );

  const monthlyData = useMemo(() => getMonthlyData(transactions), [transactions]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Financial Insights</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Key observations and patterns from your financial data
        </p>
      </div>

      {/* Key Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Highest Spending Category */}
        <InsightCard
          icon={AlertCircle}
          title="Top Spending"
          tooltip="Your category with the highest total expenses"
        >
          {highestSpending ? (
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Category</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {highestSpending.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Spent</p>
                <p className="text-xl font-semibold text-red-600 dark:text-red-400">
                  {formatCurrency(highestSpending.value)}
                </p>
              </div>
              <Progress 
                value={(highestSpending.value / totalExpenses) * 100} 
                className="h-2"
              />
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {((highestSpending.value / totalExpenses) * 100).toFixed(1)}% of total expenses
              </p>
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No data available</p>
          )}
        </InsightCard>

        {/* Savings Rate */}
        <InsightCard
          icon={PiggyBank}
          title="Savings Rate"
          tooltip="Percentage of income saved after expenses"
        >
          <div className="space-y-3">
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {savingsRate.toFixed(1)}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                of income saved
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Savings</p>
              <p className={`text-xl font-semibold ${savingsAmount >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {formatCurrency(savingsAmount)}
              </p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Benchmark: 20%</span>
              <Badge variant={savingsRate >= 20 ? 'default' : 'destructive'}>
                {savingsRate >= 20 ? 'Good' : 'Improve'}
              </Badge>
            </div>
          </div>
        </InsightCard>

        {/* Average Transaction */}
        <InsightCard
          icon={Target}
          title="Average Transaction"
          tooltip="Average amount per transaction across all types"
        >
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Overall Average</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatCurrency(averageTransactionAmount)}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2">
                <p className="text-xs text-green-700 dark:text-green-300">Avg Income</p>
                <p className="text-sm font-semibold text-green-800 dark:text-green-200">
                  {formatCurrency(averageIncome)}
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-2">
                <p className="text-xs text-red-700 dark:text-red-300">Avg Expense</p>
                <p className="text-sm font-semibold text-red-800 dark:text-red-200">
                  {formatCurrency(averageExpense)}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Based on {transactions.length} transactions
            </p>
          </div>
        </InsightCard>
      </div>

      {/* Monthly Comparison */}
      {monthlyComparison && monthlyData.length >= 2 && (
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <CardTitle className="text-gray-900 dark:text-white flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
                  Monthly Comparison
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Comparing {monthlyComparison.currentMonth} to {monthlyComparison.previousMonth}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {monthlyData.length > 2 && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const currentIdx = selectedMonthIndex ?? monthlyData.length - 1;
                        if (currentIdx > 1) {
                          setSelectedMonthIndex(currentIdx - 1);
                        }
                      }}
                      disabled={(selectedMonthIndex ?? monthlyData.length - 1) <= 1}
                      className="h-8"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const currentIdx = selectedMonthIndex ?? monthlyData.length - 1;
                        if (currentIdx < monthlyData.length - 1) {
                          setSelectedMonthIndex(currentIdx + 1);
                        } else {
                          setSelectedMonthIndex(undefined);
                        }
                      }}
                      disabled={selectedMonthIndex === undefined || selectedMonthIndex >= monthlyData.length - 1}
                      className="h-8"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs max-w-xs">
                        Month-over-month comparison of income and expenses{monthlyData.length > 2 ? '. Use arrows to navigate different months.' : ''}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Income Comparison */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Income</h4>
                  <Badge
                    variant={monthlyComparison.incomeChange >= 0 ? 'default' : 'destructive'}
                    className={monthlyComparison.incomeChange >= 0 ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' : ''}
                  >
                    {monthlyComparison.incomeChange >= 0 ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {Math.abs(monthlyComparison.incomeChange).toFixed(1)}%
                  </Badge>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Current Month</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {formatCurrency(monthlyComparison.currentIncome)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Previous Month</span>
                    <span className="font-semibold text-gray-600 dark:text-gray-400">
                      {formatCurrency(monthlyComparison.previousIncome)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Change</span>
                    <span className={`font-bold ${monthlyComparison.incomeChange >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {monthlyComparison.incomeChange >= 0 ? '+' : ''}
                      {formatCurrency(monthlyComparison.currentIncome - monthlyComparison.previousIncome)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expense Comparison */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Expenses</h4>
                  <Badge
                    variant={monthlyComparison.expenseChange <= 0 ? 'default' : 'destructive'}
                    className={monthlyComparison.expenseChange <= 0 ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' : ''}
                  >
                    {monthlyComparison.expenseChange >= 0 ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {Math.abs(monthlyComparison.expenseChange).toFixed(1)}%
                  </Badge>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Current Month</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {formatCurrency(monthlyComparison.currentExpenses)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Previous Month</span>
                    <span className="font-semibold text-gray-600 dark:text-gray-400">
                      {formatCurrency(monthlyComparison.previousExpenses)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Change</span>
                    <span className={`font-bold ${monthlyComparison.expenseChange <= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {monthlyComparison.expenseChange >= 0 ? '+' : ''}
                      {formatCurrency(monthlyComparison.currentExpenses - monthlyComparison.previousExpenses)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Top Categories Analysis */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-gray-900 dark:text-white">Top 3 Categories Analysis</CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Your top three spending categories represent {topCategoriesPercentage.toFixed(1)}% of total expenses
              </p>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs max-w-xs">
                    Focus on these categories to make the biggest impact on your spending
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topCategories.map((category, index) => {
              const percentage = (category.value / totalExpenses) * 100;
              return (
                <div key={category.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        index === 0 ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400' :
                        index === 1 ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' :
                        'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                      }`}>
                        <span className="font-bold text-sm">#{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{category.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {formatCurrency(category.value)}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">{percentage.toFixed(1)}%</Badge>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
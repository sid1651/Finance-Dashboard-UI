import { useState, useMemo, useCallback, Suspense, lazy } from 'react';
import { useApp } from '../context/AppContext';
import { Transaction, TransactionType, TransactionCategory } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../components/ui/dialog';
import { Plus, Search, Filter, X } from 'lucide-react';
import { toast } from 'sonner';
import { useDebounce } from '../hooks/useDebounce';
import { TableSkeleton } from '../components/skeletons/TableSkeleton';

// Lazy load the table component
const TransactionsTable = lazy(() => import('../features/transactions/TransactionsTable').then(module => ({ default: module.TransactionsTable })));

export default function Transactions() {
  const { transactions, addTransaction, updateTransaction, deleteTransaction, userRole, filters, setFilters, resetFilters } = useApp();
  
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [searchInput, setSearchInput] = useState('');

  // Debounce search
  const debouncedSearch = useDebounce(searchInput, 300);

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    amount: '',
    category: '' as TransactionCategory,
    type: 'expense' as TransactionType,
    description: ''
  });

  const categories: Record<TransactionType, TransactionCategory[]> = useMemo(() => ({
    income: ['Salary', 'Freelance', 'Investment'],
    expense: ['Food & Dining', 'Shopping', 'Transportation', 'Entertainment', 'Bills & Utilities', 'Healthcare', 'Education', 'Other']
  }), []);

  // Filter and sort transactions using useMemo
  const filteredTransactions = useMemo(() => {
    return transactions.filter(txn => {
      // Type filter
      if (filters.type !== 'all' && txn.type !== filters.type) return false;
      
      // Category filter
      if (filters.category !== 'all' && txn.category !== filters.category) return false;
      
      // Date range filter
      if (filters.dateRange.from && txn.date < filters.dateRange.from) return false;
      if (filters.dateRange.to && txn.date > filters.dateRange.to) return false;
      
      // Search filter (debounced)
      if (debouncedSearch) {
        const query = debouncedSearch.toLowerCase();
        return (
          txn.description.toLowerCase().includes(query) ||
          txn.category.toLowerCase().includes(query) ||
          txn.amount.toString().includes(query)
        );
      }
      
      return true;
    });
  }, [transactions, filters, debouncedSearch]);

  const handleAddTransaction = useCallback(() => {
    if (!formData.amount || !formData.category || !formData.description) {
      toast.error('Please fill all fields');
      return;
    }

    addTransaction({
      date: formData.date,
      amount: parseFloat(formData.amount),
      category: formData.category,
      type: formData.type,
      description: formData.description
    });

    toast.success('Transaction added successfully');
    setIsAddDialogOpen(false);
    resetForm();
  }, [formData, addTransaction]);

  const handleEditTransaction = useCallback(() => {
    if (!editingTransaction || !formData.amount || !formData.category || !formData.description) {
      toast.error('Please fill all fields');
      return;
    }

    updateTransaction(editingTransaction.id, {
      date: formData.date,
      amount: parseFloat(formData.amount),
      category: formData.category,
      type: formData.type,
      description: formData.description
    });

    toast.success('Transaction updated successfully');
    setIsEditDialogOpen(false);
    setEditingTransaction(null);
    resetForm();
  }, [editingTransaction, formData, updateTransaction]);

  const handleDeleteTransaction = useCallback((id: string) => {
    if (confirm('Are you sure you want to delete this transaction?')) {
      deleteTransaction(id);
      toast.success('Transaction deleted successfully');
    }
  }, [deleteTransaction]);

  const openEditDialog = useCallback((transaction: Transaction) => {
    setEditingTransaction(transaction);
    setFormData({
      date: transaction.date,
      amount: transaction.amount.toString(),
      category: transaction.category,
      type: transaction.type,
      description: transaction.description
    });
    setIsEditDialogOpen(true);
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      date: new Date().toISOString().split('T')[0],
      amount: '',
      category: '' as TransactionCategory,
      type: 'expense',
      description: ''
    });
  }, []);

  const clearAllFilters = useCallback(() => {
    resetFilters();
    setSearchInput('');
  }, [resetFilters]);

  const allCategories = useMemo(() => [...categories.income, ...categories.expense], [categories]);
  const canAdd = userRole === 'admin';
  const canEdit = userRole === 'admin';
  const canDelete = userRole === 'admin';

  const hasActiveFilters = filters.type !== 'all' || filters.category !== 'all' || 
    filters.dateRange.from || filters.dateRange.to || searchInput;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Transactions</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage and explore your financial transactions
          </p>
        </div>
        {canAdd && (
          <Button onClick={() => setIsAddDialogOpen(true)} className="w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Add Transaction
          </Button>
        )}
      </div>

      {/* Filters Card */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-gray-900 dark:text-white flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters & Search
            </CardTitle>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                <X className="h-4 w-4 mr-1" />
                Clear All
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search transactions..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Type Filter */}
            <Select
              value={filters.type}
              onValueChange={(value: any) => setFilters({ type: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>

            {/* Category Filter */}
            <Select
              value={filters.category}
              onValueChange={(value: any) => setFilters({ category: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {allCategories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Date Range (simplified - you can enhance this with a date picker) */}
            <div className="flex items-center space-x-2">
              <Input
                type="date"
                value={filters.dateRange.from || ''}
                onChange={(e) => setFilters({ dateRange: { ...filters.dateRange, from: e.target.value || null } })}
                placeholder="From"
                className="text-sm"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredTransactions.length}</span> transaction(s)
          {hasActiveFilters && <span> (filtered from {transactions.length} total)</span>}
        </p>
      </div>

      {/* Transactions Table */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-gray-900 dark:text-white">
              All Transactions
            </CardTitle>
            {canAdd && (
              <Button onClick={() => setIsAddDialogOpen(true)} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Transaction
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Suspense fallback={<div className="p-6"><TableSkeleton rows={10} /></div>}>
            <div className="p-6">
              <TransactionsTable
                data={filteredTransactions}
                onEdit={openEditDialog}
                onDelete={handleDeleteTransaction}
                canEdit={canEdit}
                canDelete={canDelete}
              />
            </div>
          </Suspense>
        </CardContent>
      </Card>

      {/* Add Transaction Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Transaction</DialogTitle>
            <DialogDescription>
              Enter the details of your new transaction
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value: TransactionType) => {
                  setFormData({ ...formData, type: value, category: '' as TransactionCategory });
                }}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income">Income</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value: TransactionCategory) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories[formData.type].map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="Enter description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setIsAddDialogOpen(false);
              resetForm();
            }}>
              Cancel
            </Button>
            <Button onClick={handleAddTransaction}>Add Transaction</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Transaction Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Transaction</DialogTitle>
            <DialogDescription>
              Update the details of this transaction
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-type">Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value: TransactionType) => {
                  setFormData({ ...formData, type: value, category: '' as TransactionCategory });
                }}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income">Income</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value: TransactionCategory) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories[formData.type].map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-amount">Amount</Label>
              <Input
                id="edit-amount"
                type="number"
                step="0.01"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-date">Date</Label>
              <Input
                id="edit-date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-description">Description</Label>
              <Input
                id="edit-description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setIsEditDialogOpen(false);
              setEditingTransaction(null);
              resetForm();
            }}>
              Cancel
            </Button>
            <Button onClick={handleEditTransaction}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
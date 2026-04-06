import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../../components/ui/dialog';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { toast } from 'sonner';
import { useApp } from '../../context/AppContext';

interface AddCategoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddCategoryDialog({ isOpen, onClose }: AddCategoryDialogProps) {
  const { addTransaction, userRole } = useApp();
  const [categoryName, setCategoryName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userRole === 'viewer') {
      toast.error('Viewers cannot add transactions');
      return;
    }

    if (!categoryName.trim()) {
      toast.error('Please enter a category name');
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    // Add a new expense transaction with the category
    addTransaction({
      date: new Date().toISOString().split('T')[0],
      description: `${categoryName} expense`,
      amount: parseFloat(amount),
      type: 'expense',
      category: categoryName,
    });

    toast.success(`Added ${categoryName} category with $${amount} expense`);
    
    // Reset form
    setCategoryName('');
    setAmount('');
    onClose();
  };

  const handleClose = () => {
    setCategoryName('');
    setAmount('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-gray-900 dark:text-white">Add New Category</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Create a new spending category by adding your first expense in it.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="category-name" className="text-gray-900 dark:text-white">
                Category Name
              </Label>
              <Input
                id="category-name"
                placeholder="e.g., Hobbies, Pets, Education"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="amount" className="text-gray-900 dark:text-white">
                Initial Amount
              </Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button 
              type="submit"
              disabled={userRole === 'viewer'}
            >
              Add Category
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

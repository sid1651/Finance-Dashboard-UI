import { Transaction } from '../types';

// Generate mock transactions for the past 6 months
export const generateMockTransactions = (): Transaction[] => {
  const categories: Record<'income' | 'expense', string[]> = {
    income: ['Salary', 'Freelance', 'Investment'],
    expense: ['Food & Dining', 'Shopping', 'Transportation', 'Entertainment', 'Bills & Utilities', 'Healthcare', 'Education', 'Other']
  };

  const descriptions: Record<string, string[]> = {
    'Salary': ['Monthly Salary', 'Salary Payment', 'Payroll Deposit'],
    'Freelance': ['Project Payment', 'Freelance Work', 'Consulting Fee', 'Design Work'],
    'Investment': ['Stock Dividend', 'Investment Return', 'Crypto Gain', 'Bond Interest'],
    'Food & Dining': ['Grocery Shopping', 'Restaurant', 'Coffee Shop', 'Food Delivery', 'Lunch'],
    'Shopping': ['Online Shopping', 'Clothing', 'Electronics', 'Home Decor', 'Books'],
    'Transportation': ['Gas', 'Public Transit', 'Uber', 'Car Maintenance', 'Parking'],
    'Entertainment': ['Movie Tickets', 'Streaming Service', 'Concert', 'Gaming', 'Sports Event'],
    'Bills & Utilities': ['Electricity', 'Internet', 'Water', 'Phone Bill', 'Rent', 'Insurance'],
    'Healthcare': ['Doctor Visit', 'Pharmacy', 'Dental', 'Gym Membership', 'Health Insurance'],
    'Education': ['Online Course', 'Books', 'Tuition', 'Workshop', 'Training'],
    'Other': ['Gift', 'Donation', 'Miscellaneous', 'Emergency']
  };

  const transactions: Transaction[] = [];
  const today = new Date();
  
  for (let i = 0; i < 180; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Generate 1-3 transactions per day
    const transactionsPerDay = Math.floor(Math.random() * 3) + 1;
    
    for (let j = 0; j < transactionsPerDay; j++) {
      const type: 'income' | 'expense' = Math.random() > 0.7 ? 'income' : 'expense';
      const categoryList = categories[type];
      const category = categoryList[Math.floor(Math.random() * categoryList.length)];
      const descriptionList = descriptions[category];
      const description = descriptionList[Math.floor(Math.random() * descriptionList.length)];
      
      let amount: number;
      if (type === 'income') {
        amount = category === 'Salary' 
          ? Math.floor(Math.random() * 2000) + 4000 
          : Math.floor(Math.random() * 1500) + 200;
      } else {
        amount = category === 'Bills & Utilities' || category === 'Healthcare'
          ? Math.floor(Math.random() * 300) + 100
          : Math.floor(Math.random() * 150) + 10;
      }
      
      transactions.push({
        id: `txn-${Date.now()}-${i}-${j}-${Math.random().toString(36).substr(2, 9)}`,
        date: date.toISOString().split('T')[0],
        amount,
        category: category as any,
        type,
        description
      });
    }
  }
  
  return transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const mockTransactions = generateMockTransactions();

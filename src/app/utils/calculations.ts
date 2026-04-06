import { Transaction } from '../types';

export const calculateTotalBalance = (transactions: Transaction[]): number => {
  return transactions.reduce((acc, txn) => {
    return txn.type === 'income' ? acc + txn.amount : acc - txn.amount;
  }, 0);
};

export const calculateTotalIncome = (transactions: Transaction[]): number => {
  return transactions
    .filter(txn => txn.type === 'income')
    .reduce((acc, txn) => acc + txn.amount, 0);
};

export const calculateTotalExpenses = (transactions: Transaction[]): number => {
  return transactions
    .filter(txn => txn.type === 'expense')
    .reduce((acc, txn) => acc + txn.amount, 0);
};

export const getSpendingByCategory = (transactions: Transaction[]) => {
  const expenses = transactions.filter(txn => txn.type === 'expense');
  const categoryTotals: Record<string, number> = {};

  expenses.forEach(txn => {
    categoryTotals[txn.category] = (categoryTotals[txn.category] || 0) + txn.amount;
  });

  return Object.entries(categoryTotals)
    .map(([name, value]) => ({ 
      name, 
      value,
      id: `${name}-${value.toFixed(2)}` // Unique identifier using name and value
    }))
    .sort((a, b) => b.value - a.value);
};

export const getMonthlyData = (transactions: Transaction[]) => {
  const monthlyData: Record<string, { income: number; expenses: number; balance: number }> = {};

  transactions.forEach(txn => {
    const month = txn.date.substring(0, 7); // YYYY-MM
    if (!monthlyData[month]) {
      monthlyData[month] = { income: 0, expenses: 0, balance: 0 };
    }

    if (txn.type === 'income') {
      monthlyData[month].income += txn.amount;
    } else {
      monthlyData[month].expenses += txn.amount;
    }
  });

  return Object.entries(monthlyData)
    .map(([month, data]) => ({
      month,
      income: data.income,
      expenses: data.expenses,
      balance: data.income - data.expenses,
    }))
    .sort((a, b) => a.month.localeCompare(b.month))
    .slice(-6); // Last 6 months
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
};

export const getHighestSpendingCategory = (transactions: Transaction[]) => {
  const spending = getSpendingByCategory(transactions);
  return spending[0] || null;
};

export const getMonthlyComparison = (transactions: Transaction[], selectedMonthIndex?: number) => {
  const monthlyData = getMonthlyData(transactions);
  if (monthlyData.length < 2) return null;

  // If no month index provided, use the latest month
  const currentMonthIndex = selectedMonthIndex !== undefined 
    ? selectedMonthIndex 
    : monthlyData.length - 1;
  
  // Can't compare if it's the first month
  if (currentMonthIndex === 0) return null;

  const currentMonth = monthlyData[currentMonthIndex];
  const previousMonth = monthlyData[currentMonthIndex - 1];

  const incomeChange = ((currentMonth.income - previousMonth.income) / previousMonth.income) * 100;
  const expenseChange = ((currentMonth.expenses - previousMonth.expenses) / previousMonth.expenses) * 100;

  return {
    currentMonth: currentMonth.month,
    previousMonth: previousMonth.month,
    incomeChange: isFinite(incomeChange) ? incomeChange : 0,
    expenseChange: isFinite(expenseChange) ? expenseChange : 0,
    currentIncome: currentMonth.income,
    previousIncome: previousMonth.income,
    currentExpenses: currentMonth.expenses,
    previousExpenses: previousMonth.expenses,
    availableMonths: monthlyData.map((m, idx) => ({ month: m.month, index: idx })).filter(m => m.index > 0)
  };
};
export type TransactionType = 'income' | 'expense';

export type TransactionCategory = 
  | 'Salary'
  | 'Freelance'
  | 'Investment'
  | 'Food & Dining'
  | 'Shopping'
  | 'Transportation'
  | 'Entertainment'
  | 'Bills & Utilities'
  | 'Healthcare'
  | 'Education'
  | 'Other';

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: TransactionCategory;
  type: TransactionType;
  description: string;
}

export type UserRole = 'admin' | 'viewer';

export interface User {
  role: UserRole;
  name: string;
}

export interface TransactionFilters {
  search: string;
  type: TransactionType | 'all';
  category: TransactionCategory | 'all';
  dateRange: {
    from: string | null;
    to: string | null;
  };
}

export interface AppSettings {
  darkMode: boolean;
  exportFormat: 'csv' | 'json';
}
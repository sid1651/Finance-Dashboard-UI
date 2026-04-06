import React, { createContext, useContext, useState, useCallback, ReactNode, useMemo } from 'react';
import { Transaction, UserRole, TransactionFilters, AppSettings } from '../types';
import { mockTransactions } from '../data/mockData';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface AppContextType {
  // Transactions
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  updateTransaction: (id: string, transaction: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;
  addTransactions: (transactions: Transaction[]) => void;
  
  // User & Role
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  userName: string;
  setUserName: (name: string) => void;
  
  // Filters
  filters: TransactionFilters;
  setFilters: (filters: Partial<TransactionFilters>) => void;
  resetFilters: () => void;
  
  // Theme & Settings
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  settings: AppSettings;
  updateSettings: (settings: Partial<AppSettings>) => void;
  
  // Loading state
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const defaultFilters: TransactionFilters = {
  search: '',
  type: 'all',
  category: 'all',
  dateRange: {
    from: null,
    to: null
  }
};

const defaultSettings: AppSettings = {
  darkMode: false,
  exportFormat: 'csv'
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useLocalStorage<Transaction[]>('finance_transactions', mockTransactions);
  const [userRole, setUserRole] = useLocalStorage<UserRole>('finance_userRole', 'viewer');
  const [userName, setUserName] = useLocalStorage<string>('finance_userName', 'User');
  const [filters, setFiltersState] = useState<TransactionFilters>(defaultFilters);
  const [settings, setSettings] = useLocalStorage<AppSettings>('finance_settings', defaultSettings);
  const [isLoading, setIsLoading] = useState(false);

  // Sync theme with settings
  const theme = settings.darkMode ? 'dark' : 'light';

  // Apply theme to document
  React.useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.darkMode]);

  const addTransaction = useCallback((transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: `txn-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    setTransactions(prev => [newTransaction, ...prev]);
  }, [setTransactions]);

  const updateTransaction = useCallback((id: string, updatedData: Partial<Transaction>) => {
    setTransactions(prev =>
      prev.map(txn => (txn.id === id ? { ...txn, ...updatedData } : txn))
    );
  }, [setTransactions]);

  const deleteTransaction = useCallback((id: string) => {
    setTransactions(prev => prev.filter(txn => txn.id !== id));
  }, [setTransactions]);

  const addTransactions = useCallback((newTransactions: Transaction[]) => {
    setTransactions(prev => [...newTransactions, ...prev]);
  }, [setTransactions]);

  const setFilters = useCallback((newFilters: Partial<TransactionFilters>) => {
    setFiltersState(prev => ({ ...prev, ...newFilters }));
  }, []);

  const resetFilters = useCallback(() => {
    setFiltersState(defaultFilters);
  }, []);

  const toggleTheme = useCallback(() => {
    setSettings(prev => ({ ...prev, darkMode: !prev.darkMode }));
  }, [setSettings]);

  const updateSettings = useCallback((newSettings: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }, [setSettings]);

  const value = useMemo<AppContextType>(() => ({
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    addTransactions,
    userRole,
    setUserRole,
    userName,
    setUserName,
    filters,
    setFilters,
    resetFilters,
    theme,
    toggleTheme,
    settings,
    updateSettings,
    isLoading,
    setIsLoading
  }), [
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    addTransactions,
    userRole,
    setUserRole,
    userName,
    setUserName,
    filters,
    setFilters,
    resetFilters,
    theme,
    toggleTheme,
    settings,
    updateSettings,
    isLoading,
    setIsLoading
  ]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
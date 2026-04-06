import * as XLSX from 'xlsx';
import { Transaction } from '../types';

export interface ImportResult {
  success: boolean;
  data?: Transaction[];
  error?: string;
  importedCount?: number;
}

// Validate transaction data
const validateTransaction = (row: any, index: number): Transaction | null => {
  try {
    // Required fields
    if (!row.date || !row.description || !row.amount || !row.type || !row.category) {
      console.warn(`Row ${index + 1}: Missing required fields`);
      return null;
    }

    // Validate date
    const date = new Date(row.date);
    if (isNaN(date.getTime())) {
      console.warn(`Row ${index + 1}: Invalid date format`);
      return null;
    }

    // Validate amount
    const amount = parseFloat(row.amount);
    if (isNaN(amount) || amount <= 0) {
      console.warn(`Row ${index + 1}: Invalid amount`);
      return null;
    }

    // Validate type
    const type = row.type.toLowerCase();
    if (type !== 'income' && type !== 'expense') {
      console.warn(`Row ${index + 1}: Type must be 'income' or 'expense'`);
      return null;
    }

    return {
      id: row.id || `imported-${Date.now()}-${index}`,
      date: date.toISOString().split('T')[0],
      description: String(row.description).trim(),
      amount,
      type: type as 'income' | 'expense',
      category: String(row.category).trim(),
      tags: row.tags ? String(row.tags).split(',').map(t => t.trim()) : [],
    };
  } catch (error) {
    console.error(`Row ${index + 1}: Error parsing row`, error);
    return null;
  }
};

// Parse CSV file
export const parseCSV = async (file: File): Promise<ImportResult> => {
  try {
    const text = await file.text();
    const lines = text.split('\n').filter(line => line.trim());
    
    if (lines.length < 2) {
      return {
        success: false,
        error: 'CSV file is empty or has no data rows',
      };
    }

    // Parse header
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    
    // Validate required headers
    const requiredHeaders = ['date', 'description', 'amount', 'type', 'category'];
    const missingHeaders = requiredHeaders.filter(h => !headers.includes(h));
    
    if (missingHeaders.length > 0) {
      return {
        success: false,
        error: `Missing required columns: ${missingHeaders.join(', ')}`,
      };
    }

    // Parse data rows
    const transactions: Transaction[] = [];
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      const row: any = {};
      
      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });

      const transaction = validateTransaction(row, i - 1);
      if (transaction) {
        transactions.push(transaction);
      }
    }

    if (transactions.length === 0) {
      return {
        success: false,
        error: 'No valid transactions found in the file',
      };
    }

    return {
      success: true,
      data: transactions,
      importedCount: transactions.length,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to parse CSV file',
    };
  }
};

// Parse Excel file (XLSX)
export const parseExcel = async (file: File): Promise<ImportResult> => {
  try {
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: 'array' });
    
    // Get first sheet
    const sheetName = workbook.SheetNames[0];
    if (!sheetName) {
      return {
        success: false,
        error: 'Excel file has no sheets',
      };
    }

    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

    if (jsonData.length === 0) {
      return {
        success: false,
        error: 'Excel sheet is empty',
      };
    }

    // Normalize keys to lowercase
    const normalizedData = jsonData.map((row: any) => {
      const normalizedRow: any = {};
      Object.keys(row).forEach(key => {
        normalizedRow[key.toLowerCase().trim()] = row[key];
      });
      return normalizedRow;
    });

    // Validate required headers
    const firstRow = normalizedData[0];
    const requiredHeaders = ['date', 'description', 'amount', 'type', 'category'];
    const missingHeaders = requiredHeaders.filter(h => !(h in firstRow));
    
    if (missingHeaders.length > 0) {
      return {
        success: false,
        error: `Missing required columns: ${missingHeaders.join(', ')}`,
      };
    }

    // Parse and validate transactions
    const transactions: Transaction[] = [];
    normalizedData.forEach((row, index) => {
      const transaction = validateTransaction(row, index);
      if (transaction) {
        transactions.push(transaction);
      }
    });

    if (transactions.length === 0) {
      return {
        success: false,
        error: 'No valid transactions found in the file',
      };
    }

    return {
      success: true,
      data: transactions,
      importedCount: transactions.length,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to parse Excel file',
    };
  }
};

// Main import function
export const importTransactions = async (file: File): Promise<ImportResult> => {
  const extension = file.name.split('.').pop()?.toLowerCase();

  if (extension === 'csv') {
    return parseCSV(file);
  } else if (extension === 'xlsx' || extension === 'xls') {
    return parseExcel(file);
  } else {
    return {
      success: false,
      error: 'Unsupported file format. Please use CSV or XLSX files.',
    };
  }
};

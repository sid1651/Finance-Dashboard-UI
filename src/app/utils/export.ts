import { Transaction } from '../types';

export const exportToJSON = (data: Transaction[], filename: string = 'transactions') => {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  downloadFile(blob, `${filename}.json`);
};

export const exportToCSV = (data: Transaction[], filename: string = 'transactions') => {
  if (data.length === 0) {
    return;
  }

  // Get headers
  const headers = ['Date', 'Description', 'Category', 'Type', 'Amount'];
  
  // Convert data to CSV format
  const csvRows = [
    headers.join(','),
    ...data.map(txn => [
      txn.date,
      `"${txn.description.replace(/"/g, '""')}"`, // Escape quotes
      txn.category,
      txn.type,
      txn.amount.toString()
    ].join(','))
  ];

  const csvStr = csvRows.join('\n');
  const blob = new Blob([csvStr], { type: 'text/csv;charset=utf-8;' });
  downloadFile(blob, `${filename}.csv`);
};

const downloadFile = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

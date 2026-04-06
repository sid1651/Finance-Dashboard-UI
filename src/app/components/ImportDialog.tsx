import { useState, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Upload, FileSpreadsheet, FileText, AlertCircle, CheckCircle2, X, Download } from 'lucide-react';
import { importTransactions, ImportResult } from '../utils/import';
import { toast } from 'sonner';
import { Transaction } from '../types';

interface ImportDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (transactions: Transaction[]) => void;
}

export function ImportDialog({ isOpen, onClose, onImport }: ImportDialogProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [importing, setImporting] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [importResult, setImportResult] = useState<ImportResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    const extension = file.name.split('.').pop()?.toLowerCase();
    if (extension !== 'csv' && extension !== 'xlsx' && extension !== 'xls') {
      toast.error('Please select a CSV or XLSX file');
      return;
    }

    setSelectedFile(file);
    setImportResult(null);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleImport = async () => {
    if (!selectedFile) {
      toast.error('Please select a file first');
      return;
    }

    setImporting(true);
    setImportResult(null);

    try {
      const result = await importTransactions(selectedFile);
      setImportResult(result);

      if (result.success && result.data) {
        onImport(result.data);
        toast.success(`Successfully imported ${result.importedCount} transactions`);
        setTimeout(() => {
          handleClose();
        }, 1500);
      } else {
        toast.error(result.error || 'Failed to import transactions');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to import file';
      setImportResult({
        success: false,
        error: errorMessage,
      });
      toast.error(errorMessage);
    } finally {
      setImporting(false);
    }
  };

  const handleClose = () => {
    setSelectedFile(null);
    setImportResult(null);
    setImporting(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Import Transactions
          </DialogTitle>
          <DialogDescription>
            Upload a CSV or Excel (XLSX) file to import transactions
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* File Upload Area */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`
              relative border-2 border-dashed rounded-lg p-8 text-center transition-colors
              ${dragActive 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10' 
                : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
              }
            `}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileInputChange}
              className="hidden"
              id="file-upload"
            />

            {selectedFile ? (
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                  {selectedFile.name.endsWith('.csv') ? (
                    <FileText className="h-8 w-8 text-green-600 dark:text-green-400" />
                  ) : (
                    <FileSpreadsheet className="h-8 w-8 text-green-600 dark:text-green-400" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {selectedFile.name}
                  </span>
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {(selectedFile.size / 1024).toFixed(2)} KB
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <Upload className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    Click to upload
                  </label>
                  <span className="text-gray-600 dark:text-gray-400"> or drag and drop</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  CSV or XLSX files only
                </p>
              </div>
            )}
          </div>

          {/* Import Result */}
          {importResult && (
            <div
              className={`
                p-4 rounded-lg border
                ${importResult.success
                  ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800'
                  : 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800'
                }
              `}
            >
              <div className="flex items-start gap-3">
                {importResult.success ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className={`text-sm font-medium ${
                    importResult.success 
                      ? 'text-green-800 dark:text-green-200' 
                      : 'text-red-800 dark:text-red-200'
                  }`}>
                    {importResult.success 
                      ? `Successfully imported ${importResult.importedCount} transactions` 
                      : 'Import failed'
                    }
                  </p>
                  {importResult.error && (
                    <p className="text-xs text-red-700 dark:text-red-300 mt-1">
                      {importResult.error}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* File Format Info */}
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
              Required File Format
            </h4>
            <p className="text-xs text-blue-800 dark:text-blue-200 mb-2">
              Your file must contain the following columns:
            </p>
            <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1 ml-4 list-disc">
              <li><strong>date</strong> - Transaction date (YYYY-MM-DD or MM/DD/YYYY)</li>
              <li><strong>description</strong> - Transaction description</li>
              <li><strong>amount</strong> - Amount (positive number)</li>
              <li><strong>type</strong> - "income" or "expense"</li>
              <li><strong>category</strong> - Category name</li>
              <li><strong>tags</strong> - Optional, comma-separated tags</li>
            </ul>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={importing}>
            Cancel
          </Button>
          <Button 
            onClick={handleImport} 
            disabled={!selectedFile || importing}
          >
            {importing ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Importing...
              </>
            ) : (
              <>
                <Upload className="h-4 w-4 mr-2" />
                Import
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
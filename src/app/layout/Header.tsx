import { useApp } from '../context/AppContext';
import { Moon, Sun, Download, ChevronDown, Upload } from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '../components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip';
import { exportToCSV, exportToJSON } from '../utils/export';
import { toast } from 'sonner';
import { memo, useState } from 'react';
import { ImportDialog } from '../components/ImportDialog';
import { Transaction } from '../types';

export const Header = memo(() => {
  const { userRole, setUserRole, userName, theme, toggleTheme, transactions, settings, updateSettings, addTransactions } = useApp();
  const [isImportDialogOpen, setIsImportDialogOpen] = useState(false);

  const handleExport = (format: 'csv' | 'json') => {
    if (transactions.length === 0) {
      toast.error('No transactions to export');
      return;
    }

    if (format === 'csv') {
      exportToCSV(transactions);
      toast.success('Exported to CSV');
    } else {
      exportToJSON(transactions);
      toast.success('Exported to JSON');
    }
    
    updateSettings({ exportFormat: format });
  };

  const handleImport = (importedTransactions: Transaction[]) => {
    addTransactions(importedTransactions);
    toast.success('Transactions imported successfully');
  };

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          {/* Right Side Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 lg:space-x-4">
            {/* Role Switcher */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-400 hidden md:block">Role:</span>
              <Select value={userRole} onValueChange={(value: any) => setUserRole(value)}>
                <SelectTrigger className="w-[95px] sm:w-[110px] lg:w-[120px] h-9 bg-gray-50 dark:bg-gray-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Admin
                    </div>
                  </SelectItem>
                  <SelectItem value="viewer">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                      Viewer
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Export Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 px-2 sm:px-3 bg-gray-50 dark:bg-gray-700"
                  title="Export transactions"
                >
                  <Download className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Export</span>
                  <ChevronDown className="h-3 w-3 ml-1 hidden sm:inline" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleExport('csv')}>
                  Export as CSV
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('json')}>
                  Export as JSON
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Import Button */}
            <Button
              variant="outline"
              size="sm"
              className="h-9 px-2 sm:px-3 bg-gray-50 dark:bg-gray-700"
              title="Import transactions"
              onClick={() => setIsImportDialogOpen(true)}
            >
              <Upload className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Import</span>
            </Button>

            {/* Theme Toggle */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                    className="h-9 w-9 bg-gray-50 dark:bg-gray-700"
                  >
                    {theme === 'light' ? (
                      <Moon className="h-4 w-4" />
                    ) : (
                      <Sun className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Toggle {theme === 'light' ? 'dark' : 'light'} mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      <ImportDialog
        isOpen={isImportDialogOpen}
        onClose={() => setIsImportDialogOpen(false)}
        onImport={handleImport}
      />
    </header>
  );
});

Header.displayName = 'Header';
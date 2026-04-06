import { mockTransactions } from '../data/mockData';
import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/ui/alert-dialog';
import { Moon, Download, Trash2, FileText, FileJson, User } from 'lucide-react';
import { toast } from 'sonner';

export default function Settings() {
  const { settings, updateSettings, userName, setUserName } = useApp();
  const [nameInput, setNameInput] = useState(userName);

  const handleClearData = () => {
    localStorage.clear();
    toast.success('All data cleared. Reloading...');
    setTimeout(() => window.location.reload(), 1000);
  };

  const handleResetToDefault = () => {
    localStorage.setItem('finance_transactions', JSON.stringify(mockTransactions));
    toast.success('Data reset to default. Reloading...');
    setTimeout(() => window.location.reload(), 1000);
  };

  const handleUpdateName = () => {
    if (!nameInput.trim()) {
      toast.error('Please enter a valid name');
      return;
    }
    setUserName(nameInput.trim());
    toast.success('Name updated successfully');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your application preferences and data
        </p>
      </div>

      {/* Appearance Settings */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center">
            <Moon className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
            Appearance
          </CardTitle>
          <CardDescription>
            Customize the look and feel of the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="dark-mode">Dark Mode</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enable dark mode for better visibility in low light
              </p>
            </div>
            <Switch
              id="dark-mode"
              checked={settings.darkMode}
              onCheckedChange={(checked) => updateSettings({ darkMode: checked })}
            />
          </div>
        </CardContent>
      </Card>

      {/* Export Settings */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center">
            <Download className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
            Export Preferences
          </CardTitle>
          <CardDescription>
            Choose your preferred export format
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label>Default Export Format</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => updateSettings({ exportFormat: 'csv' })}
                className={`
                  flex items-center justify-center px-4 py-3 rounded-lg border-2 transition-all
                  ${settings.exportFormat === 'csv'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                    : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                  }
                `}
              >
                <FileText className="h-5 w-5 mr-2" />
                CSV
              </button>
              <button
                onClick={() => updateSettings({ exportFormat: 'json' })}
                className={`
                  flex items-center justify-center px-4 py-3 rounded-lg border-2 transition-all
                  ${settings.exportFormat === 'json'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                    : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                  }
                `}
              >
                <FileJson className="h-5 w-5 mr-2" />
                JSON
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center">
            <Trash2 className="h-5 w-5 mr-2 text-red-600 dark:text-red-400" />
            Data Management
          </CardTitle>
          <CardDescription>
            Manage your application data and storage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Reset Data
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Reset all transactions to default mock data
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Reset to Default
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Reset to Default Data?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will replace all your current transactions with default mock data. This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleResetToDefault}>
                      Reset Data
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Clear All Data
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Permanently delete all data including transactions, settings, and preferences
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="w-full sm:w-auto">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear All Data
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete all your data including transactions, settings, and preferences from local storage.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleClearData} className="bg-red-600 hover:bg-red-700">
                      Yes, Clear Everything
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800/50 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">
                About Data Storage
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                All your data is stored locally in your browser using localStorage. No data is sent to any server. 
                Clearing your browser cache will remove all stored data.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Name Settings */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center">
            <User className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
            User Name
          </CardTitle>
          <CardDescription>
            Set your preferred user name
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label>User Name</Label>
            <Input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="w-full"
            />
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={handleUpdateName}
            >
              Update Name
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
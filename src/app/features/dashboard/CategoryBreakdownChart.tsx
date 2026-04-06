import { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '../../utils/calculations';
import {
  Tooltip as TooltipUI,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import { Info, Plus } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { useState } from 'react';
import { AddCategoryDialog } from './AddCategoryDialog';
import { useApp } from '../../context/AppContext';

interface CategoryBreakdownChartProps {
  data: Array<{
    name: string;
    value: number;
    id?: string;
  }>;
}

const CategoryBreakdownChart = memo(({ data }: CategoryBreakdownChartProps) => {
  const [isAddCategoryDialogOpen, setIsAddCategoryDialogOpen] = useState(false);
  const { userRole } = useApp();

  // Ensure unique data with proper keys
  const chartData = data.map((item, index) => ({
    ...item,
    id: item.id || `${item.name}-${index}`,
    uniqueKey: `category-${item.name}-${index}` // For internal Recharts rendering
  }));

  return (
    <>
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <CardTitle className="text-gray-900 dark:text-white">Top Spending Categories</CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Your highest expense categories
              </p>
            </div>
            <TooltipProvider>
              <TooltipUI>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs max-w-xs">
                    Comparison of your top spending categories to identify where most of your money goes.
                  </p>
                </TooltipContent>
              </TooltipUI>
            </TooltipProvider>
          </div>
        </CardHeader>
        <CardContent>
          {chartData.length === 0 ? (
            <div className="h-[300px] flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">No expense data available</p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 120, bottom: 5 }}>
                <CartesianGrid key="grid" strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                <XAxis 
                  key="x-axis"
                  type="number" 
                  className="text-xs"
                  tick={{ fill: 'currentColor' }}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <YAxis 
                  key="y-axis"
                  type="category" 
                  dataKey="name" 
                  className="text-xs"
                  tick={{ fill: 'currentColor' }}
                  width={110}
                />
                <Tooltip
                  key="tooltip"
                  contentStyle={{
                    backgroundColor: 'var(--tooltip-bg)',
                    border: '1px solid var(--tooltip-border)',
                    borderRadius: '8px'
                  }}
                  formatter={(value: number) => formatCurrency(value)}
                />
                <Bar 
                  key="category-bar"
                  dataKey="value" 
                  fill="#3b82f6" 
                  radius={[0, 8, 8, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          )}
          <div className="mt-4">
            {userRole === 'admin' && (
              <Button
                variant="outline"
                onClick={() => setIsAddCategoryDialogOpen(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Category
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <AddCategoryDialog
        isOpen={isAddCategoryDialogOpen}
        onClose={() => setIsAddCategoryDialogOpen(false)}
      />
    </>
  );
});

CategoryBreakdownChart.displayName = 'CategoryBreakdownChart';

export default CategoryBreakdownChart;
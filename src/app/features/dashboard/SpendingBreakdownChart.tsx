import { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { formatCurrency } from '../../utils/calculations';
import {
  Tooltip as TooltipUI,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import { Info } from 'lucide-react';

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4', '#6366f1', '#f97316'];

interface SpendingBreakdownChartProps {
  data: Array<{
    name: string;
    value: number;
  }>;
}

const SpendingBreakdownChart = memo(({ data }: SpendingBreakdownChartProps) => {
  // Ensure unique data with proper keys
  const chartData = data.map((item, index) => ({
    ...item,
    id: `${item.name}-${index}`,
  }));

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <CardTitle className="text-gray-900 dark:text-white">Spending Breakdown</CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Expenses by category
            </p>
          </div>
          <TooltipProvider>
            <TooltipUI>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs max-w-xs">
                  Shows how your expenses are distributed across different categories.
                </p>
              </TooltipContent>
            </TooltipUI>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">No expense data available</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--tooltip-bg)',
                  border: '1px solid var(--tooltip-border)',
                  borderRadius: '8px'
                }}
                formatter={(value: number) => formatCurrency(value)}
              />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" barSize={20}>
                {chartData.map((entry, index) => (
                  <Cell key={entry.id} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
});

SpendingBreakdownChart.displayName = 'SpendingBreakdownChart';

export default SpendingBreakdownChart;
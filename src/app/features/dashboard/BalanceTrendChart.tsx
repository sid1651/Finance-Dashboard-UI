import { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '../../utils/calculations';
import {
  Tooltip as TooltipUI,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import { Info } from 'lucide-react';

interface BalanceTrendChartProps {
  data: Array<{
    month: string;
    income: number;
    expenses: number;
    balance: number;
  }>;
}

const BalanceTrendChart = memo(({ data }: BalanceTrendChartProps) => {
  // Add unique IDs to data for Recharts internal key generation
  const chartData = data.map((item) => ({
    ...item,
    id: `balance-${item.month}`,
  }));

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <CardTitle className="text-gray-900 dark:text-white">Balance Trend</CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Monthly income and expenses over the last 6 months
            </p>
          </div>
          <TooltipProvider>
            <TooltipUI>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs max-w-xs">
                  Shows the trend of your income and expenses over time. Green area represents income, red area represents expenses.
                </p>
              </TooltipContent>
            </TooltipUI>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <CartesianGrid key="grid" strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
            <XAxis 
              key="x-axis"
              dataKey="month" 
              className="text-xs"
              tick={{ fill: 'currentColor' }}
              tickFormatter={(value) => {
                if (!value) return '';
                const [year, month] = value.split('-');
                return `${month}/${year.slice(2)}`;
              }}
            />
            <YAxis 
              key="y-axis"
              className="text-xs"
              tick={{ fill: 'currentColor' }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              key="tooltip"
              contentStyle={{
                backgroundColor: 'var(--tooltip-bg)',
                border: '1px solid var(--tooltip-border)',
                borderRadius: '8px'
              }}
              formatter={(value: number) => formatCurrency(value)}
              labelFormatter={(label) => {
                if (!label) return '';
                const [year, month] = label.split('-');
                const date = new Date(parseInt(year), parseInt(month) - 1);
                return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
              }}
            />
            <Legend key="legend" />
            <Line
              key="income-line"
              type="monotone"
              dataKey="income"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ fill: '#10b981', r: 5 }}
              activeDot={{ r: 7 }}
              name="Income"
            />
            <Line
              key="expenses-line"
              type="monotone"
              dataKey="expenses"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ fill: '#ef4444', r: 5 }}
              activeDot={{ r: 7 }}
              name="Expenses"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
});

BalanceTrendChart.displayName = 'BalanceTrendChart';

export default BalanceTrendChart;
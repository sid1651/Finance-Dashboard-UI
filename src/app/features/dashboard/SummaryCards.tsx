import { memo, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import {
  calculateTotalBalance,
  calculateTotalIncome,
  calculateTotalExpenses,
  formatCurrency
} from '../../utils/calculations';
import { Transaction } from '../../types';
import { TrendingUp, TrendingDown, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';

interface SummaryCardsProps {
  transactions: Transaction[];
}

export const SummaryCards = memo(({ transactions }: SummaryCardsProps) => {
  const totalBalance = useMemo(() => calculateTotalBalance(transactions), [transactions]);
  const totalIncome = useMemo(() => calculateTotalIncome(transactions), [transactions]);
  const totalExpenses = useMemo(() => calculateTotalExpenses(transactions), [transactions]);
  
  const savingsRate = useMemo(() => 
    totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome) * 100 : 0,
    [totalIncome, totalExpenses]
  );

  const cards = useMemo(() => [
    {
      title: 'Total Balance',
      value: totalBalance,
      icon: DollarSign,
      iconColor: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      subtitle: (
        <span className={savingsRate >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
          {savingsRate >= 0 ? <TrendingUp className="h-3 w-3 mr-1 inline" /> : <TrendingDown className="h-3 w-3 mr-1 inline" />}
          {Math.abs(savingsRate).toFixed(1)}% savings rate
        </span>
      ),
      tooltip: 'Your current total balance (income minus expenses)'
    },
    {
      title: 'Total Income',
      value: totalIncome,
      icon: ArrowUpRight,
      iconColor: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      subtitle: 'All-time total',
      tooltip: 'Total income from all sources'
    },
    {
      title: 'Total Expenses',
      value: totalExpenses,
      icon: ArrowDownRight,
      iconColor: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      subtitle: 'All-time total',
      tooltip: 'Total expenses across all categories'
    }
  ], [totalBalance, totalIncome, totalExpenses, savingsRate]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 cursor-help hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {card.title}
                    </CardTitle>
                    <div className={`h-10 w-10 rounded-full ${card.bgColor} flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 ${card.iconColor}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      {formatCurrency(card.value)}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center">
                      {card.subtitle}
                    </p>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs max-w-xs">{card.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
});

SummaryCards.displayName = 'SummaryCards';

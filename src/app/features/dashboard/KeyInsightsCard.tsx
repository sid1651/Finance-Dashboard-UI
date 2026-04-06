import { memo, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Transaction } from '../../types';
import { getHighestSpendingCategory, getMonthlyComparison, calculateTotalIncome, calculateTotalExpenses } from '../../utils/calculations';
import { TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';

interface KeyInsightsCardProps {
  transactions: Transaction[];
}

const KeyInsightsCard = memo(({ transactions }: KeyInsightsCardProps) => {
  const insights = useMemo(() => {
    const highestSpending = getHighestSpendingCategory(transactions);
    const monthlyComparison = getMonthlyComparison(transactions);
    const totalIncome = calculateTotalIncome(transactions);
    const totalExpenses = calculateTotalExpenses(transactions);
    const savingsAmount = totalIncome - totalExpenses;

    const insightsList = [];

    if (highestSpending) {
      insightsList.push({
        icon: AlertCircle,
        color: 'text-orange-600 dark:text-orange-400',
        bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        title: 'Highest Spending Category',
        message: `${highestSpending.name} accounts for the most spending. Consider reviewing this category.`
      });
    }

    if (savingsAmount > 0) {
      insightsList.push({
        icon: TrendingUp,
        color: 'text-green-600 dark:text-green-400',
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        title: 'Positive Balance',
        message: `You're saving money! Keep up the good work with your financial discipline.`
      });
    }

    if (monthlyComparison) {
      if (monthlyComparison.expenseChange > 10) {
        insightsList.push({
          icon: AlertCircle,
          color: 'text-red-600 dark:text-red-400',
          bgColor: 'bg-red-50 dark:bg-red-900/20',
          title: 'Increased Spending',
          message: `Your expenses increased by ${monthlyComparison.expenseChange.toFixed(1)}% this month. Review recent transactions.`
        });
      } else if (monthlyComparison.incomeChange > 10) {
        insightsList.push({
          icon: TrendingUp,
          color: 'text-green-600 dark:text-green-400',
          bgColor: 'bg-green-50 dark:bg-green-900/20',
          title: 'Income Growth',
          message: `Great! Your income increased by ${monthlyComparison.incomeChange.toFixed(1)}% compared to last month.`
        });
      }
    }

    return insightsList;
  }, [transactions]);

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white flex items-center">
          <Lightbulb className="h-5 w-5 mr-2 text-yellow-600 dark:text-yellow-400" />
          Key Insights
        </CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Important observations from your financial data
        </p>
      </CardHeader>
      <CardContent>
        {insights.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            Not enough data to generate insights. Add more transactions to see personalized insights.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div key={index} className={`${insight.bgColor} rounded-lg p-4`}>
                  <div className="flex items-start space-x-3">
                    <Icon className={`h-5 w-5 ${insight.color} mt-0.5 flex-shrink-0`} />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                        {insight.title}
                      </h4>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        {insight.message}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
});

KeyInsightsCard.displayName = 'KeyInsightsCard';

export default KeyInsightsCard;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CreditCard,
  PiggyBank,
  BookOpen,
  Coffee
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const spendingData = [
  { month: "Sep", amount: 1200 },
  { month: "Oct", amount: 1450 },
  { month: "Nov", amount: 1100 },
  { month: "Dec", amount: 1680 },
];

const categoryData = [
  { name: "Food & Dining", value: 420, color: "hsl(195 85% 41%)" },
  { name: "Tuition & Books", value: 800, color: "hsl(150 80% 42%)" },
  { name: "Entertainment", value: 180, color: "hsl(38 92% 50%)" },
  { name: "Transportation", value: 120, color: "hsl(270 70% 50%)" },
  { name: "Other", value: 160, color: "hsl(210 20% 70%)" },
];

const budgetCategories = [
  {
    name: "Food & Dining",
    spent: 420,
    budget: 500,
    icon: Coffee,
    color: "bg-gradient-primary"
  },
  {
    name: "Tuition & Books",
    spent: 800,
    budget: 1000,
    icon: BookOpen,
    color: "bg-gradient-success"
  },
  {
    name: "Entertainment",
    spent: 180,
    budget: 200,
    icon: TrendingUp,
    color: "bg-amber-500"
  },
];

const recentTransactions = [
  { id: 1, description: "Campus Dining", amount: -12.50, category: "Food", date: "Today", isIncome: false },
  { id: 2, description: "Part-time Job", amount: 450.00, category: "Income", date: "Yesterday", isIncome: true },
  { id: 3, description: "Textbook Store", amount: -89.99, category: "Books", date: "2 days ago", isIncome: false },
  { id: 4, description: "Movie Tickets", amount: -24.00, category: "Entertainment", date: "3 days ago", isIncome: false },
];

export function FinancialDashboard() {
  const totalBalance = 2340.50;
  const monthlyBudget = 1700;
  const monthlySpent = 1420;
  const savingsGoal = 5000;
  const currentSavings = 2340.50;

  return (
    <div className="space-y-6">
      {/* Balance Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-primary text-white shadow-elevated">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white/90">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-white/90" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalBalance.toFixed(2)}</div>
            <p className="text-xs text-white/80">+2.5% from last month</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Budget</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${monthlySpent}</div>
            <div className="text-xs text-muted-foreground">
              of ${monthlyBudget} budget
            </div>
            <Progress value={(monthlySpent / monthlyBudget) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings Goal</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentSavings.toFixed(2)}</div>
            <div className="text-xs text-muted-foreground">
              of ${savingsGoal} goal
            </div>
            <Progress value={(currentSavings / savingsGoal) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Predicted Spending</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,650</div>
            <p className="text-xs text-muted-foreground">
              <TrendingDown className="inline h-3 w-3 text-success" />
              <span className="text-success">3% less than last month</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Monthly Spending Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={spendingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Bar dataKey="amount" fill="hsl(195 85% 41%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Spending Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Budget Categories & Recent Transactions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Budget Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {budgetCategories.map((category, index) => {
              const Icon = category.icon;
              const percentage = (category.spent / category.budget) * 100;
              const isOverBudget = percentage > 90;
              
              return (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{category.name}</p>
                      {isOverBudget && (
                        <Badge variant="destructive" className="text-xs">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Over Budget
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>${category.spent} of ${category.budget}</span>
                      <span>{percentage.toFixed(0)}%</span>
                    </div>
                    <Progress value={percentage} className="h-1" />
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Transactions</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${transaction.isIncome ? 'bg-success/10' : 'bg-primary/10'}`}>
                      {transaction.isIncome ? (
                        <TrendingUp className="h-4 w-4 text-success" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">{transaction.category} • {transaction.date}</p>
                    </div>
                  </div>
                  <div className={`text-sm font-medium ${transaction.isIncome ? 'text-success' : 'text-foreground'}`}>
                    {transaction.isIncome ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
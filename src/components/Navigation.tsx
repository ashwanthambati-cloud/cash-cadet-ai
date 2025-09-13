import { 
  BarChart3, 
  CreditCard, 
  PieChart, 
  Target, 
  TrendingUp, 
  Wallet,
  Settings,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    active: true,
  },
  {
    title: "Transactions",
    icon: CreditCard,
    active: false,
  },
  {
    title: "Budgets",
    icon: PieChart,
    active: false,
  },
  {
    title: "Goals",
    icon: Target,
    active: false,
  },
  {
    title: "Analytics",
    icon: TrendingUp,
    active: false,
  },
  {
    title: "Accounts",
    icon: Wallet,
    active: false,
  },
];

const bottomItems = [
  {
    title: "Settings",
    icon: Settings,
  },
  {
    title: "Help",
    icon: HelpCircle,
  },
];

export function Navigation() {
  return (
    <div className="pb-12 w-64 bg-card border-r">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.title}
                  variant={item.active ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    item.active && "bg-primary/10 text-primary hover:bg-primary/20"
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 right-4">
        <div className="space-y-1">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.title}
                variant="ghost"
                className="w-full justify-start"
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.title}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
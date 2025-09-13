import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { FinancialDashboard } from "@/components/FinancialDashboard";
import heroImage from "@/assets/hero-finance.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary">
        <div className="container px-6 py-16 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
                  Smart Finance for
                  <span className="block text-white/90">Smart Students</span>
                </h1>
                <p className="text-xl text-white/80 max-w-md">
                  AI-powered budgeting, predictive spending insights, and smart categorization 
                  designed specifically for student life.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-elevated">
                  Get Started Free
                </button>
                <button className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10k+</div>
                  <div className="text-sm text-white/70">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$2.5M</div>
                  <div className="text-sm text-white/70">Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.8★</div>
                  <div className="text-sm text-white/70">Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Student Finance Dashboard"
                className="rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <div className="flex">
        <Navigation />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
              <p className="text-muted-foreground">
                Welcome back, Alex! Here's your financial overview.
              </p>
            </div>
            <FinancialDashboard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;

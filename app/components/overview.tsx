import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BalanceHistory from "./balance-history";
import CreditCards from "./credit-cards";
import ExpenseStatistics from "./expense-statistics";
import QuickTransfer from "./quick-transfer";
import RecentTransactions from "./recent-transactions";
import WeeklyActivity from "./weekly-activity";

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* containerG */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* containerC */}
        <div className="lg:col-span-2 flex flex-col">
          {/* containerA */}
          <div className="flex justify-between items-center mb-4 max-w-[48rem]">
            <h2 className="text-xl font-semibold text-[#343c6a]">My Cards</h2>
            <Button variant="ghost" className="text-[#718ebf] px-0">
              See All
            </Button>
          </div>

          {/* containerB */}
          <div className="flex-1 overflow-hidden">
            <CreditCards />
          </div>
        </div>

        {/* containerF */}
        <div className="flex flex-col h-full">
          {/* containerD */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#343c6a]">
              Recent Transactions
            </h2>
            <Button variant="ghost" className="text-[#718ebf] px-0">
              See All
            </Button>
          </div>

          {/* containerE */}
          <div className="flex-1 overflow-hidden">
            <RecentTransactions />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6 bg-[#ffffff]">
          <h3 className="mb-6 text-lg font-semibold text-[#343c6a]">
            Weekly Activity
          </h3>
          <WeeklyActivity />
        </Card>
        <Card className="p-6 bg-[#ffffff]">
          <h3 className="mb-6 text-lg font-semibold text-[#343c6a]">
            Quick Transfer
          </h3>
          <QuickTransfer />
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6 bg-[#ffffff]">
          <h3 className="mb-6 text-lg font-semibold text-[#343c6a]">
            Balance History
          </h3>
          <BalanceHistory />
        </Card>
        <Card className="p-6 bg-[#ffffff]">
          <h3 className="mb-6 text-lg font-semibold text-[#343c6a]">
            Expense Statistics
          </h3>
          <ExpenseStatistics />
        </Card>
      </div>
    </div>
  );
}

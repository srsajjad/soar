import DashboardLayout from "../components/dashboard-layout"
import SettingsForm from "./settings-form"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="lg:p-8">
        <div className="bg-white lg:rounded-xl lg:p-8">
          <div className="border-b">
            <nav className="flex gap-8 px-4 lg:px-0 overflow-x-auto">
              {["Edit Profile", "Preference", "Security"].map((tab, i) => (
                <button
                  key={tab}
                  className={`pb-4 px-1 text-base font-medium whitespace-nowrap ${
                    i === 0
                      ? "text-[#4318FF] border-b-2 border-[#4318FF]"
                      : "text-[#718EBF]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          <SettingsForm />
        </div>
      </div>
    </DashboardLayout>
  )
}


import { Bell, Search, Settings } from 'lucide-react'
import { Input } from "@/components/ui/input"
import Sidebar from "./sidebar"
import MobileNav from "./mobile-nav"
import Image from 'next/image'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FD]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="lg:pl-64">
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <MobileNav />
            <h1 className="text-[28px] font-semibold text-[#1C1F37]">Overview</h1>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                className="h-10 w-[320px] rounded-xl bg-[#F8F9FD] pl-10 text-sm"
                placeholder="Search for something"
                type="search"
              />
            </div>
            <button className="hidden rounded-full p-2 hover:bg-gray-50 lg:block">
              <Settings className="h-6 w-6 text-gray-600" />
            </button>
            <button className="hidden rounded-full p-2 hover:bg-gray-50 lg:block">
              <Bell className="h-6 w-6 text-gray-600" />
            </button>
            <div className="relative h-10 w-10">
              <img
                alt="Profile"
                className="rounded-full object-cover"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20Group-3WfaM2IqpjeFIvfa7aw7tH6uZmM3vb.png"
              />
            </div>
          </div>
        </header>
        <div className="sticky top-0 border-b bg-white p-4 md:hidden z-50">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              className="h-10 w-full rounded-xl bg-[#F8F9FD] pl-10 text-sm"
              placeholder="Search for something"
              type="search"
            />
          </div>
        </div>
        <main className="p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}


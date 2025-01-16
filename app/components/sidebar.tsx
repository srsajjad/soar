"use client"

import { CreditCard, Home, Settings, Wallet, Receipt, PiggyBank, BadgeHelp, Gift, User } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed inset-y-0 left-0 w-64 border-r bg-white">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <CreditCard className="h-6 w-6 text-[#4318FF]" />
        <span className="text-xl font-semibold text-[#1C1F37]">Soar Task</span>
      </div>
      <nav className="space-y-1 p-4">
        <Link
          className={`flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-medium ${
            pathname === "/" 
              ? "bg-[#F4F7FE] text-[#4318FF]" 
              : "text-gray-600 hover:bg-gray-50"
          }`}
          href="/"
        >
          <Home className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        {[
          { icon: Receipt, label: "Transactions" },
          { icon: User, label: "Accounts" },
          { icon: PiggyBank, label: "Investments" },
          { icon: CreditCard, label: "Credit Cards" },
          { icon: Wallet, label: "Loans" },
          { icon: BadgeHelp, label: "Services" },
          { icon: Gift, label: "My Privileges" },
        ].map((item) => (
          <Link
            key={item.label}
            className="flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
            href="#"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
        <Link
          className={`flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-medium ${
            pathname === "/settings" 
              ? "bg-[#F4F7FE] text-[#4318FF]" 
              : "text-gray-600 hover:bg-gray-50"
          }`}
          href="/settings"
        >
          <Settings className="h-5 w-5" />
          <span>Setting</span>
        </Link>
      </nav>
    </div>
  )
}


'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts"

const data = [
  { name: "Sat", withdraw: 400, deposit: 240 },
  { name: "Sun", withdraw: 300, deposit: 139 },
  { name: "Mon", withdraw: 300, deposit: 221 },
  { name: "Tue", withdraw: 450, deposit: 290 },
  { name: "Wed", withdraw: 180, deposit: 250 },
  { name: "Thu", withdraw: 400, deposit: 230 },
  { name: "Fri", withdraw: 380, deposit: 310 },
]

export default function WeeklyActivity() {
  return (
    <div className="h-[300px]">
      <div className="mb-4 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#4318FF]" />
          <span className="text-sm text-gray-600">Deposit</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-black" />
          <span className="text-sm text-gray-600">Withdraw</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={8}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Bar
            dataKey="withdraw"
            fill="#1C1F37"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="deposit"
            fill="#4318FF"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}


'use client'

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jul", value: 200 },
  { name: "Aug", value: 400 },
  { name: "Sep", value: 750 },
  { name: "Oct", value: 300 },
  { name: "Nov", value: 500 },
  { name: "Dec", value: 700 },
  { name: "Jan", value: 400 },
]

export default function BalanceHistory() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4318FF"
            strokeWidth={2}
            dot={false}
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4318FF" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#4318FF" stopOpacity={0} />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


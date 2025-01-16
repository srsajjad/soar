'use client'

import { Cell, Pie, PieChart, ResponsiveContainer, Text } from "recharts"

const data = [
  { name: "Entertainment", value: 30, color: "#2B3674" },
  { name: "Investment", value: 20, color: "#4318FF" },
  { name: "Bill Expense", value: 15, color: "#FC7900" },
  { name: "Others", value: 35, color: "#232323" },
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <Text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </Text>
  )
}

export default function ExpenseStatistics() {
  return (
    <div className="h-[300px] text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            startAngle={-30}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color} 
                strokeWidth={0}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}


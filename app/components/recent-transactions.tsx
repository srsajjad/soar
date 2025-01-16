import Image from 'next/image'

export default function RecentTransactions() {
  const transactions = [
    {
      name: "Deposit from my Card",
      date: "28 January 2021",
      amount: -850,
      type: "card",
      bgColor: "bg-[#FFF5D9]",
    },
    {
      name: "Deposit Paypal",
      date: "25 January 2021",
      amount: 2500,
      type: "paypal",
      bgColor: "bg-[#E7EDFF]",
    },
    {
      name: "Jemi Wilson",
      date: "21 January 2021",
      amount: 5400,
      type: "user",
      bgColor: "bg-[#DCFAF8]",
    },
  ]

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'card':
        return (
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20313-F1QuIomnNqDb8UNUbjnXPPeXuCKv8M.svg"
            alt="Card transaction"
            width={55}
            height={55}
          />
        )
      case 'paypal':
        return (
          <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="27.5" cy="27.5" r="27.5" fill="#E7EDFF"/>
          </svg>
        )
      case 'user':
      default:
        return (
          <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="27.5" cy="27.5" r="27.5" fill="#DCFAF8"/>
          </svg>
        )
    }
  }

  return (
    <div className="h-full overflow-y-auto space-y-3 pr-2">
      {transactions.map((transaction, index) => (
        <div
          key={transaction.name + index}
          className="flex items-center justify-between rounded-xl border bg-white p-3"
        >
          <div className="flex items-center gap-3">
            <div className={`relative flex h-14 w-14 items-center justify-center rounded-full ${transaction.bgColor}`}>
              {getTransactionIcon(transaction.type)}
            </div>
            <div>
              <div className="font-medium text-[#343C6A]">{transaction.name}</div>
              <div className="text-xs text-[#718EBF]">{transaction.date}</div>
            </div>
          </div>
          <div
            className={`text-sm font-medium ${
              transaction.amount > 0 ? "text-[#05CD99]" : "text-[#FF4B4B]"
            }`}
          >
            {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount)}
          </div>
        </div>
      ))}
    </div>
  )
}


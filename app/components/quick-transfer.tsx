'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from 'lucide-react'

export default function QuickTransfer() {
  const people = [
    { name: "Livia Bator", role: "CEO", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20Group%20(3)-GUoMBcfCcznkzp451X7Kpd5hdjk689.svg" },
    { name: "Randy Press", role: "Director", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20Group%20(4)-HCkn4oRVAMHwf9qWW9qbeUIZ0WvI9O.svg" },
    { name: "Workman", role: "Designer", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20Group%20(5)-oXIxpZTJDrrt3mBqznOsoSSkpY7Umd.svg" },
  ];

  return (
    <div>
      <div className="mb-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:snap-none lg:pb-0">
        {people.map((person) => (
          <div
            key={person.name}
            className="flex-none snap-center"
          >
            <div className="relative h-16 w-16 rounded-full border-2 border-white">
              <img
                alt={person.name}
                className="h-full w-full rounded-full object-cover"
                src={person.image}
              />
            </div>
            <div className="mt-2 text-center text-xs">
              <div className="font-medium text-[#343C6A]">{person.name.split(' ')[0]}</div>
              <div className="text-[#718EBF]">{person.role}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <Input 
          placeholder="Write Amount" 
          defaultValue="525.50"
          className="h-12 rounded-xl bg-[#F4F7FE]" 
        />
        <Button className="h-12 rounded-xl bg-[#4318FF] px-8 hover:bg-[#3311DD]">
          Send
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}


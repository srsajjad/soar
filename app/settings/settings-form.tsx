'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pencil } from 'lucide-react'
import { useState } from "react"

export default function SettingsForm() {
  const [formData, setFormData] = useState({
    name: "Charlene Reed",
    username: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "**********",
    dob: "25 January 1990",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA"
  })

  return (
    <form onSubmit={(e) => e.preventDefault()} className="p-4 lg:p-0">
      <div className="flex flex-col items-center mb-8 mt-4">
        <div className="relative w-24 h-24 lg:w-32 lg:h-32">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20Group-3WfaM2IqpjeFIvfa7aw7tH6uZmM3vb.png"
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
          <button className="absolute bottom-0 right-0 bg-[#232323] rounded-full p-2">
            <Pencil className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm text-[#718EBF]">Your Name</label>
          <Input 
            defaultValue={formData.name}
            className="h-12 bg-[#F4F7FE] text-[#343C6A]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#718EBF]">User Name</label>
          <Input 
            defaultValue={formData.username}
            className="h-12 bg-[#F4F7FE] text-[#343C6A]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#718EBF]">Email</label>
          <Input 
            type="email"
            defaultValue={formData.email}
            className="h-12 bg-[#F4F7FE] text-[#343C6A]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#718EBF]">Password</label>
          <Input 
            type="password"
            defaultValue={formData.password}
            className="h-12 bg-[#F4F7FE] text-[#343C6A]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#718EBF]">Date of Birth</label>
          <Input 
            defaultValue={formData.dob}
            className="h-12 bg-[#F4F7FE] text-[#343C6A]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#718EBF]">Present Address</label>
          <Input 
            defaultValue={formData.presentAddress}
            className="h-12 bg-[#F4F7FE] text-[#343C6A]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#718EBF]">Permanent Address</label>
          <Input 
            defaultValue={formData.permanentAddress}
            className="h-12 bg-[#F4F7FE] text-[#343C6A]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#718EBF]">City</label>
          <Input 
            defaultValue={formData.city}
            className="h-12 bg-[#F4F7FE] text-[#343C6A]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#718EBF]">Postal Code</label>
          <Input 
            defaultValue={formData.postalCode}
            className="h-12 bg-[#F4F7FE] text-[#343C6A]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#718EBF]">Country</label>
          <Input 
            defaultValue={formData.country}
            className="h-12 bg-[#F4F7FE] text-[#343C6A]"
          />
        </div>

        <div className="pt-4">
          <Button className="w-full bg-[#232323] text-white h-12 rounded-xl hover:bg-[#232323]/90">
            Save
          </Button>
        </div>
      </div>
    </form>
  )
}


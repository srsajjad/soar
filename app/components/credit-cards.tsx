"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function CreditCards() {
  return (
    <div
      className="flex snap-x snap-mandatory gap-3 
      overflow-x-auto lg:overflow-x-visible 
      pb-4 lg:gap-4 lg:pb-0 
      h-full max-w-3xl
      lg:justify-center 
      custom-scrollbar"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="relative w-full max-w-sm flex-none lg:flex-1 snap-center h-full"
      >
        <Card className="bg-[#343c6a] p-5 text-white w-full h-full">
          <div className="mb-4 flex justify-between">
            <span className="text-sm">Balance</span>
            <div className="h-8 w-12 rounded bg-white/10" />
          </div>
          <div className="mb-8 text-[28px] font-semibold">$5,756</div>
          <div className="mb-6">
            <div className="text-sm text-[#8ba3cb]">CARD HOLDER</div>
            <div className="mt-1">Eddy Cusuma</div>
          </div>
          <div className="flex justify-between">
            <div className="text-xl tracking-[0.2em]">3778 **** **** 1234</div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-white/10" />
              <div className="h-8 w-8 rounded-full bg-white/10" />
            </div>
          </div>
        </Card>
      </motion.div>
      <motion.div
        whileHover={{ y: -5 }}
        className="relative w-full max-w-sm flex-none lg:flex-1 snap-center h-full"
      >
        <Card className="border-2 p-5 bg-[#ffffff] w-full h-full">
          <div className="mb-4 flex justify-between">
            <span className="text-sm text-[#718ebf]">Balance</span>
            <div className="h-8 w-12 rounded bg-[#f5f7fa]" />
          </div>
          <div className="mb-8 text-[28px] font-semibold text-[#343c6a]">
            $5,756
          </div>
          <div className="mb-6">
            <div className="text-sm text-[#718ebf]">CARD HOLDER</div>
            <div className="mt-1 text-[#343c6a]">Eddy Cusuma</div>
          </div>
          <div className="flex justify-between">
            <div className="text-xl tracking-[0.2em] text-[#343c6a]">
              3778 **** **** 1234
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-[#f5f7fa]" />
              <div className="h-8 w-8 rounded-full bg-[#f5f7fa]" />
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

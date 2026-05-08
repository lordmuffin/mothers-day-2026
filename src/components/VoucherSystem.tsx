"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, CheckCircle2, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Voucher {
  id: string;
  title: string;
  description: string;
  status: 'available' | 'redeemed';
}

const mockVouchers: Voucher[] = [
  { id: '1', title: 'Sleep In', description: 'Valid for one morning of undisturbed rest.', status: 'available' },
  { id: '2', title: 'Spa Day', description: 'A full day of pampering and relaxation.', status: 'available' },
  { id: '3', title: 'Dinner Date', description: 'A night out at your favorite restaurant.', status: 'redeemed' },
  { id: '4', title: 'Harley Walk', description: 'I take Harley for a long extra walk.', status: 'available' },
];

const VoucherSystem = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-lg font-medium text-[#36454F]">Digital Vouchers</h3>
        <span className="text-xs text-[#8A9A5B] font-medium">
          {mockVouchers.filter(v => v.status === 'available').length} Available
        </span>
      </div>

      <div className="grid gap-4">
        {mockVouchers.map((voucher, index) => (
          <motion.div
            key={voucher.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-2xl p-5 border transition-all ${
              voucher.status === 'redeemed' 
                ? 'bg-gray-50 border-gray-100 opacity-60' 
                : 'bg-white border-[#E8EAE0] shadow-sm hover:shadow-md'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className={`p-3 rounded-xl ${
                  voucher.status === 'redeemed' ? 'bg-gray-200' : 'bg-[#F0F2E8]'
                }`}>
                  <Ticket className={`w-5 h-5 ${
                    voucher.status === 'redeemed' ? 'text-gray-400' : 'text-[#8A9A5B]'
                  }`} />
                </div>
                <div>
                  <h4 className="font-medium text-[#36454F]">{voucher.title}</h4>
                  <p className="text-xs text-[#36454F]/60 mt-1">{voucher.description}</p>
                </div>
              </div>
              
              <Badge variant={voucher.status === 'redeemed' ? 'secondary' : 'outline'} className="rounded-full px-3 py-1 text-[10px] uppercase tracking-wider">
                {voucher.status === 'redeemed' ? (
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Redeemed</span>
                ) : (
                  <span className="flex items-center gap-1 text-[#8A9A5B]"><Clock className="w-3 h-3" /> Available</span>
                )}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VoucherSystem;
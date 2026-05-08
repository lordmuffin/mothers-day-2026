"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket, CheckCircle2, Clock, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { showSuccess, showError } from '@/utils/toast';

interface Voucher {
  id: string;
  title: string;
  description: string;
  status: 'available' | 'redeemed';
}

const VoucherSystem = () => {
  const [vouchers, setVouchers] = useState<Voucher[]>([
    { id: '1', title: 'Sleep In', description: 'Valid for one morning of undisturbed rest.', status: 'available' },
    { id: '2', title: 'Spa Day', description: 'A full day of pampering and relaxation.', status: 'available' },
    { id: '3', title: 'Dinner Date', description: 'A night out at your favorite restaurant.', status: 'redeemed' },
    { id: '4', title: 'Harley Walk', description: 'I take Harley for a long extra walk.', status: 'available' },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isSupabaseConfigured()) {
      fetchVouchers();
    }
  }, []);

  const fetchVouchers = async () => {
    try {
      const { data, error } = await supabase.from('vouchers').select('*').order('created_at', { ascending: true });
      if (error) throw error;
      if (data && data.length > 0) {
        setVouchers(data);
      }
    } catch (error) {
      console.error('Error fetching vouchers:', error);
    }
  };

  const handleRedeem = async (id: string) => {
    setLoading(true);
    try {
      if (isSupabaseConfigured()) {
        const { error } = await supabase
          .from('vouchers')
          .update({ status: 'redeemed' })
          .eq('id', id);
        
        if (error) throw error;
      }

      setVouchers(prev => prev.map(v => v.id === id ? { ...v, status: 'redeemed' } : v));
      showSuccess("Voucher redeemed! Enjoy your wellness moment.");
    } catch (error) {
      showError("Failed to redeem voucher.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-lg font-medium text-foreground">Digital Vouchers</h3>
        <span className="text-xs text-primary font-medium">
          {vouchers.filter(v => v.status === 'available').length} Available
        </span>
      </div>

      <div className="grid gap-4">
        <AnimatePresence mode="popLayout">
          {vouchers.map((voucher, index) => (
            <motion.div
              key={voucher.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-3xl p-5 border transition-all ${
                voucher.status === 'redeemed' 
                  ? 'bg-muted/50 border-border opacity-60' 
                  : 'bg-card border-border shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className={`p-3 rounded-2xl shrink-0 ${
                    voucher.status === 'redeemed' ? 'bg-muted' : 'bg-primary/10'
                  }`}>
                    <Ticket className={`w-5 h-5 ${
                      voucher.status === 'redeemed' ? 'text-muted-foreground' : 'text-primary'
                    }`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{voucher.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{voucher.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <Badge variant={voucher.status === 'redeemed' ? 'secondary' : 'outline'} className="rounded-full px-3 py-1 text-[10px] uppercase tracking-wider shrink-0">
                    {voucher.status === 'redeemed' ? (
                      <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Redeemed</span>
                    ) : (
                      <span className="flex items-center gap-1 text-primary"><Clock className="w-3 h-3" /> Available</span>
                    )}
                  </Badge>
                  
                  {voucher.status === 'available' && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleRedeem(voucher.id)}
                      disabled={loading}
                      className="text-[10px] uppercase tracking-widest h-7 px-2 hover:bg-primary/10 hover:text-primary"
                    >
                      {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : "Redeem Now"}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VoucherSystem;
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MadeWithDyad } from "@/components/made-with-dyad";
import CountdownWidget from '@/components/CountdownWidget';
import VoucherSystem from '@/components/VoucherSystem';
import HarleyGallery from '@/components/HarleyGallery';
import SelfCareLog from '@/components/SelfCareLog';
import { User } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F7F8F3] pb-24">
      {/* Header */}
      <header className="px-6 pt-12 pb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-light text-[#36454F]">Executive Wellness</h1>
          <p className="text-xs text-[#8A9A5B] font-medium tracking-widest uppercase mt-1">Partner Dashboard</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-white border border-[#E8EAE0] flex items-center justify-center shadow-sm">
          <User className="w-6 h-6 text-[#36454F]/40" />
        </div>
      </header>

      <main className="px-6 space-y-10 max-w-md mx-auto">
        {/* Hero Section */}
        <CountdownWidget />

        {/* Vouchers Section */}
        <VoucherSystem />

        {/* Harley Gallery */}
        <HarleyGallery />

        {/* Self-Care Log */}
        <SelfCareLog />
      </main>

      {/* Bottom Navigation (Native App Feel) */}
      <nav className="fixed bottom-6 left-6 right-6 bg-[#36454F] rounded-[2rem] p-4 shadow-xl flex justify-around items-center max-w-md mx-auto z-50">
        <div className="w-10 h-10 rounded-full bg-[#8A9A5B] flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center opacity-40">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center opacity-40">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </nav>

      <footer className="mt-12">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;
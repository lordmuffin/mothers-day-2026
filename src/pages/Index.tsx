"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MadeWithDyad } from "@/components/made-with-dyad";
import CountdownWidget from '@/components/CountdownWidget';
import VoucherSystem from '@/components/VoucherSystem';
import HarleyGallery from '@/components/HarleyGallery';
import SelfCareLog from '@/components/SelfCareLog';
import WellnessTip from '@/components/WellnessTip';
import { User, Moon, Sun, Bell } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background pb-32 transition-colors duration-300">
      {/* Header */}
      <header className="px-6 pt-12 pb-8 flex justify-between items-center max-w-md mx-auto sticky top-0 bg-background/80 backdrop-blur-md z-40">
        <div>
          <h1 className="text-2xl font-light text-foreground tracking-tight">Executive Wellness</h1>
          <p className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase mt-1">Partner Dashboard</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 rounded-full hover:bg-muted"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-sm">
            <User className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </header>

      <main className="px-6 space-y-10 max-w-md mx-auto">
        {/* Hero Section */}
        <CountdownWidget />

        {/* Daily Tip */}
        <WellnessTip />

        {/* Vouchers Section */}
        <VoucherSystem />

        {/* Harley Gallery */}
        <HarleyGallery />

        {/* Self-Care Log */}
        <SelfCareLog />
      </main>

      {/* Bottom Navigation (Native App Feel) */}
      <nav className="fixed bottom-8 left-6 right-6 bg-secondary rounded-[2.5rem] p-4 shadow-2xl flex justify-around items-center max-w-md mx-auto z-50 border border-white/10">
        <motion.div whileTap={{ scale: 0.9 }} className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
          <div className="w-2 h-2 bg-primary-foreground rounded-full" />
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }} className="w-12 h-12 rounded-full flex items-center justify-center opacity-40">
          <Bell className="w-5 h-5 text-primary-foreground" />
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }} className="w-12 h-12 rounded-full flex items-center justify-center opacity-40">
          <User className="w-5 h-5 text-primary-foreground" />
        </motion.div>
      </nav>

      <footer className="mt-12">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;
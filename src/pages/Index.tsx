"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MadeWithDyad } from "@/components/made-with-dyad";
import CountdownWidget from '@/components/CountdownWidget';
import VoucherSystem from '@/components/VoucherSystem';
import HarleyGallery from '@/components/HarleyGallery';
import SelfCareLog from '@/components/SelfCareLog';
import { User, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background pb-24 transition-colors duration-300">
      {/* Header */}
      <header className="px-6 pt-12 pb-8 flex justify-between items-center max-w-md mx-auto">
        <div>
          <h1 className="text-2xl font-light text-foreground">Executive Wellness</h1>
          <p className="text-xs text-primary font-medium tracking-widest uppercase mt-1">Partner Dashboard</p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 rounded-full bg-card border-border shadow-sm"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-sm">
            <User className="w-5 h-5 text-foreground/40" />
          </div>
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
      <nav className="fixed bottom-6 left-6 right-6 bg-secondary rounded-[2rem] p-4 shadow-xl flex justify-around items-center max-w-md mx-auto z-50">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <div className="w-2 h-2 bg-primary-foreground rounded-full" />
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center opacity-40">
          <div className="w-2 h-2 bg-primary-foreground rounded-full" />
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center opacity-40">
          <div className="w-2 h-2 bg-primary-foreground rounded-full" />
        </div>
      </nav>

      <footer className="mt-12">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;
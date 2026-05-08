"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const CountdownWidget = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Mock countdown to a wellness retreat or weekend
    const target = new Date();
    target.setDate(target.getDate() + 4);
    target.setHours(17, 0, 0);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-10">
        <Calendar className="w-24 h-24 text-primary" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Next Wellness Milestone</span>
        </div>
        
        <div className="flex gap-6 items-baseline">
          <div className="text-center">
            <span className="text-5xl font-light text-foreground tracking-tighter">{timeLeft.days}</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mt-1">Days</span>
          </div>
          <div className="text-3xl font-extralight text-muted-foreground/30">:</div>
          <div className="text-center">
            <span className="text-5xl font-light text-foreground tracking-tighter">{timeLeft.hours}</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mt-1">Hrs</span>
          </div>
          <div className="text-3xl font-extralight text-muted-foreground/30">:</div>
          <div className="text-center">
            <span className="text-5xl font-light text-foreground tracking-tighter">{timeLeft.minutes}</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mt-1">Min</span>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground font-light">
          <Clock className="w-3 h-3" />
          <span>Scheduled for Friday, 5:00 PM</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownWidget;
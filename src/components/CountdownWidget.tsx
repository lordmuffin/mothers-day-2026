"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

const CountdownWidget = () => {
  const targetDate = new Date('2026-05-20T00:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeLeft({
        days: differenceInDays(targetDate, now),
        hours: differenceInHours(targetDate, now) % 24,
        minutes: differenceInMinutes(targetDate, now) % 60,
        seconds: differenceInSeconds(targetDate, now) % 60
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center px-3">
      <span className="text-2xl font-light text-[#36454F]">{value.toString().padStart(2, '0')}</span>
      <span className="text-[10px] uppercase tracking-widest text-[#8A9A5B] font-medium">{label}</span>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm border border-[#E8EAE0]"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-[#F0F2E8] rounded-full">
            <Calendar className="w-4 h-4 text-[#8A9A5B]" />
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8A9A5B]">Upcoming Escape</span>
        </div>
        
        <h2 className="text-3xl font-light text-[#36454F] mb-2">Radisson Blu Staycation</h2>
        <div className="flex items-center gap-1 text-sm text-[#36454F]/60 mb-8">
          <MapPin className="w-3 h-3" />
          <span>Late May 2026</span>
        </div>

        <div className="flex justify-between items-center bg-[#F7F8F3] rounded-2xl p-6">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="h-8 w-[1px] bg-[#E8EAE0]" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="h-8 w-[1px] bg-[#E8EAE0]" />
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <div className="h-8 w-[1px] bg-[#E8EAE0]" />
          <TimeUnit value={timeLeft.seconds} label="Secs" />
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#8A9A5B]/5 rounded-full blur-3xl" />
    </motion.div>
  );
};

export default CountdownWidget;
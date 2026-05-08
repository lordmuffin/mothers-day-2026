"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const WellnessTip = () => {
  const tips = [
    "Take a deep breath. You're doing amazing today.",
    "Hydration is key to executive performance. Drink some water!",
    "A 5-minute stretch can reset your entire afternoon.",
    "Remember to celebrate the small wins today.",
    "Your peace of mind is your greatest asset."
  ];
  
  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-primary/10 border border-primary/20 rounded-3xl p-6 relative overflow-hidden"
    >
      <Quote className="absolute -right-2 -bottom-2 w-24 h-24 text-primary/5 -rotate-12" />
      <div className="relative z-10">
        <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-2 block">Daily Reflection</span>
        <p className="text-[#36454F] dark:text-foreground/80 italic font-light leading-relaxed">
          "{randomTip}"
        </p>
      </div>
    </motion.div>
  );
};

export default WellnessTip;
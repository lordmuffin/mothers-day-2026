import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

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
      className="bg-card border border-border rounded-[2rem] p-6 relative overflow-hidden shadow-sm"
    >
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-3 h-3 text-primary" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Daily Reflection</span>
        </div>
        <p className="text-foreground/80 italic font-light leading-relaxed text-sm">
          "{randomTip}"
        </p>
      </div>
      <Quote className="absolute right-4 bottom-4 w-8 h-8 text-primary/10" />
    </motion.div>
  );
};

export default WellnessTip;
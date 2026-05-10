"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import local images
import h1 from '@/assets/gallery/harley_1.jpg';
import h2 from '@/assets/gallery/harley_2.jpg';
import h3 from '@/assets/gallery/harley_3.jpg';
import h4 from '@/assets/gallery/harley_4.jpg';
import h5 from '@/assets/gallery/harley_5.jpg';
import h6 from '@/assets/gallery/harley_6.jpg';
import h7 from '@/assets/gallery/harley_7.jpg';
import h8 from '@/assets/gallery/harley_8.jpg';
import h9 from '@/assets/gallery/harley_9.jpg';
import h10 from '@/assets/gallery/harley_10.jpg';
import h11 from '@/assets/gallery/harley_11.jpg';
import h12 from '@/assets/gallery/harley_12.jpg';

const HarleyGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const photos = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium text-foreground">The Harley Gallery</h3>
          <Heart className="w-4 h-4 text-primary fill-primary" />
        </div>
        <div className="flex gap-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-8 h-8 rounded-full"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-8 h-8 rounded-full"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="min-w-[280px] h-[350px] rounded-[2rem] overflow-hidden snap-center shadow-sm border border-border shrink-0"
          >
            <img 
              src={photo} 
              alt={`Harley Moment ${index + 1}`} 
              className="w-full h-full object-cover pointer-events-none"
            />
          </motion.div>
        ))}
        {/* Spacer for end of scroll */}
        <div className="min-w-[20px] shrink-0" />
      </div>
    </div>
  );
};

export default HarleyGallery;
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const HarleyGallery = () => {
  // Using high-quality placeholders for now
  const photos = [
    "https://photos.fife.usercontent.google.com/pw/AP1GczPA4z-n9x63nUB5XioU2T_FqcL7ojZ61Ams39pm2rfUfbtvmlYiv00TrA=w1703-h1277-s-no-gm?authuser=0",
    "",
    "",
    "",
    "",
    
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-lg font-medium text-[#36454F]">The Harley Gallery</h3>
        <Heart className="w-4 h-4 text-[#8A9A5B] fill-[#8A9A5B]" />
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x no-scrollbar">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="min-w-[280px] h-[350px] rounded-[2rem] overflow-hidden snap-center shadow-sm border border-[#E8EAE0]"
          >
            <img 
              src={photo} 
              alt={`Harley Moment ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HarleyGallery;
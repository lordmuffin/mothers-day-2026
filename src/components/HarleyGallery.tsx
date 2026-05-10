import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const HarleyGallery = () => {
  // Using high-quality placeholders for now
  const photos = [
    "https://photos.fife.usercontent.google.com/pw/AP1GczPA4z-n9x63nUB5XioU2T_FqcL7ojZ61Ams39pm2rfUfbtvmlYiv00TrA=w1703-h1277-s-no-gm?authuser=0",
    "https://photos.fife.usercontent.google.com/pw/AP1GczMIY41dbde4K2bF-i48c3_qobohD7myAxF3qiNCERGkx5PTU6IM_YNysg=w1703-h1277-s-no-gm?authuser=0",
    "https://photos.fife.usercontent.google.com/pw/AP1GczN6Cee9mnXsma_AnBUWPgPzX7m277SPPdwv7kJpByx96EZYSXJpICazfA=w1703-h1277-s-no-gm?authuser=0",
    "https://photos.fife.usercontent.google.com/pw/AP1GczNWk2tyy-HzZQB2yG96X6XE6MGV9SdvYWQusfHahWAagIGH9rc-V6FerA=w1703-h1277-s-no-gm?authuser=0",
    "https://photos.fife.usercontent.google.com/pw/AP1GczNpVZgj585HtuuKebSEjQVwatZeLOff62VSjUAUItFvcYaLjagdO_iumQ=w958-h1277-s-no-gm?authuser=0",
    "https://photos.fife.usercontent.google.com/pw/AP1GczPsasJ7ZFAnBtSr3P30DZNwZoK_Z1X61fESzqMzXfZb39cXk-KL8pm4BQ=w958-h1277-s-no-gm?authuser=0",
    "https://photos.fife.usercontent.google.com/pw/AP1GczMeWh3BOS92TOSbyw5aSGnK3AgrbmgeU-LXzbfcb9bjfMPLKg5Po9ZU-w=w958-h1277-s-no-gm?authuser=0",
    "https://photos.fife.usercontent.google.com/pw/AP1GczP5rcUgsqGkrIzaR7RKCi2F6T4wmJQKcnCqIY1Uxszo2Knjn0E4CdNlbQ=w1703-h1277-s-no-gm?authuser=0"

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
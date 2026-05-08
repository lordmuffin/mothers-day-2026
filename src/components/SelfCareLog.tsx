"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Sparkles, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SelfCareLog = () => {
  const [items, setItems] = useState([
    { id: '1', text: 'Morning meditation', completed: true },
    { id: '2', text: 'Read 20 pages of my book', completed: false },
  ]);
  const [newItem, setNewItem] = useState('');

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    setItems([{ id: Date.now().toString(), text: newItem, completed: false }, ...items]);
    setNewItem('');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 px-2">
        <Sparkles className="w-4 h-4 text-[#8A9A5B]" />
        <h3 className="text-lg font-medium text-[#36454F]">Self-Care Log</h3>
      </div>

      <form onSubmit={addItem} className="flex gap-2">
        <Input 
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="What's on your mind today?"
          className="rounded-2xl border-[#E8EAE0] bg-white focus-visible:ring-[#8A9A5B]"
        />
        <Button type="submit" className="rounded-2xl bg-[#8A9A5B] hover:bg-[#7A8A4B] text-white px-4">
          <Plus className="w-5 h-5" />
        </Button>
      </form>

      <div className="space-y-2">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex items-center justify-between p-4 bg-white rounded-2xl border border-[#E8EAE0] shadow-sm"
            >
              <span className={`text-sm ${item.completed ? 'line-through text-gray-400' : 'text-[#36454F]'}`}>
                {item.text}
              </span>
              <button 
                onClick={() => setItems(items.filter(i => i.id !== item.id))}
                className="text-gray-300 hover:text-red-400 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SelfCareLog;
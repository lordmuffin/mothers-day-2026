"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Sparkles, Trash2, CheckCircle2, Circle, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase, isSupabaseConfigured } from '@/integrations/supabase/client';
import { showSuccess, showError } from '@/utils/toast';

interface LogItem {
  id: string;
  text: string;
  completed: boolean;
}

const SelfCareLog = () => {
  const [items, setItems] = useState<LogItem[]>([]);
  const [newItem, setNewItem] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from('self_care_logs')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        setItems(data || []);
      }
    } catch (error: any) {
      console.error('Error fetching logs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from('self_care_logs')
          .insert([{ text: newItem, completed: false }])
          .select()
          .single();
        
        if (error) throw error;
        if (data) {
          setItems([data, ...items]);
          setNewItem('');
          showSuccess("Added to your log.");
        }
      }
    } catch (error) {
      showError("Failed to save log.");
      console.error(error);
    }
  };

  const toggleComplete = async (id: string, currentStatus: boolean) => {
    try {
      // Optimistic update
      setItems(prev => prev.map(i => i.id === id ? { ...i, completed: !currentStatus } : i));

      if (isSupabaseConfigured()) {
        const { error } = await supabase
          .from('self_care_logs')
          .update({ completed: !currentStatus })
          .eq('id', id);
        
        if (error) throw error;
      }
    } catch (error) {
      // Rollback on error
      setItems(prev => prev.map(i => i.id === id ? { ...i, completed: currentStatus } : i));
      showError("Update failed.");
      console.error(error);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      // Optimistic update
      const previousItems = [...items];
      setItems(prev => prev.filter(i => i.id !== id));

      if (isSupabaseConfigured()) {
        const { error } = await supabase
          .from('self_care_logs')
          .delete()
          .eq('id', id);
        
        if (error) {
          setItems(previousItems);
          throw error;
        }
        showSuccess("Entry removed.");
      }
    } catch (error) {
      showError("Delete failed.");
      console.error(error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 px-2">
        <Sparkles className="w-4 h-4 text-primary" />
        <h3 className="text-lg font-medium text-foreground">Self-Care Log</h3>
      </div>

      <form onSubmit={addItem} className="flex gap-2">
        <Input 
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="What's on your mind today?"
          className="rounded-2xl border-border bg-card focus-visible:ring-primary h-12"
        />
        <Button type="submit" className="rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground px-4 h-12">
          <Plus className="w-5 h-5" />
        </Button>
      </form>

      <div className="space-y-3 min-h-[100px]">
        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center justify-between p-4 bg-card rounded-2xl border border-border shadow-sm group"
              >
                <div 
                  className="flex items-center gap-3 flex-1 cursor-pointer" 
                  onClick={() => toggleComplete(item.id, item.completed)}
                >
                  {item.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground shrink-0" />
                  )}
                  <span className={`text-sm transition-all ${item.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                    {item.text}
                  </span>
                </div>
                <button 
                  onClick={() => deleteItem(item.id)}
                  className="text-muted-foreground hover:text-destructive transition-colors p-1 opacity-0 group-hover:opacity-100"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
            {!isLoading && items.length === 0 && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted-foreground text-sm py-8"
              >
                No entries yet. Start by adding one above!
              </motion.p>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default SelfCareLog;
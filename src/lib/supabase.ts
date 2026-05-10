import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://cawpbkmudrnsqbdzrakq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhd3Bia211ZHJuc3FiZHpyYWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyMDI5NjQsImV4cCI6MjA5Mzc3ODk2NH0.KQ1mXz69NE6qPdYr_8Yj2z9gewVbutKg-JroMnHeuBo";

export const isSupabaseConfigured = () => {
  return !!SUPABASE_URL && !!SUPABASE_PUBLISHABLE_KEY;
};

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
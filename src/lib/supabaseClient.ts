import { createClient, SupabaseClientOptions } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const options: SupabaseClientOptions = {
  db: {
    schema: 'public'
  },
  auth: { persistSession: true }
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, options);

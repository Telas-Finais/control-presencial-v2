import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://azbebkpnsldielcztfhp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6YmVia3Buc2xkaWVsY3p0ZmhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MzIyMzUsImV4cCI6MjA4MTMwODIzNX0.KzOu_5f6w7aZPZCHE-6uD1m-vpxQnP9t9pBUb_1XGoo'; // tu key completa

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

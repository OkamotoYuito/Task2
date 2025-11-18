import { createClient } from "@supabase/supabase-js";

export const tableFetch = () => {
  const VITE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
  const VITE_SUPABASE_PUBLISHABLE_KEY = import.meta.env
    .VITE_SUPABASE_PUBLISHABLE_KEY;

  const supabaseClient = createClient(
    VITE_SUPABASE_URL,
    VITE_SUPABASE_PUBLISHABLE_KEY
  );

  const { data, error } = supabaseClient.from("study-record").select("*");
  if (error) {
    throw error;
  }
  return data;
};

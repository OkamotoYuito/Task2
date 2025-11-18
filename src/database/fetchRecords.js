import { supabase } from "./supabase";

export const fetchRecords = async () => {
  const { data, error } = await supabase.from("study-record").select("*");
  if (error) {
    console.error("Fetch error:", error);
    return;
  }
  return data;
};

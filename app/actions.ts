"use server";

import { createClient } from "@/utils/supabase/client";

export async function searchWords(word: string) {
  const supabase = createClient();

  const { data } = await supabase
    .from("vocal")
    .select("*")
    .like("flds", `%${word.toLowerCase()}%`);

  return data;
}

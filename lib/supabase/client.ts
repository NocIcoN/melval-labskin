import { createBrowserClient } from "@supabase/ssr";

/**
 * Browser-side Supabase client.
 * Used inside Client Components for things like the booking form submission.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

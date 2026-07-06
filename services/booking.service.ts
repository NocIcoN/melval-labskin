import { createClient } from "@/lib/supabase/client";
import type { BookingFormData, ApiResponse } from "@/types";

/**
 * Submit a consultation booking to Supabase.
 *
 * Important: we intentionally do NOT chain .select() after .insert()
 * because the anon role only has an INSERT policy — chaining .select()
 * would trigger a SELECT which is blocked by RLS, causing a 42501 error
 * even though the INSERT itself succeeds.
 */
export async function submitBooking(
  data: BookingFormData
): Promise<ApiResponse<{ id: string }>> {
  try {
    const supabase = createClient();

    const { error } = await supabase
      .from("bookings")
      .insert([
        {
          full_name: data.fullName,
          phone: data.phone,
          email: data.email ?? null,
          branch: data.branch,
          treatment: data.treatment,
          preferred_date: data.preferredDate,
          preferred_time: data.preferredTime,
          message: data.message ?? null,
          status: "pending",
        },
      ]);

    if (error) {
      return { data: null, error: error.message, success: false };
    }

    return { data: { id: crypto.randomUUID() }, error: null, success: true };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : "Terjadi kesalahan tak terduga",
      success: false,
    };
  }
}
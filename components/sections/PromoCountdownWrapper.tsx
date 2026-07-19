import { getFlashSalePromo } from "@/lib/sanity/fetchers";
import PromoCountdownSection from "./PromoCountdownSection";

/**
 * Server Component wrapper untuk PromoCountdownSection.
 * Fetch data di sini (server), lalu pass sebagai prop ke Client Component.
 * Pola ini diperlukan karena PromoCountdownSection butuh useState untuk countdown timer.
 */
export default async function PromoCountdownWrapper() {
  const promo = await getFlashSalePromo();
  if (!promo) return null;
  return <PromoCountdownSection promo={promo} />;
}

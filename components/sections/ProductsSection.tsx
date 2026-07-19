import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import ProductCard from "@/components/features/ProductCard";
import { getProducts } from "@/lib/sanity/fetchers";

export default async function ProductsSection() {
  const allProducts = await getProducts();
  const featured = allProducts.slice(0, 4);

  return (
    <section className="py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Melval Skincare"
          title="Rawat Kulitmu Setiap Hari di Rumah"
          description="Lini produk skincare yang melengkapi hasil treatment klinik, diformulasikan untuk maintenance dan repeat care."
        />
        <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink href="/products" variant="outline" size="md">
            Belanja Semua Produk
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

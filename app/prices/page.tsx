import { CATALOG_API } from "@/lib/env";
import { PriceForm } from "./PriceForm";

export const dynamic = "force-dynamic";

interface Product {
  id: string;
  sku: string;
  name: string;
  price: number;
}

export default async function PricesPage() {
  const res = await fetch(`${CATALOG_API}/api/products`, { next: { revalidate: 30 } });
  const products = (await res.json()) as Product[];
  return (
    <section>
      <h1>Prices</h1>
      {products.map((p) => (
        <PriceForm key={p.id} product={p} />
      ))}
    </section>
  );
}

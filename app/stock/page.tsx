import { INVENTORY_API } from "@/lib/env";

export const dynamic = "force-dynamic";

interface StockLevel {
  sku: string;
  onHand: number;
  reserved: number;
}

export default async function StockPage() {
  const res = await fetch(`${INVENTORY_API}/api/inventory/stock`, { cache: "no-store" });
  const rows = (await res.json()) as StockLevel[];
  return (
    <section>
      <h1>Stock</h1>
      <ul>
        {rows.map((r) => (
          <li key={r.sku}>
            {r.sku}: {r.onHand} on hand, {r.reserved} reserved
          </li>
        ))}
      </ul>
    </section>
  );
}

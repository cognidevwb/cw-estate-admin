import { ORDERS_API } from "@/lib/env";

export const dynamic = "force-dynamic";

interface Order {
  id: string;
  customerEmail: string;
  status: string;
  placedAt: string;
}

export default async function OrdersPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const url = status ? `${ORDERS_API}/api/orders?status=${status}` : `${ORDERS_API}/api/orders`;
  const res = await fetch(url, { cache: "no-store" });
  const orders = (await res.json()) as Order[];
  return (
    <section>
      <h1>Orders{status ? ` · ${status}` : ""}</h1>
      <table>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customerEmail}</td>
              <td>{o.status}</td>
              <td>{o.placedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

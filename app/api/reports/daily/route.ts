import { ORDERS_API } from "@/lib/env";

export const dynamic = "force-dynamic";

/** Paid orders of the day, for the finance export. */
export async function GET() {
  const res = await fetch(`${ORDERS_API}/api/orders?status=Paid`, { cache: "no-store" });
  const orders = (await res.json()) as Array<{ id: string; placedAt: string }>;
  const today = new Date().toISOString().slice(0, 10);
  return Response.json(orders.filter((o) => o.placedAt.startsWith(today)));
}

export const dynamic = "force-dynamic";

/** Pings each service on its dev port so the admin can show what is up. */
export async function GET() {
  const checks = await Promise.all([
    fetch("http://localhost:5001/api/categories").then((r) => r.ok).catch(() => false),
    fetch("http://localhost:5003/api/inventory/stock").then((r) => r.ok).catch(() => false),
  ]);
  return Response.json({ catalog: checks[0], inventory: checks[1] });
}

import { CATALOG_API } from "@/lib/env";

/** Proxies a price change to the catalog so the browser never talks to it directly. */
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.text();
  const res = await fetch(`${CATALOG_API}/api/products/${id}/price`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body,
  });
  return new Response(null, { status: res.status });
}

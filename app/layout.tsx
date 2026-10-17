import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = { title: "Estate Admin" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/orders">Orders</Link> · <Link href="/stock">Stock</Link> · <Link href="/prices">Prices</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}

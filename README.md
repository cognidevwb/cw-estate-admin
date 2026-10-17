# cw-estate-admin

Back-office for the estate: orders by status, stock levels, price changes.

- Next.js 15 (App Router), React 19, plain `fetch` with per-service base URLs from the environment.
- Reads `cw-estate-orders`, `cw-estate-inventory` and `cw-estate-catalog`; changes prices through the catalog.

Run: `npm install && npm run dev`.

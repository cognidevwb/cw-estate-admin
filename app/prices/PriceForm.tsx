"use client";

import { useState } from "react";

export function PriceForm({ product }: { product: { id: string; name: string; price: number } }) {
  const [price, setPrice] = useState(product.price);
  const save = async () => {
    await fetch(`/api/prices/${product.id}`, { method: "PUT", body: JSON.stringify(price) });
  };
  return (
    <div>
      <span>{product.name}</span>
      <input type="number" step="0.01" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      <button type="button" onClick={() => void save()}>
        Save
      </button>
    </div>
  );
}

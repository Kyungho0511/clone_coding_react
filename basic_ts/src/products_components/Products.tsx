import { useState } from "react";
import useProducts from "../hooks/use-products";

export type Product = {
  name: string;
  price: number;
  id: number;
};

export default function Products() {
  const [checked, setChecked] = useState<boolean>(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <div>
        <input
          id="checkbox"
          type="checkbox"
          value={checked.toString()}
          onChange={handleChange}
        />
        <label htmlFor="checkbox">Show Only 🔥 Sale</label>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

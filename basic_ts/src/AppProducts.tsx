import { useState } from 'react';
import Products from './products_components/Products.tsx';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState<boolean>(true);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((prev) => !prev)}>Toggle</button>
    </div>
  );
}

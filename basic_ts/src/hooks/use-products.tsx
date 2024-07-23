import { useEffect, useState } from "react";
import { Product } from "../products_components/Products";


export default function useProducts({salesOnly}: {salesOnly: boolean}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      })
      .catch(() => setError("에러가 발생!"))
      .finally(() => setLoading(false));
    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [salesOnly]);

  // If you are returning an array in your Custom Hook, you will want to avoid type inference
  // as TypeScript will infer a union type. Instaed, specify the type like const
  return [loading, error, products] as const;
}
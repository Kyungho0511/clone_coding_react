import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("fetching...");
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data loaded from the network!");
        setProducts(data);
      })
      .catch((e) => setError("Error!"))
      .finally(() => setLoading(false));
    return () => {
      console.log("function to clean data");
    };
  }, [salesOnly]);

  return [loading, error, products];
}

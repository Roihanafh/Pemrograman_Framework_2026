import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = 
{
  id: string;
  name: string;
  size: string;
  price: number;
  category: string;
}

const kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  const [products, setProducts] = useState([]);
  
  const fetchProducts = () => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      });
  };

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // },[]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      <button onClick={fetchProducts}>Refresh Data</button>
      {products.map((product: ProductType) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Harga: {product.price}</p>
          <p>Ukuran: {product.size}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default kategori;
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl m-4">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 shadow">
            <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <Link href={`/products/${product.id}`} className="text-blue-600 underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
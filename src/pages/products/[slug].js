import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const [product, setProduct] = useState(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (slug) {
      fetch(`https://fakestoreapi.com/products/${slug}`)
        .then(res => res.json())
        .then(setProduct);
    }
  }, [slug]);

  useEffect(() => {
    const fav = localStorage.getItem(`fav-${slug}`);
    setFavorite(fav === 'true');
  }, [slug]);

  const toggleFavorite = () => {
    const newFav = !favorite;
    setFavorite(newFav);
    localStorage.setItem(`fav-${slug}`, newFav);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <img src={product.image} className="h-60 object-contain mx-auto" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="my-2">{product.description}</p>
      <p className="font-semibold">${product.price}</p>
      <button onClick={toggleFavorite} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}
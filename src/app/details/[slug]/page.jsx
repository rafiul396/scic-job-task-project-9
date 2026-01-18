"use client"

import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";

// src/app/details/[slug]/page.jsx
export default function ProductDetailsPage() {
  const { slug } = useParams() // server-side param

  // fetch all products অথবা API support করলে single fetch
  // const res = await fetch(`https://jot-task-scic.vercel.app/products/${slug}`);

  // const {slug} = use(params)

  // console.log(params);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://jot-task-scic.vercel.app/products/${slug}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!product) return <h2 className="text-center py-20 text-xl">Loading...</h2>;


  // if (!res.ok) {
  //   return <h2 className="text-center py-20 text-xl">Product Not Found</h2>;
  // }

  // const product = await res.json();

  return (
    <section className="py-20 bg-(--secondary)">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-cover rounded-xl shadow"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4 text-(--background)">{product.name}</h1>
          <p className="text-lg mb-4 text-(--background)">{product.shortDescription}</p>
          <p className="text-primary text-3xl font-bold mb-6 text-(--background)">${product.price}</p>

          <div className="flex gap-4 mb-8">
            <button className="bg-(--background) text-(--secondary) font-semibold cursor-pointer px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button className="border border-(--background) font-semibold text-(--background) cursor-pointer px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-3 text-(--background)">Product Description</h3>
            <p className="leading-relaxed text-(--background)">{product.shortDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

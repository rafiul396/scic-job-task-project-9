"use client"
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {

    // const data = [
    //     {
    //         id: 1,
    //         name: "Handcrafted Wooden Chair",
    //         shortDescription: "Elegant handmade chair made from sustainable oak wood.",
    //         price: 120,
    //         image: "https://images.unsplash.com/photo-1567016548857-3d796690bba1"
    //     },
    //     {
    //         id: 2,
    //         name: "Rustic Coffee Table",
    //         shortDescription: "A beautiful coffee table with natural wood texture.",
    //         price: 250,
    //         image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
    //     },
    //     {
    //         id: 3,
    //         name: "Wooden Cradle",
    //         shortDescription: "Handcrafted cradle designed for comfort and durability.",
    //         price: 180,
    //         image: "https://images.unsplash.com/photo-1555041585-6aefac217f84"
    //     },
    //     {
    //         id: 4,
    //         name: "Custom Wooden Shelf",
    //         shortDescription: "Durable and stylish shelf perfect for home decor.",
    //         price: 150,
    //         image: "https://images.unsplash.com/photo-1598300054536-9cded7c3e0f5"
    //     },
    //     {
    //         id: 5,
    //         name: "Minimalist Working Desk",
    //         shortDescription: "Strong and elegant desk for home office setup.",
    //         price: 300,
    //         image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61"
    //     },
    //     {
    //         id: 6,
    //         name: "Wooden Dining Table",
    //         shortDescription: "Large dining table made from premium teak wood.",
    //         price: 450,
    //         image: "https://images.unsplash.com/photo-1582582621959-2f2b12f66653"
    //     },
    //     {
    //         id: 7,
    //         name: "Classic Rocking Chair",
    //         shortDescription: "Comfortable rocking chair with smooth finishing.",
    //         price: 200,
    //         image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
    //     },
    //     {
    //         id: 8,
    //         name: "Wooden Bookshelf",
    //         shortDescription: "Sturdy bookshelf with multiple compartments.",
    //         price: 220,
    //         image: "https://images.unsplash.com/photo-1598300182212-6b3aabca38e5"
    //     },
    //     {
    //         id: 9,
    //         name: "Premium Wooden Wardrobe",
    //         shortDescription: "Spacious wardrobe with natural wood polish.",
    //         price: 600,
    //         image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    //     },
    //     {
    //         id: 10,
    //         name: "Customized Wooden Nameplate",
    //         shortDescription: "Personalized nameplate carved from high-quality wood.",
    //         price: 50,
    //         image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    //     }
    // ];

    const productId = useParams();
    const { slug } = productId
    const id = Number(slug);

    // const product = data.find((item) => item.id === Number(slug));

    // console.log(product);


    // if (!product) {
    //     return <h2 className="text-center py-20 text-xl">Product Not Found</h2>;
    // }

    return (
        <section className="py-20 bg-(--secondary)">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                {/* Left Image Section */}
                <div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[450px] object-cover rounded-xl shadow"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-(--background)">{product.name}</h1>

                    <p className="text-(--background) text-lg mb-4">
                        {product.shortDescription}
                    </p>

                    <p className="text-primary text-3xl font-bold mb-6">
                        ${product.price}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 mb-8">
                        <button className="bg-(--background) text-(--secondary) cursor-pointer px-6 py-3 rounded-lg hover:bg-primary/90 transition font-semibold">
                            Add to Cart
                        </button>

                        <button className="border border-(--background) text-(--background) font-semibold px-6 py-3 rounded-lg hover:bg-primary/10 transition cursor-pointer">
                            Buy Now
                        </button>
                    </div>

                    {/* Description Section */}
                    <div className="mt-10">
                        <h3 className="text-2xl font-semibold mb-3 text-(--background)">Product Description</h3>
                        <p className="leading-relaxed text-(--background)">
                            This handcrafted wooden furniture piece is built using premium,
                            sustainable materials, ensuring long-lasting durability and a
                            beautiful natural finish. Each product is carefully shaped,
                            polished, and perfected by skilled artisans.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

// app/components/PopularProducts.jsx
import Image from "next/image";

const products = [
    {
        "id": 1,
        "name": "Handcrafted Wooden Chair",
        "shortDescription": "Elegant handmade chair made from sustainable oak wood.",
        "price": 120,
        "image": "https://images.unsplash.com/photo-1616627561839-121d0bf3eef7"
    },
    {
        "id": 2,
        "name": "Wooden Coffee Table",
        "shortDescription": "Rustic coffee table with natural wood finish.",
        "price": 250,
        "image": "https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
    },
    {
        "id": 3,
        "name": "Wooden Cradle",
        "shortDescription": "Comfortable handcrafted cradle for babies.",
        "price": 180,
        "image": "https://images.unsplash.com/photo-1582582494700-8d8f8b18651e"
    },
    {
        "id": 4,
        "name": "Custom Wooden Shelf",
        "shortDescription": "Durable and stylish wooden shelf for your home.",
        "price": 150,
        "image": "https://images.unsplash.com/photo-1589998059171-988d887df646"
    }
]


export default function PopularProducts() {
    return (
        <section className="py-20 bg-(--secondary)">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-(--background) mb-12 text-center">
                    Popular Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                        >
                            <div className="relative w-full h-64">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div className="p-6 text-center">
                                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                                <span className="text-amber-500 font-bold text-lg">
                                    ${product.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

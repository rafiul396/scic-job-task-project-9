// import Link from "next/link";


// export default async function ItemListPage() {
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

//     const res = await fetch("https://jot-task-scic.vercel.app/products");

//     const data = await res.json();

//     if(!data){
//         return <div>
//             <h2>Loading</h2>
//         </div>
//     }

//     return (
//         <section className="py-20 bg-(--secondary)">
//             <div className="max-w-7xl mx-auto px-6">

//                 {/* Page Title */}
//                 <h2 className="text-3xl font-bold mb-8 text-center text-(--background)">
//                     Our Products
//                 </h2>

//                 {/* Grid */}
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {data.map((item) => (
//                         <div
//                             key={item.id}
//                             className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition flex flex-col"
//                         >
//                             <img
//                                 src={item.image}
//                                 alt={item.name}
//                                 className="w-full h-56 object-cover"
//                             />

//                             <div className="p-5 flex flex-col flex-grow">
//                                 <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
//                                 <p className="text-gray-600 text-sm mb-3 flex-grow">
//                                     {item.shortDescription}
//                                 </p>

//                                 <p className="text-lg font-bold text-primary mb-4">
//                                     ${item.price}
//                                 </p>

//                                 <Link href={`/products/${item.id}`} className="w-full bg-(--secondary) text-(--background) py-2 rounded-lg hover:bg-primary/90 transition mt-auto cursor-pointer text-center">
//                                     View Details
//                                 </Link>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }


import Link from "next/link";

export default async function ItemListPage() {

    const res = await fetch("https://jot-task-scic.vercel.app/products", {
        cache: "no-store"
    });

    const data = await res.json();

    return (
        <section className="py-20 bg-(--secondary)">
            <div className="max-w-7xl mx-auto px-6">

                {/* Page Title */}
                <h2 className="text-3xl font-bold mb-8 text-center text-[var(--background)]">
                    Our Products
                </h2>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition flex flex-col"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>

                                <p className="text-gray-600 text-sm mb-3 flex-grow">
                                    {item.shortDescription}
                                </p>

                                <p className="text-lg font-bold text-primary mb-4">
                                    ${item.price}
                                </p>

                                <Link
                                    href={`/details/${item._id}`}
                                    className="w-full bg-[var(--secondary)] text-[var(--background)] py-2 rounded-lg hover:bg-primary/90 transition mt-auto text-center"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

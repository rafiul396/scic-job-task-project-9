"use client";
import { FaBaby, FaChair, FaTable, FaTools } from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Cradles",
    icon: <FaBaby size={40} />,
    description: "Beautiful handcrafted wooden cradles for newborns.",
  },
  {
    id: 2,
    title: "Tables",
    icon: <FaTable size={40} />,
    description: "Premium wooden tables built for durability and style.",
  },
  {
    id: 3,
    title: "Chairs",
    icon: <FaChair size={40} />,
    description: "Comfortable and elegant wooden chairs for every home.",
  },
  {
    id: 4,
    title: "Custom Furniture",
    icon: <FaTools size={40} />,
    description: "Order your furniture exactly the way you want.",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-(--secondary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-6 text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-primary mx-auto mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-600 text-sm">{item.description}</p>

              <button className="mt-4 inline-block text-primary font-medium hover:underline">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
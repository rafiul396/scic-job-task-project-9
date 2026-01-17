// app/components/FeaturesSection.jsx
import { FaLeaf, FaHands, FaRecycle } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-(--background)">
      <div className="px-6 lg:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-12">
          Why Choose Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-(--background)rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="text-4xl text-amber-500 mb-4">
              <FaLeaf />
            </div>
            <h3 className="text-xl font-semibold mb-2">Natural Materials</h3>
            <p className="text-gray-600">
              We only use high-quality, natural wood that is safe and eco-friendly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-(--background) rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="text-4xl text-amber-500 mb-4">
              <FaHands />
            </div>
            <h3 className="text-xl font-semibold mb-2">Handmade Craftsmanship</h3>
            <p className="text-gray-600">
              Every piece is carefully handcrafted by skilled artisans for a unique touch.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-(--background) rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="text-4xl text-amber-500 mb-4">
              <FaRecycle />
            </div>
            <h3 className="text-xl font-semibold mb-2">Durable & Sustainable</h3>
            <p className="text-gray-600">
              Built to last using sustainable practices, keeping nature and quality in mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
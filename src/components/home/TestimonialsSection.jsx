export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-(--background)">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Real feedback from customers who love our handcrafted wooden products.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p className="text-gray-700 italic mb-4">
              “The wooden cradle I purchased is beautifully crafted and super sturdy.
              I love the natural finish!”
            </p>
            <h4 className="font-semibold text-lg">Sarah Johnson</h4>
            <p className="text-sm text-gray-500">USA</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p className="text-gray-700 italic mb-4">
              “Amazing craftsmanship and great attention to detail.
              The chair I ordered exceeded my expectations.”
            </p>
            <h4 className="font-semibold text-lg">David Miller</h4>
            <p className="text-sm text-gray-500">Canada</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p className="text-gray-700 italic mb-4">
              “Fast delivery and excellent build quality. Highly recommend their
              wooden furniture!”
            </p>
            <h4 className="font-semibold text-lg">Amina Rahman</h4>
            <p className="text-sm text-gray-500">Bangladesh</p>
          </div>

        </div>
      </div>
    </section>
  );
}

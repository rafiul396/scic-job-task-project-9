export default function AboutSection() {
  return (
    <section className="py-20 bg-(--secondary)">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
            alt="Crafting Wood"
            className="w-full rounded-xl shadow-lg object-cover h-[400px]"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-(--background)">
            About Our Craft
          </h2>

          <p className="text-(--background) leading-relaxed mb-6">
            We create handcrafted wooden furniture built with passion,
            precision, and sustainability in mind. From selecting the finest
            wood to polishing the final product, every step is crafted by skilled
            artisans with years of experience.
          </p>

          <p className="text-(--background) leading-relaxed mb-6">
            Our mission is to blend traditional craftsmanship with modern
            design—giving you furniture that lasts a lifetime while enhancing
            the beauty of your home.
          </p>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-6 mt-8">

            <div>
              <h4 className="text-xl font-semibold text-(--background) mb-2">
                100% Handmade
              </h4>
              <p className="text-(--background) text-sm">
                Each piece is crafted by hand ensuring attention to detail and top quality.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-(--background) mb-2">
                Sustainable Materials
              </h4>
              <p className="text-(--background) text-sm">
                We only use eco-friendly and responsibly sourced wood.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-(--background) mb-2">
                Long-lasting Finish
              </h4>
              <p className="text-(--background) text-sm">
                Our finishing process ensures durability and a refined natural look.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-(--background) mb-2">
                Custom Designs
              </h4>
              <p className="text-(--background) text-sm">
                We also create custom furniture tailored to your requirements.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

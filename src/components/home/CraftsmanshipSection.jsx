const CraftsmanshipSection = () => {
  return (
    <section className="py-20 bg-(--secondary)">
      <div className="px-6 lg:px-20 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-(--background)">
            Handcrafted With Precision & Passion
          </h2>

          <p className="text-(--background) mb-5 leading-relaxed">
            Every wooden product we make is shaped by skilled artisans who combine
            traditional techniques with modern craftsmanship. From selecting the
            finest quality wood to polishing the final surface, each step is done
            with extreme care.
          </p>

          <p className="text-(--background) mb-5 leading-relaxed">
            We believe furniture should be more than just functional — it should
            tell a story. That’s why our craftsmen carve, shape, and assemble each
            piece by hand, ensuring durability, beauty, and a natural finish that
            lasts for years.
          </p>

          <ul className="space-y-3 mt-6 text-(--background)">
            <li className="flex items-center gap-3">
              <span className="h-3 w-3 bg-primary rounded-full"></span>
              100% handcrafted wooden products
            </li>
            <li className="flex items-center gap-3">
              <span className="h-3 w-3 bg-primary rounded-full"></span>
              Premium, ethically sourced wood materials
            </li>
            <li className="flex items-center gap-3">
              <span className="h-3 w-3 bg-primary rounded-full"></span>
              Traditional carving + modern finishing
            </li>
            <li className="flex items-center gap-3">
              <span className="h-3 w-3 bg-primary rounded-full"></span>
              Built to last for generations
            </li>
          </ul>
        </div>

        {/* Right Image Placeholder */}
        <div className="relative w-full h-80 lg:h-full rounded-xl overflow-hidden shadow-lg">
          <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500 text-lg">
            Image Area
          </div>
        </div>

      </div>
    </section>
  );
}

export default CraftsmanshipSection;
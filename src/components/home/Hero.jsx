import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full py-20 bg-wood-pattern bg-cover bg-center flex items-center">
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-2xl sm:text-5xl xl:text-6xl font-extrabold text-(--background) leading-tight mb-6">
            Handcrafted Wooden Products <br /> Delivered to Your Doorstep
          </h1>
          <p className="text-lg sm:text-xl text-(--background) mb-8">
            Explore our collection of artisan-made wooden furniture & decor. Premium quality, sustainable craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition cursor-pointer">
              Shop Now
            </button>
            <button className="border border-amber-500 text-amber-200 hover:bg-amber-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition cursor-pointer">
              Customize Order
            </button>
          </div>
        </div>

        {/* Hero Image / Product Preview */}
        <div className="mt-10 lg:mt-0 lg:ml-10 relative w-full max-w-md lg:max-w-lg">
          <Image
            src="/hero-banner1.jpg"
            alt="Handcrafted Wooden Chair"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-(--secondary)">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-(--background)">
          Join Our Newsletter
        </h2>

        <p className="mb-10 text-(--background)">
          Subscribe to get updates on new handcrafted wooden products, exclusive offers, 
          and behind-the-scenes craftsmanship stories.
        </p>

        {/* Form */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input 
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 border border-(--background) rounded-lg focus:ring-2 focus:ring-(--background) focus:outline-none"
          />
          <button className="px-6 py-3 bg-(--background) text-(--secondary) rounded-lg hover:bg-primary/90 transition cursor-pointer">
            Subscribe
          </button>
        </div>

        {/* Small note */}
        <p className="text-sm text-(--background) mt-4">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </section>
  );
}

export default NewsletterSection;
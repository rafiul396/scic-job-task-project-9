const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="px-6 lg:px-20  grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-(--secondary)">WoodenProduct</h2>
          <p className="text-(--secondary)">
            Handcrafted wooden furniture made with passion, tradition, and premium materials.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-(--secondary)">Quick Links</h3>
          <ul className="space-y-2 text-(--secondary)">
            <li><a href="#" className="transition">Home</a></li>
            <li><a href="#" className="transition">Products</a></li>
            <li><a href="#" className="transition">Categories</a></li>
            <li><a href="#" className="transition">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-(--secondary)">Categories</h3>
          <ul className="space-y-2 text-(--secondary)">
            <li><a href="#" className="transition">Chairs</a></li>
            <li><a href="#" className="transition">Tables</a></li>
            <li><a href="#" className="transition">Cradles</a></li>
            <li><a href="#" className="transition">Custom Furniture</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-(--secondary)">Contact</h3>
          <ul className="space-y-2 text-(--secondary)">
            <li>Email: support@woodenproduct.com</li>
            <li>Phone: +880 123 456 789</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-(--secondary) mt-10 pt-6 text-center text-(--secondary) text-sm">
        © {new Date().getFullYear()} WoodenProduct — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
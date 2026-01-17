import CategoriesSection from "@/components/home/CategoriesSection";
import CraftsmanshipSection from "@/components/home/CraftsmanshipSection";
import FeaturesSection from "@/components/home/FeaturedSection";
import Hero from "@/components/home/Hero";
import NewsletterSection from "@/components/home/NewsletterSection";
import PopularProducts from "@/components/home/PopularProducts";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <PopularProducts />
      <CategoriesSection />
      <CraftsmanshipSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}

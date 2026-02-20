'use client';

import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ProductsShowcase from '@/components/products-showcase';
import ReviewsSection from '@/components/reviews-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ProductsShowcase />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

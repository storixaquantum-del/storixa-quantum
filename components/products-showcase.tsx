'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Zap, HardDrive } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Storixa Quantum 2.5" SATA SSD',
    capacity: '512 GB',
    price: '₹6999.00',
    description: 'Reliable 2.5" SATA SSD perfect for upgrading older systems and laptops',
    fullDescription: 'Experience lightning-fast data access with our 2.5" SATA SSD. Designed for compatibility with existing systems, this drive offers impressive performance without requiring system changes.',
    specs: ['550 MB/s Read Speed', '560 MB/s Write Speed', '6-Year Warranty', 'SATA III Interface', 'Standard 2.5" Form Factor'],
    badge: 'Popular',
    image: '/images/ssd-sata.jpg',
  },
  {
    id: 2,
    name: 'Storixa Quantum NVMe SSD',
    capacity: '512 GB',
    price: '₹6599.00',
    description: 'Ultra-fast NVMe storage with exceptional performance for gaming and productivity',
    fullDescription: 'Unleash maximum performance with cutting-edge NVMe technology. Perfect for content creators, gamers, and professionals who demand the fastest storage speeds available.',
    specs: ['2.2GB/s Read Speed', '3GB/s Write Speed', '6-Year Warranty', 'PCIe 4.0 Interface', 'M.2 2280 Form Factor'],
    badge: 'Best Value',
    image: '/images/ssd-nvm.jpg',
  },
  {
    id: 3,
    name: 'Storixa Quantum 2.5" SATA SSD',
    capacity: '256 GB',
    price: '₹4499.00',
    description: 'Compact 2.5" SATA SSD ideal for budget-conscious upgrades and secondary storage',
    fullDescription: 'Perfect entry point to SSD technology. This 256GB SATA drive provides excellent value for system upgrades, secondary storage, or as a boot drive for budget builds.',
    specs: ['550 MB/s Read Speed', '450 MB/s Write Speed', '6-Year Warranty', 'SATA III Interface', 'Standard 2.5" Form Factor'],
    badge: 'Budget',
    image: '/images/ssd-sata.jpg',
  },
  {
    id: 4,
    name: 'Storixa Quantum NVMe SSD',
    capacity: '256 GB',
    price: '₹4999.00',
    description: 'Compact NVMe drive combining affordability with high-speed performance',
    fullDescription: 'Affordable high-speed storage for everyday computing. This entry-level NVMe drive delivers significant performance improvements over SATA, ideal for those stepping up to faster technology.',
    specs: ['2.2GB/s Read Speed', '3GB/s Write Speed', '10-Year Warranty', 'PCIe 4.0 Interface', 'M.2 2280 Form Factor'],
    badge: 'Entry Level',
    image: '/images/ssd-nvm.jpg',
  },
];

export default function ProductsShowcase() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Illustration with Zoom Animation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full animate-zoom-slow">
          <Image
            src="/images/tech-circuit-bg.jpg"
            alt="background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-zoom-in-out"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-zoom-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Our Storage Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore the complete Storixa Quantum lineup - engineered for performance, built for reliability
          </p>
        </div>

        {/* Products as Detailed Rows */}
        <div className="space-y-20">
          {products.map((product, idx) => {
            const isLeftContent = idx % 2 === 0;
            return (
              <div
                key={product.id}
                className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center animate-slide-in-up ${
                  idx % 2 === 1 ? 'md:grid-cols-2' : ''
                }`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Content Side */}
                <div
                  className={`space-y-6 ${
                    isLeftContent ? 'md:col-1' : 'md:col-2 md:order-last'
                  }`}
                >
                  {/* Badge */}
                  <div>
                    <Badge className="bg-accent/20 text-accent border-accent/40">
                      {product.badge}
                    </Badge>
                  </div>

                  {/* Title and Capacity */}
                  <div>
                    <h3 className="text-4xl font-bold text-foreground mb-2 text-balance">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-semibold text-accent">{product.capacity}</p>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.fullDescription}
                  </p>

                  {/* Specs */}
                  <div className="space-y-3 pt-4">
                    <p className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Key Specifications
                    </p>
                    {product.specs.map((spec, specIdx) => (
                      <div key={specIdx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{spec}</p>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-6 space-y-4">
                    <div className="text-4xl font-bold text-foreground">
                      {product.price}
                    </div>
                    <a
                      href={`https://wa.me/1234567890?text=Hi! I'm interested in ${product.name} ${product.capacity}. Can you tell me more about pricing and availability?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                      <span>Order on WhatsApp</span>
                      <Zap size={20} className="ml-2 group-hover:animate-pulse" />
                    </a>
                  </div>
                </div>

                {/* Image Side */}
                <div
                  className={`relative h-96 md:h-full min-h-96 flex items-center justify-center ${
                    isLeftContent ? 'md:col-2' : 'md:col-1 md:order-first'
                  }`}
                >
                  {/* Image Container with Glow */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/10 rounded-2xl blur-2xl opacity-50 animate-zoom-in-out"></div>
                    <div className="relative rounded-2xl overflow-hidden bg-card/40 backdrop-blur-sm border border-accent/20 p-8 h-full flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-contain w-full h-full drop-shadow-2xl"
                        priority={idx < 2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

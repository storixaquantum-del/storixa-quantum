'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full w-fit animate-slide-in-up">
              <Zap size={16} className="text-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Next Generation Storage</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 animate-slide-in-up delay-500">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance">
                Lightning-Fast Storage That Never Slows Down
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Experience the future of data storage. Storixa Quantum SSDs deliver unprecedented speeds and reliability for professionals and gamers who demand the best.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up delay-1000">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Explore Products
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-accent/30 hover:border-accent/60 text-foreground hover:bg-accent/5 transition-all duration-300 hover:scale-105 font-semibold">
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border animate-slide-in-up delay-1000">
              <div className="transition-transform hover:scale-110">
                <p className="text-2xl font-bold text-accent">2.2GB/s</p>
                <p className="text-sm text-muted-foreground">Sequential Read</p>
              </div>
              <div className="transition-transform hover:scale-110">
                <p className="text-2xl font-bold text-accent">500K</p>
                <p className="text-sm text-muted-foreground">IOPS</p>
              </div>
              <div className="transition-transform hover:scale-110">
                <p className="text-2xl font-bold text-accent">6yr</p>
                <p className="text-sm text-muted-foreground">Warranty</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
              
              {/* Product Image Container */}
              <div className="relative h-full rounded-2xl overflow-hidden border border-accent/20 backdrop-blur-sm bg-gradient-to-br from-background/40 to-background/20 p-8 flex items-center justify-center">
                <Image
                  src="/images/ssd-product.jpg"
                  alt="Storixa Quantum SSD Product"
                  width={400}
                  height={400}
                  className="object-contain w-full h-full filter drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Floating Animation Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-40 animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-30 animate-float delay-500"></div>
              
              {/* Corner Accent Boxes */}
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-background/80 backdrop-blur-md border border-accent/30 animate-scale-in">
                <p className="text-xs font-semibold text-accent">Peak Speed</p>
                <p className="text-lg font-bold text-foreground">2.2GB/s</p>
              </div>
              
              <div className="absolute bottom-4 left-4 p-3 rounded-lg bg-background/80 backdrop-blur-md border border-accent/30 animate-scale-in delay-500">
                <p className="text-xs font-semibold text-accent">Reliability</p>
                <p className="text-lg font-bold text-foreground">6yr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

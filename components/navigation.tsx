'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from '@/components/logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Logo size={36} className="transition-transform duration-300 group-hover:scale-110" />
            <span className="font-bold text-lg hidden sm:inline text-foreground">Storixa Quantum</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Products
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/1234567890?text=Hi! I'm interested in Storixa Quantum SSDs. Can you tell me more?"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-sm font-semibold bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="#products" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
              Products
            </Link>
            <Link href="#contact" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <div className="mt-4">
              <a
                href="https://wa.me/1234567890?text=Hi! I'm interested in Storixa Quantum SSDs. Can you tell me more?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-2 px-4 rounded-md text-sm font-semibold bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 text-center"
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

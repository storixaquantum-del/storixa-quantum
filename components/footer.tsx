'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = 'https://wa.me/1234567890?text=Hi! I am interested in Storixa Quantum SSDs. Can you help?';

  return (
    <footer className="bg-background/50 border-t border-border/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Brand and Copyright */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-6 h-6 bg-gradient-to-br from-accent to-primary rounded flex items-center justify-center font-bold text-accent-foreground text-xs">
                SQ
              </div>
              <span className="font-semibold text-foreground text-sm">Storixa Quantum</span>
            </Link>
            <span className="text-muted-foreground text-sm">© 2024</span>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
          </div>

          {/* Right - Social */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 transition-all duration-300 group"
          >
            <MessageCircle size={16} className="text-green-500" />
            <span className="text-xs font-medium text-green-600 dark:text-green-400 group-hover:scale-105 inline-block transition-transform">
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

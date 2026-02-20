'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '+91 9309277982'; // Replace with your WhatsApp number
  const message = encodeURIComponent('Hi! I\'m interested in Storixa Quantum SSDs. Can you tell me more?');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group animate-bounce-slow"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
      <span className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Order on WhatsApp
      </span>
    </a>
  );
}

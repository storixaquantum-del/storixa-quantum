'use client';

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  product: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sairaj Jawale',
    role: 'Content Creator',
    rating: 5,
    text: 'My laptop boots in seconds now—Storixa Quantum really lives up to its promise!',
    product: 'NVMe SSD 512GB',
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Loved by Customers Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            See what real users say about their Storixa Quantum experience
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <Card
              key={review.id}
              className="p-6 bg-card/80 border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg animate-slide-in-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground mb-4 leading-relaxed text-sm">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="border-t border-border/30 pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground mb-2">{review.role}</p>
                <p className="text-xs text-accent font-medium">Product: {review.product}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-16 text-center animate-slide-in-up delay-500">
          <div className="inline-block p-8 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
            <p className="text-muted-foreground mb-2">Average Rating from {reviews.length} Verified Reviews</p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              <span className="text-3xl font-bold text-foreground">5.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

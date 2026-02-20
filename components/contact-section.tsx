'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Loader, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Have questions about Storixa Quantum? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form Card */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/80 border border-accent/20 backdrop-blur-xl animate-slide-in-up delay-500 shadow-2xl hover:border-accent/40 transition-colors duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-semibold">
                  Full Name <span className="text-accent">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-semibold">
                  Email Address <span className="text-accent">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-accent transition-colors"
                />
              </div>
            </div>

            {/* Company and Subject Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground font-semibold">
                  Company Name
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground font-semibold">
                  Subject <span className="text-accent">*</span>
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-accent transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-semibold">
                Message <span className="text-accent">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us more about your inquiry..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-accent transition-colors resize-none"
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg animate-slide-in-up">
                <CheckCircle size={20} className="text-green-500" />
                <p className="text-green-600 dark:text-green-400 font-medium">
                  Message sent successfully! We'll be in touch soon.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg animate-slide-in-up">
                <AlertCircle size={20} className="text-red-500" />
                <p className="text-red-600 dark:text-red-400 font-medium">
                  Something went wrong. Please try again.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-base transition-all duration-300 hover:scale-105"
            >
              {loading ? (
                <>
                  <Loader size={18} className="mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail size={18} className="mr-2" />
                  Send Message
                </>
              )}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              We'll respond within 24 hours. For urgent inquiries, order on WhatsApp for faster support.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}

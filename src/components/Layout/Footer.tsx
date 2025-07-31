import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl lg:text-3xl font-bold text-cream-100 font-display">बेfikrr</div>
            <p className="text-primary-100 text-sm leading-relaxed text-balance">
              Wear Your Vibe. The future of fashion meets technology with AI-powered styling, 
              virtual try-ons, and custom designs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-primary-100 hover:text-cream-100 transition-colors p-2 rounded-full hover:bg-primary-600 focus-visible"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-100 hover:text-cream-100 transition-colors p-2 rounded-full hover:bg-primary-600 focus-visible"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-100 hover:text-cream-100 transition-colors p-2 rounded-full hover:bg-primary-600 focus-visible"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cream-100">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/shop" className="block text-primary-100 hover:text-cream-100 transition-colors text-sm py-1">
                Shop All
              </Link>
              <Link to="/try-on" className="block text-primary-100 hover:text-cream-100 transition-colors text-sm py-1">
                Virtual Try-On
              </Link>
              <Link to="/design" className="block text-primary-100 hover:text-cream-100 transition-colors text-sm py-1">
                Design Studio
              </Link>
              <Link to="/track" className="block text-primary-100 hover:text-cream-100 transition-colors text-sm py-1">
                Track Order
              </Link>
              <Link to="/referral" className="block text-primary-100 hover:text-cream-100 transition-colors text-sm py-1">
                Referral Program
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cream-100">Categories</h3>
            <div className="space-y-2">
              <a href="#" className="block text-primary-100 hover:text-cream-100 transition-colors text-sm py-1">
                T-Shirts
              </a>
              <a href="#" className="block text-primary-100 hover:text-cream-100 transition-colors text-sm py-1">
                Oversized
              </a>
              <a href="#" className="block text-primary-100 hover:text-cream-100 transition-colors text-sm py-1">
                Hoodies
              </a>
              <a href="#" className="block text-primary-100 hover:text-cream-100 transition-colors text-sm py-1">
                Polos
              </a>
              <a href="#" className="block text-primary-100 hover:text-cream-100 transition-colors text-sm py-1">
                Crop Tops
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cream-100">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-100 flex-shrink-0" />
                <span className="text-primary-100 text-sm">hello@befikrr.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-100 flex-shrink-0" />
                <span className="text-primary-100 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-100 flex-shrink-0" />
                <span className="text-primary-100 text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-600 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-primary-100 text-sm text-center sm:text-left">
            © 2025 बेfikrr. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <Link to="/privacy" className="text-primary-100 hover:text-cream-100 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-100 hover:text-cream-100 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/size-guide" className="text-primary-100 hover:text-cream-100 transition-colors text-sm">
              Size Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 focus-visible z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
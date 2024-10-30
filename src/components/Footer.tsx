import React from 'react';
import { Instagram, Mail, Heart, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <img src="/images/logo.png" alt="Telugu Ireland Yuvatha" className="h-12 w-auto" />
            <p className="text-sm">
              Uniting and serving the Telugu community in Ireland through cultural events and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-green-400 transition-colors">Events</a></li>
              <li><a href="#gallery" className="hover:text-green-400 transition-colors">Gallery</a></li>
              <li><a href="#donate" className="hover:text-green-400 transition-colors">Donate</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="mailto:communications@teluguirelandyuvatha.com" 
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                communications@teluguirelandyuvatha.com
              </a>
              <a 
                href="https://www.instagram.com/telugu_ireland_yuvatha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @telugu_ireland_yuvatha
              </a>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>Join our WhatsApp groups for updates</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Telugu Ireland Yuvatha. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> by TechVie
          </p>
        </div>
      </div>
    </footer>
  );
}
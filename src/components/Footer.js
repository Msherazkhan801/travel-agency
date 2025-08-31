
import Link from 'next/link';
import { Facebook, Instagram, MessageCircle, Mail, Phone, } from 'lucide-react';
import { TikTok } from '@/assets/Tiktok';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link href="/">
            <Image src="/logo.png" width={60} height={60} alt="Logo" />
          </Link>
            <h2 className="text-2xl font-bold">Usman Naimat Travel & Tours</h2>
            <p className="text-gray-400 mt-2">Your trusted partner for Hajj & Umrah since 2024</p>
            <p className="text-gray-500 text-sm mt-1">Pr No 6030 - SMC PVT LTD</p>
          </div>
          
          {/* Navigation Links */}
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/share/19UKGH7dG3/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            
            <a 
              href="https://www.tiktok.com/@usmannaimattravels?_t=ZS-8zCqjaN5QAi&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <TikTok className="w-6 h-6 text-pink-500" />

            </a>
            <a 
              href="https://www.instagram.com/usmannaimt5?igsh=ZXgwejlsY2h2cHdq&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram color='white' className="w-6 h-6 text-pink-500  " />

            </a>
            
            <a 
              href="https://wa.me/923439831664" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-green-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            
            <a 
              href="mailto:untravelandtours5@gmail.com"
              className="bg-gray-800 hover:bg-red-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            
            <a 
              href="tel:03439831664"
              className="bg-gray-800 hover:bg-emerald-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© 2024 Usman Naimat Travel & Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
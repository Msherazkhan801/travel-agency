import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { TikTok } from "@/assets/Tiktok";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Logo & Info */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image src="/logo.png" width={50} height={50} alt="Logo" />
            <h2 className="text-xl font-bold">Usman Naimat</h2>
          </div>
          <h3 className="font-semibold">Travel & Tours</h3>
          <p className="text-sm text-gray-200">
            Hajj & Umrah Service (Pvt Ltd.)
          </p>
          <p className="text-sm text-gray-200 mb-4">SMC PVT LTD • Pr No 6030</p>
          <p className="text-gray-100 text-sm mb-4">
            Your trusted partner for sacred journeys. We provide comprehensive
            Hajj and Umrah services with professional care and spiritual
            guidance.
          </p>
          {/* Social icons */}
          <div className="flex space-x-4">
            {" "}
            <a
              href="https://www.facebook.com/share/19UKGH7dG3/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              {" "}
              <Facebook size={20} />{" "}
            </a>{" "}
            <a
              href="https://www.tiktok.com/@usmannaimattravels?_t=ZS-8zCqjaN5QAi&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              {" "}
              <TikTok className="w-6 h-6 text-pink-500" />{" "}
            </a>{" "}
            <a
              href="https://www.instagram.com/usmannaimt5?igsh=ZXgwejlsY2h2cHdq&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              {" "}
              <Instagram
                color="white"
                className="w-6 h-6 text-pink-500 "
              />{" "}
            </a>{" "}
            <a
              href="https://wa.me/923439831664"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-green-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              {" "}
              <MessageCircle size={20} />{" "}
            </a>{" "}
            <a
              href="mailto:untravelandtours5@gmail.com"
              className="bg-gray-800 hover:bg-red-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              {" "}
              <Mail size={20} />{" "}
            </a>{" "}
            <a
              href="tel:03439831664"
              className="bg-gray-800 hover:bg-emerald-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Phone"
            >
              {" "}
              <Phone size={20} />{" "}
            </a>{" "}
          </div>{" "}
        </div>
        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-100">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
      
          </ul>
        </div>

        {/* Column 3 - Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-100">
            <li>Hajj Packages</li>
            <li>Umrah Services</li>
            <li>Travel Insurance</li>
            <li>Visa Processing</li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <div className="space-y-4 text-gray-100">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1" />
              <p>
                1st Floor Naimat Ullah Building <br />
                Near Murad Market <br />
                Opp: Masjid Mohabat Khan <br />
                Peshawar, Pakistan
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <p>
                091-2580547 <br /> 0343-9831664
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <p>untravelandtours5@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-200">
        © 2024 Usman Naimat Travel & Tours. All rights reserved.
      </div>
    </footer>
  );
}

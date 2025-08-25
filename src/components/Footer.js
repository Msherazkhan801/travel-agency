import { MapPin, Phone, Mail, Plane } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Plane className="w-8 h-8 text-accent mr-3" />
              <div>
                <h3 className="text-xl font-bold">Usman Naimat</h3>
                <p className="text-sm text-accent">Travel & Tours</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for Hajj, Umrah, and premium travel services. 
              Serving pilgrims with dedication and excellence since 2008.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Pr No 6030 • SMC PVT LTD
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Hajj Packages</li>
              <li>Umrah Services</li>
              <li>Group Tours</li>
              <li>Individual Travel</li>
              <li>Hotel Bookings</li>
              <li>Airport Transfers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p>1st Floor Naimat Ullah Building</p>
                  <p>Near Murad Market</p>
                  <p>Opp: Masjid Mohabat Khan, Peshawar</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-2" />
                <div>
                  <p>091-2580547</p>
                  <p>0343-9831664</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-2" />
                <p>untravelandtours5@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div>
                <p className="font-medium">Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Saturday</p>
                <p>9:00 AM - 4:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Usman Naimat Travel & Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
'use client'
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { MapPin, Plane, Users, Shield, Clock, Star } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Hajj Packages",
    description: "Comprehensive Hajj pilgrimage packages with luxury accommodation, transportation, and expert spiritual guidance.",
    features: ["5-star hotels", "Dedicated guides", "Private or group options"],
    price: "From $4,500"
  },
  {
    icon: Plane,
    title: "Umrah Services",
    description: "Year-round Umrah services crafted for comfort and spirituality, with flexible dates and premium amenities.",
    features: ["Flexible travel dates", "Premium hotels", "VIP airport transfers"],
    price: "From $2,200"
  },
  {
    icon: Users,
    title: "Group Tours",
    description: "Guided group tours with cultural experiences, heritage visits, and authentic local cuisine.",
    features: ["Small group sizes", "Cultural activities", "Local expert guides"],
    price: "From $1,800"
  }
];

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "We are a fully licensed tour operator with comprehensive insurance coverage."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock dedicated customer support before and during your trip."
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Trusted by thousands of travelers with consistent 5-star reviews."
  }
];

const Services = () => {
  return (
    <section className="bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/90 to-accent/80 text-white py-24 px-6 lg:px-8 mb-20">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Premium Travel Services
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8">
            Experience spirituality and comfort with our luxury Hajj, Umrah, and tour packages.
          </p>
          <Button className="px-8 py-4 text-lg font-semibold bg-yellow-500 text-black hover:bg-yellow-400 transition">
            Explore Packages
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {services.map((service, index) => (
            <Card key={index} className="group border border-border/40 shadow-sm rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">{service.price}</span>
                  <Button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-400 transition">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Features */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-muted/40 rounded-2xl hover:shadow-lg transition">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary/90 to-accent/80 text-white rounded-2xl p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-lg text-primary-foreground/90 mb-6">
            Book your package today and travel with peace of mind.
          </p>
          <Button className="px-8 py-4 text-lg font-semibold bg-yellow-500 text-black hover:bg-yellow-400 transition">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

'use client'
import Button from "@/components/ui/Button";
import { Users, Globe, Star, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section className="bg-wite/400 text-black">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-primary/90 to-accent/80 text-white py-20 px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg ">
            Guiding thousands of travelers on their spiritual and cultural journeys with
            care, comfort, and excellence.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="container mx-auto px-6 lg:px-16 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1596040033229-6d5aa72bb2d5"
            alt="Pilgrims journey"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>
        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-primary">Who We Are</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We are a licensed and trusted travel operator specializing in premium Hajj,
            Umrah, and cultural tour packages. With years of experience, our mission is
            to make your spiritual journey seamless, comfortable, and memorable.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our dedicated team ensures that every detail — from accommodation and
            transport to spiritual guidance — is handled with the highest standards of
            professionalism and care.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-muted/30 py-20 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-primary">Our Mission & Values</h2>
          <p className="text-muted-foreground mt-4">
            At the heart of our service is the belief that every journey is sacred.
            We are committed to integrity, excellence, and compassion.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-card rounded-xl shadow hover:shadow-lg transition">
            <Users className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Community</h3>
            <p className="text-muted-foreground text-sm">
              Serving thousands of pilgrims with dedication and unity.
            </p>
          </div>

          <div className="p-6 bg-card rounded-xl shadow hover:shadow-lg transition">
            <Globe className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
            <p className="text-muted-foreground text-sm">
              Connecting travelers from across the world to holy destinations.
            </p>
          </div>

          <div className="p-6 bg-card rounded-xl shadow hover:shadow-lg transition">
            <Star className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Excellence</h3>
            <p className="text-muted-foreground text-sm">
              Consistently rated 5 stars for service and professionalism.
            </p>
          </div>

          <div className="p-6 bg-card rounded-xl shadow hover:shadow-lg transition">
            <HeartHandshake className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Care</h3>
            <p className="text-muted-foreground text-sm">
              Guided by compassion and respect in every journey we plan.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Ready to Start Your Journey?
        </h2>
        <p className="text-muted-foreground mb-8">
          Explore our packages and book your spiritual journey with peace of mind.
        </p>
        <Button className="px-8 py-4 text-lg font-semibold bg-yellow-500 text-black hover:bg-yellow-400 transition">
          Book Now
        </Button>
      </div>
    </section>
  );
}

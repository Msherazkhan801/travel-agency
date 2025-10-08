'use client';

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: '/kaaba-hero.jpg',
    title: "Sacred Journey to Mecca",
    subtitle: "Experience the spiritual pilgrimage of Hajj",
    description:
      "Join millions of pilgrims in the holiest journey of Islam with our premium Hajj packages.",
    cta: "Book Hajj Package",
  },
  {
    id: 2,
    image: '/medina-hero.jpg',
    title: "Visit the Prophet's City",
    subtitle: "Discover the peaceful beauty of Medina",
    description:
      "Complete your spiritual journey with our comprehensive Umrah packages to the Prophet's Mosque.",
    cta: "Book Umrah Package",
  },
  {
    id: 3,
    image: '/pattern-heros.jpg',
    title: "Premium Travel Services",
    subtitle: "Your trusted travel partner",
    description:
      "Experience luxury and comfort with our world-class travel services and expert guidance.",
    cta: "Explore Services",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section aria-label="Hero slider" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <article
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide
              ? "translate-x-0"
              : index < currentSlide
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={`${slide.title} – ${slide.subtitle}`}
          >
            <div className="h-full w-full bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
              <div className="container mx-auto px-6 lg:px-8">
                <header className="max-w-3xl text-white">
                  <h1 className="text-5xl lg:text-7xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-light mb-6 text-yellow-400 animate-fade-in">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg lg:text-2xl mb-8 leading-relaxed animate-fade-in">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                    <Link href="/contact">
                      <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-400 transition">
                        {slide.cta}
                      </button>
                    </Link>
                    <Link href="/about">
                      <button className="px-6 py-3 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </article>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-yellow-400 scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Supporting SEO text section */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-black/60 text-white py-2 px-6 md:px-12 text-center md:text-left">
        <h3 className="text-xl font-semibold mb-2">Trusted Hajj & Umrah Experts</h3>
        <p className="max-w-4xl mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
          We provide guided pilgrimage tours to Mecca and Medina with complete support for travel, accommodation, and visa arrangements.
          Our mission is to ensure a spiritually fulfilling and comfortable journey for every pilgrim through professional service and care.
        </p>
      </div>
    </section>
  );
}

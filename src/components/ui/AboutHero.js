"use client";
import Link from "next/link";
import React from "react";

const AboutHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[500px] md:h-[600px] flex items-center justify-center"
      style={{ backgroundImage: "url('/medina-hero.jpg')" }}
      aria-labelledby="about-hero-heading"
    >
      {/* SEO Metadata for crawlers */}
      <header className="hidden">
        <h1>About Usman Naimat Travel & Tours</h1>
        <p>
          Usman Naimat Travel & Tours is a licensed Hajj and Umrah travel
          agency, providing trusted religious tourism services for over 9 years.
        </p>
      </header>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>

      {/* Visible Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 text-white">
        <h2
          id="about-hero-heading"
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          About Usman Naimat Travel & Tours
        </h2>

        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          With over 9 years of experience in religious tourism, we are honored
          to guide thousands of pilgrims on their sacred journeys to Makkah and
          Madinah. Our expert team ensures a seamless, spiritual, and
          comfortable Hajj and Umrah experience for every traveler.
        </p>

        <Link href="/contact" className="mt-8 inline-block">
          <button
            className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            aria-label="Contact Usman Naimat Travel & Tours"
          >
            Contact Us Now
          </button>
        </Link>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "Usman Naimat Travel & Tours",
            description:
              "Licensed Hajj and Umrah travel agency with 9+ years of experience in religious tourism, offering premium services to Makkah and Madinah.",
            image: "/medina-hero.jpg",
            url: "https://your-domain.com/about",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+92-xxx-xxxxxxx",
              contactType: "Customer Service",
              areaServed: "PK",
              availableLanguage: ["English", "Urdu"],
            },
            sameAs: [
              "https://www.facebook.com/yourpage",
              "https://www.instagram.com/yourpage",
            ],
          }),
        }}
      />
    </section>
  );
};

export default AboutHero;

import Link from 'next/link'
import React from 'react'

const AboutHero = () => {
  return (
     <section
        className="relative bg-cover bg-center bg-no-repeat h-[600px] md:h-[600px]"
        style={{ backgroundImage: "url('/medina-hero.jpg')" }} // image must be in /public
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Usman Naimat Travel & Tours
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            With over 9 years of experience in religious tourism, we have been
            privileged to guide thousands of pilgrims on their sacred journeys.
          </p>
          <Link href="/contact">
            <button className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105 mt-8">
              Contact Us Now
            </button>
          </Link>
        </div>
      </section>
  )
}

export default AboutHero
// pages/services.js
"use client";
import { dummyReviews, servicesData } from "@/lib/Data";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

// License information
const licenseInfo = {
  title: "Travel License Information",
  number: "TL-2023-78945",
  issued: "January 15, 2023",
  expiry: "January 14, 2028",
  issuingAuthority: "Ministry of Tourism, Kingdom of Saudi Arabia",
  details:
    "This license certifies that our company is fully authorized to organize and conduct Hajj and Umrah pilgrimages, as well as international group tours. We comply with all regulations set by the Ministry of Tourism and maintain the highest standards of service and safety for our clients.",
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [modalContent, setModalContent] = useState(null); // 'license' or 'reviews'
 const pathname = usePathname();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <Head>
        <title>Our Premium Services | Your Travel Companion</title>
        <meta
          name="description"
          content="Experience the journey of a lifetime with our carefully crafted travel packages"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Premium Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the journey of a lifetime with our carefully crafted
            travel packages and exceptional service standards.
          </p>
        </section>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={setSelectedService}
            />
          ))}
        </div>

        {/* Additional Information Section */}
      {pathname === "/" ?<></>:  <div className="w-full mt-16 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Us?
          </h2>
          <div className="flex md:flex gap-20 items-between">
            <div className="flex items-start ">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Fully Licensed</h3>
                <p className="text-gray-600">
                  We are fully licensed and authorized by tourism authorities.
                </p>
                <button
                  onClick={() => setModalContent("license")}
                  className="text-blue-600 hover:text-blue-800 mt-2 font-medium"
                >
                  View License Details
                </button>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Customer Reviews</h3>
                <p className="text-gray-600">
                  See what our customers have to say about their experiences.
                </p>
                <button
                  onClick={() => setModalContent("reviews")}
                  className="text-blue-600 hover:text-blue-800 mt-2 font-medium"
                >
                  Read Reviews
                </button>
              </div>
            </div>
          </div>
        </div>}
      </main>

      {/* Modal for service details */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedService.title}
              </h3>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-4">{selectedService.description}</p>
            <ul className="space-y-2 mb-4">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="text-2xl font-bold text-blue-700 mb-6">
              From {selectedService.price}
            </div>
            <Link href='/contact'>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Book Package
            </button>
            </Link>
          </div>
        </div>
      )}

      {/* Modal for license and reviews */}
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {modalContent === "license"
                    ? licenseInfo.title
                    : "Customer Reviews"}
                </h3>
                <button
                  onClick={() => setModalContent(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              {modalContent === "license" ? (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">License Number</p>
                        <p className="font-semibold">{licenseInfo.number}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          Issuing Authority
                        </p>
                        <p className="font-semibold">
                          {licenseInfo.issuingAuthority}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Issued On</p>
                        <p className="font-semibold">{licenseInfo.issued}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Expires On</p>
                        <p className="font-semibold">{licenseInfo.expiry}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{licenseInfo.details}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {dummyReviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${
                                i < review.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2">{review.comment}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
}

// Service Card Component
function ServiceCard({ service, onSelect }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 mr-3">{service.icon}</div>
          <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
        </div>
        <div className="w-12 h-1 bg-blue-600 mb-4"></div>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="text-2xl font-bold text-blue-700 mb-6">
          From {service.price}
        </div>
      </div>
      <div className="flex gap-2 p-4 bg-gray-50 border-t border-gray-100">
        <button
          onClick={() => onSelect(service)}
          className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
        >
          Learn More
        </button>
        <Link href="/contact" passHref className="w-full border border-black rounded-lg py-3 font-semibold transition-colors hover:pointer">
      <button className="w-full   transition-colors">
        Book Now
      </button>
    </Link>
      </div>
    </div>
  );
}

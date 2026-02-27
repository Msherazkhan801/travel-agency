"use client"
import Head from "next/head";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Usman Naimat Travel & Tours provide?",
      answer: "We specialize in Umrah and Hajj packages, including visa processing, hotel bookings, transport arrangements, and complete guidance for your spiritual journey."
    },
    {
      question: "Where is your office located?",
      answer: "Our office is located in Peshawar, Pakistan. You can visit us during working hours or contact us via phone/WhatsApp for details."
    },
    {
      question: "Do you provide customized Umrah or Hajj packages?",
      answer: "Yes. In addition to our standard packages (sharing, double, triple, quadruple room options), we also provide customized packages to meet your budget and travel preferences."
    },
    {
      question: "What documents are required for Umrah visa processing?",
      answer: "You will need: a valid passport (minimum 6 months validity), recent passport-size photographs with white background, CNIC copy, and vaccination certificate as per Saudi government requirements."
    },
    {
      question: "Do your packages include flights and accommodation?",
      answer: "Yes. Our packages typically include flights, visa, hotel accommodation, and transport. Package details are clearly mentioned, and you may also request upgrades."
    },
    {
        question: "How far in advance should I book my Umrah package for 2026?",
        answer: "We recommend booking at least 4-6 weeks in advance, especially for Ramadan or peak winter months, to ensure the best hotel availability and flight rates."
    },
    {
        question: "Which is the best Umrah travel agency in Peshawar?",
        answer: "Usman Naimat Travel & Tours is a leading agency in Peshawar, offering trusted, personalized Umrah and Hajj services with complete visa and transport support."
    },
    {
        question: "Can I perform Umrah on a Saudi Tourist Visa?",
        answer: "Yes, current Saudi regulations allow many travelers to perform Umrah on a tourist visa. Our team can help you determine the best visa type for your specific needs."
    },
    {
      question: "What is the Nusuk app, and is it mandatory for Umrah in 2026?",
      answer: "Yes, the Nusuk app is the official Saudi government platform for managing Umrah permits and Rawdah visits. As part of our service, we assist all our pilgrims in Peshawar with the app registration and permit scheduling to ensure a smooth journey."
    },
    {
      question: "When is the best time to book a Ramadan Umrah package for 2026?",
      answer: "In 2026, Ramadan is expected to begin in early March. We highly recommend booking your Ramadan package by December or January to lock in the best hotel rates near the Haram, as prices rise significantly closer to the holy month."
    },
    {
      question: "Do you offer Umrah packages for elderly pilgrims or those with wheelchairs?",
      answer: "Absolutely. We specialize in accessible Umrah travel. We select hotels with direct ramp access and provide private transport options to minimize walking distances for elderly pilgrims from Peshawar."
    },
    {
      question: "What is the difference between a 'Sponsorship' and 'Non-Sponsorship' Hajj package?",
      answer: "Sponsorship packages are typically for overseas Pakistanis paying in foreign currency, while the regular scheme is for local residents. For 2026, we help you navigate the specific requirements for both categories as per the latest Ministry of Religious Affairs (MORA) guidelines."
    },
    {
      question: "Can women perform Umrah without a Mahram in 2026?",
      answer: "Yes, according to current Saudi regulations, women are allowed to perform Umrah without a male guardian (Mahram). We provide safe group environments specifically designed for female pilgrims traveling solo."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>FAQs - Usman Naimat Travel & Tours | Umrah Experts Peshawar</title>
        <meta name="description" content="Frequently Asked Questions about Umrah and Hajj packages from Usman Naimat Travel & Tours in Peshawar." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-24 text-black bg-white">
        <h1 className="text-4xl font-extrabold mb-10 text-center">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                  ▼
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-5 border-t border-gray-200 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
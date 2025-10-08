"use client";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import React from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xvgbrkae"); // replace with your Formspree form ID

  if (state.succeeded) {
    return (
      <section
        className="flex flex-col items-center justify-center text-center py-24 px-6"
        aria-label="Contact Form Submission Success"
      >
        <h3 className="text-yellow-600 font-semibold text-2xl mb-4">
          ✅ Thank you for contacting Usman Naimat Travel & Tours!
        </h3>
        <p className="text-gray-700 mb-6">
          We’ve received your message and will get back to you shortly.
        </p>
        <Link href="/">
          <button className="border border-black rounded-lg px-6 py-3 font-medium hover:bg-black hover:text-white transition">
            Back to Home
          </button>
        </Link>
      </section>
    );
  }

  return (
    <section
      className="py-16 bg-gray-100"
      aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="container mx-auto px-4 mt-8">
        {/* SEO Heading */}
        <header className="text-center mb-12">
          <h1
            id="contact-heading"
            className="text-3xl font-bold text-gray-800 mb-4"
            itemProp="headline"
          >
            Contact Us
          </h1>
          <p className="text-black max-w-2xl mx-auto" itemProp="description">
            Get in touch with Usman Naimat Travel & Tours — Pakistan’s trusted
            Hajj and Umrah travel agency. Whether you have questions about our
            pilgrimage packages, visa services, or travel assistance, our
            support team is ready to help.
          </p>
        </header>

        {/* Grid Layout: Form + Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <article
            className="bg-white rounded-lg shadow-md p-6"
            itemScope
            itemType="https://schema.org/ContactForm"
          >
            <h2
              className="text-xl font-semibold text-gray-800 mb-4"
              itemProp="name"
            >
              Get in Touch
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              itemProp="potentialAction"
              itemScope
              itemType="https://schema.org/CommunicateAction"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-black text-sm mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-black text-sm mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* Contact Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-black text-sm mb-2 font-medium"
                >
                  Contact Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  pattern="[0-9]{11}"
                  placeholder="03221234567"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>

              {/* Visa Status Dropdown */}
              <div>
                <label
                  htmlFor="visa"
                  className="block text-black text-sm mb-2 font-medium"
                >
                  Visa Type
                </label>
                <select
                  id="visa"
                  name="visa"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                >
                  <option value="">-- Select Option --</option>
                  <option value="umrah">Umrah Visa</option>
                  <option value="hajj">Hajj Visa</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-black text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-400 transition disabled:opacity-50"
                aria-label="Submit contact form"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </article>

          {/* Map Section */}
          <aside
            className="rounded-lg overflow-hidden shadow-md"
            aria-label="Office Location Map"
          >
            <iframe
              title="Usman Naimat Travel & Tours Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194104.13653142744!2d71.56547024999999!3d33.97729304999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60138eb8fe647b87%3A0x6c56f39ef75126b5!2sUN%20TRAVEL%20%26%20TOURS%20HAJJ%20%26%20UMRAH%20SERVICES%20PVT%20LTD!5e1!3m2!1sen!2s!4v1756236184051!5m2!1sen!2s"
              width="600"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </aside>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "Usman Naimat Travel & Tours",
            url: "https://your-domain.com/contact",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+92-xxx-xxxxxxx",
              contactType: "Customer Service",
              areaServed: "PK",
              availableLanguage: ["English", "Urdu"],
            },
            description:
              "Contact Usman Naimat Travel & Tours — your trusted partner for Hajj and Umrah travel services in Pakistan.",
            image: "/medina-hero.jpg",
          }),
        }}
      />
    </section>
  );
}

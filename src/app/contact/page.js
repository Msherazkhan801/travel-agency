"use client";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

export default function Contact() {
  const [state, handleSubmit] = useForm("manokkpp"); // <-- replace with your Formspree form ID

  if (state.succeeded) {
    return (
      <>
        <h3 className="text-yellow-600 my-24 py-3 text-center font-semibold">
          ✅ Thanks for contacting us! We’ll get back to you shortly.<br></br>
          <Link href="/">
            <button className="border border-black rounded p-5 mt-5">
              Back to Home
            </button>
          </Link>
        </h3>
      </>
    );
  }
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 mt-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have a question about our
            Hajj & Umrah packages, need assistance, or just want to talk — we’re
            here to help.
          </p>
        </div>

        {/* Grid Layout: Form + Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-600 text-sm mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
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
                <label className="block text-gray-600 text-sm mb-2">
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

              {/* Visa Status Dropdown */}
              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  Visa Status
                </label>
                <select
                  id="visa"
                  name="visa"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                >
                  <option value="">-- Select Option --</option>
                  <option value="umrah">Umrah</option>
                  <option value="hajj">Hajj</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
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
                className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-400 transition disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194104.13653142744!2d71.56547024999999!3d33.97729304999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60138eb8fe647b87%3A0x6c56f39ef75126b5!2sUN%20TRAVEL%20%26%20TOURS%20HAJJ%20%26%20UMRAH%20SERVIES%20PVT%20LTD!5e1!3m2!1sen!2s!4v1756236184051!5m2!1sen!2s"
              width="600"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

'use client'

import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <>
        <h1>Get in touch</h1>
    <section className="min-h-screen bg-muted/30 py-16 px-6 lg:px-12 flex items-center justify-center my-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-card rounded-2xl shadow-xl overflow-hidden gap-12">
        
        {/* Left: Form */}
        <div className="p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Contact Us / Book a Package
          </h2>
          <p className="text-muted-foreground mb-8">
            Fill out the form and our team will respond within 24 hours.
          </p>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:ring-2 focus:ring-primary outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:ring-2 focus:ring-primary outline-none"
                required
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Select Service
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:ring-2 focus:ring-primary outline-none">
                <option>Hajj Packages</option>
                <option>Umrah Services</option>
                <option>Group Tours</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Right: Map */}
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24184.94327848703!2d39.8175667!3d21.3890826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204ef7c39b6b7%3A0x3a3b9443d6f02e2!2sMakkah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1698242341234!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[500px] w-full"
          ></iframe>
        </div>
      </div>
    </section>
  </>
  );
}

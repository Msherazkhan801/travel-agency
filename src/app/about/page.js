import TeamSection from "@/components/Teams";
import AboutHero from "@/components/ui/AboutHero";
import Button from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* Hero Section */}
      <AboutHero />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-black mb-6">
                Founded over 9 years ago, Usman Naimat Travel & Tours has
                established itself as a trusted name in religious tourism. Our
                journey began with a simple mission: to provide pilgrims with a
                spiritually fulfilling and hassle-free experience when visiting
                the holy cities of Mecca and Medina.
              </p>
              <p className="text-black mb-6">
                What sets us apart is our deep understanding of Islamic
                traditions and our commitment to excellence in every aspect of
                the pilgrimage journey. We recognize that these sacred trips are
                more than just travel—they are profound spiritual experiences
                that require careful planning, respect, and devotion.
              </p>
              <p className="text-black mb-6">
                Our team consists of experienced professionals who are not only
                travel experts but also deeply knowledgeable about the religious
                significance of the pilgrimage. We handle every detail with
                care, ensuring that our pilgrims can focus entirely on their
                spiritual journey.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
                Our Mission
              </h3>
              <p className="text-black mb-6">
                To facilitate spiritually rewarding and comfortable pilgrimage
                experiences by providing comprehensive, respectful, and
                professionally managed travel services that adhere to Islamic
                principles and traditions.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
                Our Values
              </h3>
              <ul className="list-disc pl-5 text-black mb-6">
                <li className="mb-2">
                  Integrity in all our dealings and transactions
                </li>
                <li className="mb-2">
                  Respect for Islamic traditions and practices
                </li>
                <li className="mb-2">Excellence in service delivery</li>
                <li className="mb-2">Compassion for the needs of pilgrims</li>
                <li className="mb-2">Reliability in our commitments</li>
              </ul>
            </div>

            <div className="md:w-1/3">
              {/* Stats Section */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  Our Achievements
                </h3>

                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-emerald-700">
                    1000+
                  </div>
                  <div className="text-black">Happy Pilgrims</div>
                </div>

                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-emerald-700">5+</div>
                  <div className="text-black">Customer Rating</div>
                </div>

                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-emerald-700">9+</div>
                  <div className="text-black">Years Experience</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-700">
                    100%
                  </div>
                  <div className="text-black">Satisfaction Rate</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Get In Touch
                </h3>

                <div className="mb-4 flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">
                      Office Address:
                    </h4>
                    <p className="text-black">
                      1st Floor Naimat Ullah Building
                      <br />
                      Near Murad Market, Oppo: Masjid Mohabat Khan
                      <br />
                      Peshawar
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-5">
                <div className="mb-4 flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">
                      Contact Numbers
                    </h4>
                    <p className="text-black">
                      Phone: 091-2580547
                      <br />
                      Mobile: 0343-9831664
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-5">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Email</h4>
                    <p className="text-black">untravelandtours5@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <TeamSection/> */}
    </div>
  );
}

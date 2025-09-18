import Head from "next/head";

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Usman Naimat Travel & Tours provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in Umrah and Hajj packages, including visa processing, hotel bookings, transport arrangements, and complete guidance for your spiritual journey."
        }
      },
      {
        "@type": "Question",
        "name": "Where is your office located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our office is located in Peshawar, Pakistan. You can visit us during working hours or contact us via phone/WhatsApp for details."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide customized Umrah or Hajj packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. In addition to our standard packages (sharing, double, triple, quadruple room options), we also provide customized packages to meet your budget and travel preferences."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for Umrah visa processing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will need: a valid passport (minimum 6 months validity), recent passport-size photographs with white background, CNIC copy, and vaccination certificate as per Saudi government requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do your packages include flights and accommodation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our packages typically include flights, visa, hotel accommodation, and transport. Package details are clearly mentioned, and you may also request upgrades."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>FAQs - Usman Naimat Travel & Tours</title>
        <meta
          name="description"
          content="Frequently Asked Questions about Umrah and Hajj packages from Usman Naimat Travel & Tours in Peshawar."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">
              What services does Usman Naimat Travel & Tours provide?
            </h2>
            <p>
              We specialize in Umrah and Hajj packages, including visa
              processing, hotel bookings, transport arrangements, and complete
              guidance for your spiritual journey.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Where is your office located?
            </h2>
            <p>
              Our office is located in Peshawar, Pakistan. You can visit us
              during working hours or contact us via phone/WhatsApp for details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Do you provide customized Umrah or Hajj packages?
            </h2>
            <p>
              Yes. In addition to our standard packages (sharing, double, triple,
              quadruple room options), we also provide customized packages to
              meet your budget and travel preferences.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              What documents are required for Umrah visa processing?
            </h2>
            <p>
              Valid passport (min. 6 months), passport-size photographs, CNIC
              copy, and vaccination certificate (as per Saudi requirements).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Do your packages include flights and accommodation?
            </h2>
            <p>
              Yes. Our packages typically include flights, visa, hotel
              accommodation, and transport. Package details are clearly
              mentioned, and you may also request upgrades.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

import Head from "next/head";
import Link from "next/link";

export default function VideoGuides() {
  const videoList = [
    {
      title: "How to Perform Umrah 2026 (Step-by-Step)",
      id: "EA6_4t4l90g", // 2026 specific guide
      description: "A clear, practical guide for first-time pilgrims performing Umrah in 2026."
    },
    {
      title: "Complete Hajj Guide 2025/2026",
      id: "iyOF_9cjGa0", // Comprehensive Hajj guide
      description: "Detailed walkthrough of the Hajj routes, Tamattu', and daily rites."
    },
    {
      title: "Understanding Miqat & Ihram",
      id: "z4OkHqu1KsA", // Focus on preparation
      description: "A deep dive into the first steps: how to wear Ihram and entering the Miqat."
    }
  ];

  // Video Schema for SEO (VideoObject)
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": videoList.map((vid, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "VideoObject",
        "name": vid.title,
        "description": vid.description,
        "thumbnailUrl": `https://img.youtube.com/vi/${vid.id}/maxresdefault.jpg`,
        "uploadDate": "2026-01-11",
        "embedUrl": `https://www.youtube.com/embed/${vid.id}`
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Hajj & Umrah Video Guides 2026 | Usman Naimat Travel</title>
        <meta name="description" content="Watch step-by-step visual guides on how to perform Hajj and Umrah. Expert advice from Usman Naimat Travel & Tours Peshawar." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-24 text-black bg-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Visual Pilgrimage Guides</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Preparing for your spiritual journey? Watch our curated step-by-step videos to learn the proper rituals for Hajj and Umrah.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoList.map((video, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md border border-gray-100">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  eferrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold mb-2">{video.title}</h2>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for SEO */}
        <div className="mt-16 p-8 bg-green-50 rounded-2xl text-center border border-green-100">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Ready to start your journey?</h3>
          <p className="mb-6 text-green-700">Contact our Peshawar office for personalized guidance and 2026 package bookings.</p>
         <Link href="/contact">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition">
            Book My Umrah Package
          </button>
          </Link>
        </div>
      </main>
    </>
  );
}
"use client";

export default function TeamSection() {
  const team = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      description:
        "Leading with vision and passion to provide exceptional Hajj and Umrah services.",
      image: "ceo.jpg", // replace with your image path
    },
    {
      name: "Aisha Khan",
      role: "Operations Head",
      description:
        "Ensuring smooth logistics and seamless travel experiences for all our clients.",
      image: "ceo.jpg",
    },
    {
      name: "Ahmed Ali",
      role: "Religious Guide",
      description:
        "Providing spiritual guidance and support throughout the sacred journey.",
      image: "ceo.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-md"
            >
              {/* Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-yellow-500 bg-opacity-70 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-emerald-400 font-semibold">{member.role}</p>
                <p className="text-gray-200 mt-2 text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

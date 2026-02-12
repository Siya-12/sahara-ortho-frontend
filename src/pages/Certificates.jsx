import CertBg from "../assets/img/bg-cert.png";

export default function Certification() {
  const certificates = [
    {
      img: "../src/assets/img/certificates/iso.jpg",
      title: "ISO 13485 Certification of Compliance",
    },
    {
      img: "../src/assets/img/certificates/ce.jpg",
      title: "CE Certification of Compliance",
    },
    {
      img: "../src/assets/img/certificates/fda.jpg",
      title: "FDA Certification of Compliance",
    },
  ];

  return (
    <section className="min-h-[60vh] md:min-h-screen bg-gradient-to-br from-slate-200 to-cyan-100 px-6 py-8 md:py-16" style={{ backgroundImage:`url(${CertBg})`}}>
      
      {/* Heading */}
      <h1
        className="text-center text-4xl md:text-5xl font-bold mb-6 md:mb-14
         bg-clip-text font-changa text-transparent bg-gradient-to-r from-gray-400 via-gray-800 to-gray-400 bg-clip-border"
      >
        CERTIFICATIONS
      </h1>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl
            transition duration-300 p-5 pb-8 md:pb-5 pt-8"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="rounded-l w-full h-full object-cover"
            />

            <p
              className="pt-4 mt-4 text-center text-gray-700 font-extrabold"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              {cert.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

import ceImg from "../assets/img/certificates/ce.jpg";
import fdaImg from "../assets/img/certificates/fda.jpg";
import isoImg from "../assets/img/certificates/iso.jpg";

export default function Certification() {
  const certificates = [
    {
      img: isoImg,
      title: "ISO 13485 Certification of Compliance",
    },
    {
      img: ceImg,
      title: "CE Certification of Compliance",
    },
    {
      img: fdaImg,
      title: "FDA Certification of Compliance",
    },
  ];

  return (
    <section className="min-h-[60vh] md:min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-100 px-5 md:py-2 py-8">
      
      {/* Heading */}
      <h1
        className="text-center text-4xl md:text-5xl font-bold mb-2 md:mb-5
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
  transition duration-300 overflow-hidden flex flex-col"
>
  {/* Image */}
  <div className="w-full h-full overflow-hidden">
    <img
      src={cert.img}
      alt={cert.title}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Title Inside Same Box */}
  <div className="p-5 text-center">
    <p
      className="text-gray-800 font-semibold text-sm md:text-base"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      {cert.title}
    </p>
  </div>
</div>

        ))}
      </div>
    </section>
  );
}

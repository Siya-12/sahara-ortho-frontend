import About1 from "../assets/img/About1.jpeg";
import About2 from "../assets/img/About2.jpeg";
import About3 from "../assets/img/About3.jpeg";
import About4 from "../assets/img/About4.jpeg";

export default function AboutUs() {
  const images = [About1, About2, About3, About4];

  return (
    <section className="py-5 bg-gradient-to-br from-sky-100 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-6 md:mb-14
         bg-clip-text font-changa text-transparent 
         bg-gradient-to-r from-gray-400 via-gray-800 to-gray-400 bg-clip-border">
          ABOUT US
        </h2>

        {/* Video */}
        <div className="flex justify-center mb-12">
  <div className="w-full md:w-2/4 aspect-video">
    <video
      src="/videos/vdo1.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover rounded-2xl shadow-2xl"
    />
  </div>
</div>

        {/* Company Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-700 text-2xl leading-relaxed text-bold ">
            Sahara Ortho is a trusted manufacturer of high-quality orthopaedic 
            implants and instruments. Since 2005, we have focused on precision 
            engineering, strict quality standards, and continuous innovation 
            to support surgeons and improve patient outcomes worldwide.
          </p>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden 
                         transform hover:scale-105 transition duration-300"
            >
              <img
                src={img}
                alt={`About ${index + 1}`}
                className="w-full h-74 object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

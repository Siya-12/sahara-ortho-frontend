import heroImg from "../assets/img/2.png";
import { Link } from "react-router-dom";
import brochurePdf from "../assets/brochure.pdf";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-white/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

           {/* LEFT TEXT */}
<div className="flex flex-col">

  {/* Brochure Overlay */}
  <a
    href={brochurePdf}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex w-fit items-center gap-2
      px-4 py-1 rounded-full
      bg-white/90 backdrop-blur-md
      shadow-md
      text-lg font-semibold text-gray-800
      hover:bg-gray-800 hover:text-white
      transition
self-center lg:self-start
      order-3 mt-4
      lg:order-1 lg:mb-4 lg:mt-0
    "
  >
    📄 View Brochure →
  </a>

  {/* Heading */}
  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight order-1 lg:order-2">
    Fixing fractures, Restoring futures
  </h1>

  {/* Paragraph */}
  <p className="mt-6 max-w-xl text-gray-600 text-lg order-2 lg:order-3">
    We provide all kinds of Orthopaedic Implants and Instruments of
    best quality at reasonable prices since 2005.
  </p>

</div>



            {/* RIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Blue Card */}
              <div className="sm:row-span-2 bg-gradient-to-br from-blue-600 via-blue-900 to-blue-400 text-white p-7 rounded-2xl shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Why Choose Sahara Ortho?
                  </h3>
                  <p className="text-sm leading-relaxed">
                    At Sahara Ortho, we prioritize quality, precision, and trust in everything we manufacture. As a leading manufacturer of orthopedic implants and instruments, we are committed to enhancing surgical outcomes and improving patient lives through innovation and reliability.
                  </p>
                </div>

        <Link to="/about">
                <button className="mt-6 bg-gray-300 text-primary px-5 py-2 rounded-lg font-medium w-fit hover:bg-gray-800 hover:text-white transition">
                  Learn More →
                </button>
                </Link>
              </div>

              {/* White Cards */}
{[
  {
    title: "Uncompromising Quality",
    desc: "We adhere to strict international standards and rigorous quality control at every stage-from raw material selection to final packaging-ensuring safe and reliable orthopaedic solutions."
  },
  {
    title: "Affordable Excellence",
    desc: "We deliver premium-quality orthopaedic products at competitive prices, helping healthcare providers offer the best care without compromise."
  },
  // {
  //   title: "Wide Product Range",
  //   desc: "From trauma implants to spine and hip replacement systems, we offer a comprehensive portfolio designed to support diverse surgical requirements."
  // }
].map((item) => (
  <div
    key={item.title}
    className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg"
  >
    <h4 className="font-semibold text-gray-800">
      {item.title}
    </h4>
    <p className="text-sm text-gray-600 mt-2">
      {item.desc}
    </p>
  </div>
))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


import AboutBg from "../assets/img/bg-about.jpg";
import About1 from "../assets/img/about1.jpeg"; 
export default function AboutUs() {
  return (
    <section className="bg-[#eaf6fb] py-20 bg-no-repeat bg-center bg-cover"style={{ backgroundImage:`url(${AboutBg})`}}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-14
         bg-clip-text text-transparent font-changa
    bg-gradient-to-r from-green-800 via-teal-900 to-red-900
    bg-clip-border text-cyan">
          ABOUT US
        </h2>
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <video
  src="/videos/vdo1.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover rounded-xl"
/>


          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Excellence in Orthopaedic Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sahara Ortho is dedicated to delivering high-quality orthopaedic
              implants and instruments that meet global standards. Our focus
              is on precision, durability, and patient safety.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="md:order-2">
          <img src={About1} alt="" className="rounded-xl h-50 md:h-50 w-auto object-contain"/>
          </div>

          <div className="md:order-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Advanced Manufacturing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With modern manufacturing techniques and strict quality control,
              we ensure each product delivers reliability and long-term
              performance for surgeons and patients.
            </p>
          </div>
        </div>

        {/* Row 3
        <div className="grid md:grid-cols-2 gap-12 items-center">
         <video
  src="/videos/vdo3.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover rounded-xl"
/>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Trusted by Professionals
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our products are trusted by orthopaedic surgeons across the
              country. We continuously innovate to support better surgical
              outcomes and faster patient recovery.
            </p>
          </div>
        </div>*/}

      </div> 
    </section>
  );
}

 
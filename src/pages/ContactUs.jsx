import ContactBg from "../assets/img/bg-contact.png";
export default function ContactUs() {
  return (
    <section className="min-h-[60vh] md:min-h-screen px-6 py-8 md:py-16" style={{backgroundImage:`url(${ContactBg})`}}>
      
      {/* Heading */}
      <h2
        className="text-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-800 to-blue-400 text-transparent bg-clip-border bg-clip-text mb-6 md:mb-12 font-changa"

      >
        CONTACT US
      </h2>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT: FORM */}
        <form
          action="https://formspree.io/f/mnjqlkrr" // 🔴 replace with your Formspree ID
          method="POST"
          className="bg-white p-8 rounded-xl shadow-lg space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-white text-black w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-white text-black w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="phone"
            name="phone"
            placeholder="Your Contact no."
            required
            className="bg-white text-black w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="bg-white text-black w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>

        {/* RIGHT: CONTACT DETAILS */}
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600"  style={{ fontFamily: "Merriweather, sans-serif" }}>
            SAHARA ORTHO
          </h3>

          <p className="text-gray-600">
            Trusted manufacturer of premium orthopaedic rehabilitation and
            surgical products, committed to quality and patient care.
          </p>

          <p className="text-gray-700">
            📍 <strong>Address:</strong><br />
            Unit No.113, First Floor,<br />
            Wegmans Prinston Plaza,<br />
            Plot No.CSC, Block-H,<br />
            Sector-18, Rohini,<br />
            North West Delhi – 110089
          </p>

          <p className="text-gray-700">
            📞 <strong>Phone:</strong>   +91 8700281458 <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +91 9350243968
          </p>

          <p className="text-gray-700">
            ✉️ <strong>Email:</strong> saharaortho68@gmail.com
          </p>
        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447778.0649618724!2d76.5577715734375!3d28.7414701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d011cdbb2d4e3%3A0xd0f81076d69935fd!2sSahara%20Ortho!5e0!3m2!1sen!2sin!4v1767033049220!5m2!1sen!2sin"
          className="w-full h-[350px] rounded-xl border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </section>
  );
}

import { useParams } from "react-router-dom";
import BgPlate from "../assets/img/Bg-plate.png";
import BgScrew from "../assets/img/bg-screw.png";
import BgNail from "../assets/img/bg-nail.png";
import BgInstruments from "../assets/img/bg-instruments.png";
import BgIllizarov from "../assets/img/bg-illizarov.png";
import Jess from "../assets/img/bg-jess.png";
import Bgwirespinsrods from "../assets/img/bg-wirerodpin.png";
import BgSpinal from "../assets/img/bg-spinal.png";
import BgFacial from "../assets/img/bg-facial.png";

export default function ProductCategory() {
  const { category } = useParams(); 


  const bgMap = {
  "bone-plates": BgPlate,
  "bone-screws": BgScrew, 
  "bone-nails": BgNail,
  "instruments": BgInstruments,
  "illizarov": BgIllizarov,
  "jess-systems": Jess,
  "wires-pins-rods": Bgwirespinsrods,
  "spinal-implants": BgSpinal,
  "maxillofacial": BgFacial,
};

const categoryBg = bgMap[category];

  const productData = {
    "bone-plates": [
    
       { img: "/products/plate/nonLocking/small.jpeg", title: "DCP Small Plate" },
        { img: "/products/plate/nonLocking/narrow.jpeg", title: "DCP Narrow Plate " },
        { img: "/products/plate/nonLocking/broad.jpeg", title: "DCP Broad Plate" },
         { img: "/products/plate/nonLocking/oneThird.jpeg", title: "DCP 1/3rd Tubular Plate" },
           { img: "/products/plate/nonLocking/dhs.jpeg", title: "DCP- DHS Barrel Plate " },
       { img: "/products/plate/nonLocking/dcs.jpeg", title: "DCP-DCS Barrel Plate " },
        { img: "/products/plate/nonLocking/stRecon.jpeg", title: "Straight Reconstruction " },
         { img: "/products/plate/nonLocking/CurveRecon.jpeg", title: "Curved Reconstruction " },
           { img: "/products/plate/nonLocking/pelvicSt.jpeg", title: "Straight Pelvic Plate " },
       { img: "/products/plate/nonLocking/pelvicCurved.jpeg", title: "Curve Pelvic Plate " },
        { img: "/products/plate/nonLocking/dhsPediactrics.jpeg", title: "DCP-DHS Plate (Pediatrics) " },
         { img: "/products/plate/nonLocking/dcsPediactrics.jpeg", title: "DCP-DCS Plate (Pediatrics) " },
           { img: "/products/plate/nonLocking/Calcaneal.jpeg", title: "Calcaneal Plate " },
       { img: "/products/plate/nonLocking/T-small.jpeg", title: "Small T- Plate " },
        { img: "/products/plate/nonLocking/Tbutress.jpeg", title: "DCP T- Buttress Plate   " },
         { img: "/products/plate/nonLocking/Toblique.jpeg", title: "T- Oblique Plate  " },
    ],

    "bone-nails": [
      { img: "/products/nails/im-nail.png", title: "IM Nail" },
      { img: "/products/nails/elastic.png", title: "Elastic Nail" },
    ],

    "bone-screws": [
      { img: "/products/screws/cortical.png", title: "Cortical Screws" },
      { img: "/products/screws/cancellous.png", title: "Cancellous Screws" },
    ],

    
    "instruments": [
      { img: "/products/screws/cortical.png", title: "Cortical Screws" },
      { img: "/products/screws/cancellous.png", title: "Cancellous Screws" },
    ],

    
    "illizarov": [
      { img: "/products/screws/cortical.png", title: "Cortical Screws" },
      { img: "/products/screws/cancellous.png", title: "Cancellous Screws" },
    ],

    
    "jess-systems": [
      { img: "/products/screws/cortical.png", title: "Cortical Screws" },
      { img: "/products/screws/cancellous.png", title: "Cancellous Screws" },
    ],

    
    "wires-pins-rods": [
      { img: "/products/wires-pins-and-rods/cortical.png", title: "Cortical Screws" },
      { img: "/products/screws/cancellous.png", title: "Cancellous Screws" },
    ],

    
    "spinal-implants": [
      { img: "/products/screws/cortical.png", title: "Cortical Screws" },
      { img: "/products/screws/cancellous.png", title: "Cancellous Screws" },
    ],

    
    "maxillofacial": [
      { img: "/products/screws/cortical.png", title: "Cortical Screws" },
      { img: "/products/screws/cancellous.png", title: "Cancellous Screws" },
    ],
  };

  const items = productData[category] || [];

  return (
    <section
  className="min-h-screen px-6 py-16 bg-cover bg-no-repeat bg-center"
  style={{ backgroundImage: `url(${categoryBg})` }}
>


      {/* Heading */}
      <h1
        className="text-center text-4xl md:text-5xl font-bold mb-14
        bg-clip-text text-transparent font-changa
        bg-gradient-to-r from-gray-400 via-gray-900 to-gray-500"
      >
        {category.replace(/-/g, " ").toUpperCase()}
      </h1>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl
            transition duration-300 p-5"
          >
            <div className="relative group overflow-hidden rounded-xl">

  {/* Image */}
  <img
    src={item.img}
    alt={item.title}
    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* Hover Overlay */}
  <div
   className="absolute inset-0
      flex items-center justify-center
      bg-black/50
      opacity-0 group-hover:opacity-100
      transition duration-500"
  >
    <p
      className="text-white text-xl font-semibold tracking-wide
      translate-y-4 group-hover:translate-y-0
      transition duration-00 font-dmserif"
      // style={{ fontFamily: "Merriweather, sans-serif" }}
    >
      {item.title}
    </p>
  </div>

</div>
{/* Title below image (Mobile only) */}
  <p
    className="mt-3 text-2xl text-center text-gray-700 font-medium block md:hidden font-extrabold font-dmserif"
  >
    {item.title}
  </p>

          </div>
        ))}
      
      </div>
    </section>
  );
}

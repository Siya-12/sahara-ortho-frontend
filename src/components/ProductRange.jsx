import { Link } from "react-router-dom";

export default function ProductRange() {
  const products = [
    {
      title: "Bone Plate",
      desc:
        "Ortho Bone Plate quietly supports the bone from inside, allowing safe and faster healing without external casts.",
      icon: "/icons/plate-icon.jpeg",
      image: "/products/bone-plate.png",
      link: "/products/bone-plates",
    },
    {
      title: "Bone Screw",
      desc:
        "Ortho Bone Screw acts like a strong support pin that keeps broken bones in the right position until they heal.",
      icon: "/icons/screw-icon.jpeg",
      image: "/products/bone-screw.png",
      link: "/products/bone-screws",
    },
    {
      title: "Bone Nail",
      desc:
        "Ortho Bone Nail is an internal rod that strengthens a broken bone from the inside while it heals.",
      icon: "/icons/nail-icon.jpeg",
      image: "/products/nail.png",
      link: "/products/bone-nails",
    },
      {
      title: "Instruments",
      desc:
        "Ortho Bone Instruments are the essential tools that allow surgeons to safely and precisely repair broken bones.",
      icon: "/icons/instruments-icon.jpeg",
      image: "/products/instruments.png",
      link: "/products/instruments",
    },
    {
      title: "Illizarov",
      desc:
        "Illizarov system helps bones heal, straighten, or grow by slowly guiding them into the correct position from outside the body.",
      icon: "/icons/illizarov-icon.jpeg",
      image: "/products/illizarov.png",
      link: "/products/illizarov",
    },
    {
      title: "Jess Systems",
      desc:
        "JESS System supports and aligns bones from outside the body while allowing gradual correction and healing.",
      icon: "/icons/jess-icon.jpeg",
      image: "/products/jess.png",
      link: "/products/Jess-Systems",
    },
      {
      title: "Wires,Pins and Rods",
      desc:
        "Wires guide, Pins support, Rods strengthen from inside, and screws lock everything in place.",
      icon: "/icons/wpr-icon.jpeg",
      image: "/products/wireRodPin.png",
      link: "/products/wires-rods-&-pins",
    },
    {
      title: "Spinal Implants",
      desc:
        "Spinal Implants act as an internal support system that keeps the spine stable and properly aligned during healing.",
      icon: "/icons/spinal-icon.jpeg",
      image: "/products/spinal.png",
      link: "/products/spinal-implants",
    },
    {
      title: "Maxillofacial",
      desc:
        "Maxillofacial Implants help restore the shape, strength, and function of facial bones while ensuring proper healing.",
      icon: "/icons/maxillofacial-icon.jpeg",
      image: "/products/facial.png",
      link: "/products/maxillofacial",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="mt-2 text-center text-4xl md:text-5xl font-bold
         bg-clip-text font-changa bg-gradient-to-r from-gray-600 via-gray-900 to-gray-600
    bg-clip-border text-transparent">
          Our Product Range
        </h2>
        <p className="mt-4 text-gray-900">
          Manufacturer, Exporter and Supplier of High Quality Orthopaedic
          Implants & Instruments in India
        </p>
      </div>

      {/* Product Rows */}
      <div className="max-w-7xl mx-auto space-y-6">
        {products.map((item) => (
          <div
            key={item.title}
            className="
              bg-white rounded-2xl shadow-md
              p-6 md:p-8
              flex flex-col md:flex-row
              items-start md:items-center
              gap-6
            "
          >
            {/* Icon */}
            <div className="flex-shrink-0">
  <div className="w-14 h-14 rounded-full bg-white-50 p-2 flex items-center justify-center overflow-hidden">
    <img
      src={item.icon}
      alt={item.title}
      className="w-full h-full object-contain scale-150"
    />
  </div>
</div>
            {/* Text */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">
                {item.title.toUpperCase()}
              </h3>
              <p className="mt-2 text-gray-600 text-sm max-w-xl">
                {item.desc}
              </p>
            </div>

            {/* Image */}
<div className="group w-full md:w-56 overflow-hidden rounded-lg bg-slate-50">
  <img
    src={item.image}
    alt={item.title}
    className="
      w-full h-32
      scale-100
      group-hover:scale-110
      transition-transform duration-500 ease-out
    "
  />
</div>

            {/* CTA */}
            <div className="w-full md:w-auto">
              <Link
                to={item.link}
                className="
                  inline-flex items-center justify-center
                  px-5 py-2.5
                  border border-gray-300
                  rounded-full
                  text-sm font-medium text-gray-800
                  hover:bg-gray-800 hover:text-white
                  transition
                "
              >
                View More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

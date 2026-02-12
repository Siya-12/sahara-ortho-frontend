import heroImg from "../assets/img/bg-benzene.png";
export default function WhyUs()
{
     const WhyUs = [
    {
      title: "100% Genuine Products",
      desc:
        "We ensure the supply of 100% genuine orthopaedic implants and surgical products. Every product is carefully sourced and quality-checked to guarantee safety, authenticity, and long-term reliability for medical professionals.",
      icon: "/icons/genuine.png",
    },
    {
      title: "Reasonable Pricing",
      desc:
        "We offer high-quality orthopaedic solutions at reasonable and competitive prices. Our pricing structure helps hospitals, distributors, and surgeons maintain cost efficiency without compromising on product standards.",
      icon: "/icons/price.png",
    },
    {
      title: "Superior Quality",
      desc:
        "Our products are manufactured following strict quality standards to deliver precision, durability, and consistent performance. Sahara Ortho focuses on reliability that healthcare professionals can depend on every day.",
      icon: "/icons/quality.png",
    },
    
    {
      title: "Dedicated Customer Service",
      desc:
        "Sahara Ortho provides responsive customer support and after-sales assistance. From order processing to technical guidance, we ensure smooth communication and long-term partnership satisfaction.",
      icon: "/icons/service.png",
    },
  ];

  return(
     <section className="min-h-screen px-6 py-16 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${heroImg})`}}>

      {/* Heading */}
      <h1
        className="text-center text-4xl md:text-5xl font-bold mb-14
         bg-clip-text font-changa bg-gradient-to-r from-gray-600 via-gray-900 to-gray-600
    bg-clip-border text-transparent"
      > How are we different?
      </h1>

       {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {WhyUs.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl
            transition duration-300 p-5"
          >
            {/* icon  */}
            <img
              src={item.icon}
              alt={item.title}
              className="rounded-l w-500 h-300 object-cover"
            />

           {/* Title */}
            <h3 className="text-l font-semibold mb-4 text-gray-900 font-merri text-center">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  ); 
}
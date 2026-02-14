// import heroImg from "../assets/img/bg-benzene.png";
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
     <section className="px-2 py-16 bg-center bg-cover bg-no-repeat bg-gray-200">
    {/*  style={{ backgroundImage: `url(${heroImg})`}} */}

      {/* Heading */}
      <h1
        className="text-center text-4xl md:text-5xl font-bold mb-14
         bg-clip-text font-changa bg-gradient-to-r from-gray-600 via-gray-900 to-gray-600
    bg-clip-border text-transparent"
      > How are we different?
      </h1>

       {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {WhyUs.map((item) => (
       <div
  key={item.title}
  className="group bg-white/80 backdrop-blur-sm rounded-xl 
  shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1
  p-4 flex flex-col items-center text-center"
>
  {/* Icon */}
  <div className="w-38 h-16 flex items-center justify-center mb-3 
      transition-transform duration-300 group-hover:scale-110">
    <img
      src={item.icon}
      alt={item.title}
      className="w-full h-full object-contain"
    />
  </div>

  {/* Title */}
  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 leading-tight">
    {item.title}
  </h3>

  {/* Description */}
  <p className="text-xs md:text-sm text-gray-600 leading-snug line-clamp-4">
    {item.desc}
  </p>
</div>


        ))}
      </div>
    </section>
  ); 
}
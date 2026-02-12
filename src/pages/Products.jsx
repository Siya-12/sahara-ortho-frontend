import { useNavigate, useParams } from "react-router-dom";
import ProductBg from "../assets/img/bg-product.png";
// import { useAuth } from "../context/AuthContext";


export default function Products() {
   const { category } = useParams(); 
  const products = [
    {
      img: "/products/bone-plate.png",
      title: "Bone Plates",
      slug: "bone-plates",
    },
    {
      img: "/products/nail.png",
      title: "Bone Nails",
      slug: "bone-nails",
    },
    {
      img: "/products/bone-screw.png",
      title: "Bone Screws",
      slug: "bone-screws",
    },
    {
      img: "/products/instruments.png",
      title: "Instruments",
      slug: "instruments",
    },
    {
      img: "/products/illizarov.png",
      title: "Illizarov",
      slug: "illizarov",
    },
    {
      img: "/products/jess.png",
      title: "Jess Systems",
      slug: "jess-systems",
    },
    {
      img: "/products/wireRodPin.png",
      title: "Wires,Pins & Rods",
      slug: "wires-pins-rods",
    },
    {
      img: "/products/spinal.png",
      title: "Spinal Implants",
      slug: "spinal-implants",
    },
    {
      img: "/products/facial.png",
      title: "Maxillofacial",
      slug: "maxillofacial",
    },
  ];
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleBuy = () => {
  if (!isAuthenticated) {
    navigate("/login");
  } else {
    navigate("/cart");
  }
};

  const filteredProducts = category
  ? products.filter((p) => p.slug === category)
  : products;
  return (
    <section className="min-h-[60vh] md:min-h-screen px-6 py-8 md:py-16 bg-cover bg-no-repeat md:bg-center md:bg-cover md:bg-no-repeat" style={{backgroundImage:`url(${ProductBg})`}}>
      
      {/* Heading */}
      <h1
        className="text-center text-4xl md:text-5xl font-bold mb-6 md:mb-14
         bg-clip-text text-transparent font-changa
    bg-gradient-to-r from-gray-500 via-gray-900 to-gray-700
    bg-clip-border text-cyan"
      >
       OUR PRODUCTS
      </h1>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((cert) => (
          <div
            key={cert.title}
            onClick={() =>
  navigate(`/products/${cert.slug.toLowerCase().replace(/\s/g, "-")}`)
}

            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl
            transition duration-300 p-3  
            
  last:col-span-2
  last:max-w-[180px]
  last:mx-auto

  md:last:col-span-1
  md:last:max-w-none
  md:last:mx-0"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="rounded-xl w-full h-46 object-content"
            />

            <p
              className="mt-4 text-center text-gray-700 font-medium text-bold"
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


// import { useNavigate } from "react-router-dom";

// const makeSlug = (title) =>
//   title.toLowerCase().replace(/\s+/g, "-");

// export default function Products() {
//   const navigate = useNavigate();

//   const products = [
//     { img: "/products/bone-plate.png", title: "Bone Plates" },
//     { img: "/products/nail.png", title: "Bone Nails" },
//     { img: "/products/bone-screw.png", title: "Bone Screws" },
//     { img: "/products/instruments.png", title: "Instruments" },
//     { img: "/products/illizarov.png", title: "Illizarov" },
//     { img: "/products/jess.png", title: "Jess Systems" },
//     { img: "/products/wire-rod-pin.png", title: "Wires, Pins and Rods" },
//     { img: "/products/spinal.png", title: "Spinal Implants" },
//     { img: "/products/facial.png", title: "Maxillofacial" },
//   ];

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-slate-200 to-cyan-100 px-6 py-16">
//       <h1 className="text-center text-4xl md:text-5xl font-bold mb-14
//         bg-clip-text text-transparent font-changa
//         bg-gradient-to-r from-red-800 via-blue-500 to-red-900">
//         PRODUCTS
//       </h1>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {products.map((cert) => (
//           <div
//             key={cert.title}
//             onClick={() =>
//               navigate(`/products/${makeSlug(cert.title)}`)
//             }
//             className="cursor-pointer bg-white rounded-2xl shadow-lg
//               hover:shadow-2xl transition duration-300 p-5"
//           >
//             <img
//               src={cert.img}
//               alt={cert.title}
//               className="rounded-xl w-full h-52 object-cover"
//             />

//             <p
//               className="mt-4 text-center text-gray-700 font-medium"
//               style={{ fontFamily: "Merriweather, sans-serif" }}
//             >
//               {cert.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

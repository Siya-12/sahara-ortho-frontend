import { useState } from "react";
import logo from "../assets/img/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import BusinessEnquiryModal from "../components/BusinessEnquiryModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const location = useLocation();
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [activeMobileProduct, setActiveMobileProduct] = useState(null);

const productsMenu = [
  {
    name: "Bone Plates",
    value: "bone-plates",
    // subsections: ["Plates", "Screws", "Nails"],
  },
  {
    name: "Bone Nails",
     value: "bone-nails",
    // subsections: ["Pedicle Screws", "Rods", "Cages"],
  },
  {
    name: "Bone Screws",
     value: "bone-screws",
    // subsections: ["Hip", "Knee", "Shoulder"],
  },
  {
    name: "Instruments",
     value: "instruments",
    // subsections: ["Plates", "Screws", "Nails"],
  },
  {
    name: "Illizarov",
     value: "illizarov",
    // subsections: ["Plates", "Screws", "Nails"],
  },
   {
    name: "Jess Systems",
     value: "jess-systems",
    // subsections: ["Pedicle Screws", "Rods", "Cages"],
  },
  {
    name: "Wires,Pins & Rods",
     value: "wires-pins-rods",
    // subsections: ["Hip", "Knee", "Shoulder"],
  },
  {
    name: "Spinal Implants",
     value: "spinal-implants",
    // subsections: ["Plates", "Screws", "Nails"],
  },
  {
    name: "Maxillofacial",
     value: "maxillofacial",
    // subsections: ["Plates", "Screws", "Nails"],
  },
];

  const isActive = (path) =>
    location.pathname === path
      ? "text-primary font-semibold"
      : "hover:text-black";

  return (
    <>
      <nav className="bg-white shadow w-full">

        {/* Main bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 md:py-3 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Sahara Ortho Logo"
              className="h-10 md:h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8 font-medium text-gray-700">
              <li className={isActive("/")}>
                <Link to="/">Home</Link>
              </li>
              <li className={isActive("/about")}>
                <Link to="/about">About</Link>
              </li>
              {/* product dropdown  */}
              <li className="relative group">
  <Link
  to="/products"
  className="cursor-pointer hover:text-blue"
>
  Products
</Link>

  {/* First level dropdown */}
  <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg min-w-[220px] z-50">
    <ul className="py-2">
      {productsMenu.map((product, idx) => (
        <Link key={idx} className="relative group/item"  to={`/products/${product.value}`}>
          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
            {product.name}
            {/* <span>›</span> */}
          </div>

          {/* Second level dropdown
          <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-lg rounded-lg min-w-[200px]">
            <ul className="py-2">
              {product.subsections.map((sub, i) => (
                <Link
                  key={i}
                  to={`/products/${product.name}/${sub}`}
                  className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {sub}
                </Link>
              ))}
            </ul>
          </div> */}
        </Link>
      ))}
    </ul>
  </div>
</li>

              <li className={isActive("/certifications")}>
                <Link to="/certifications">Certifications</Link>
              </li>
              <li className={isActive("/contact")}>
                <Link to="/contact">Contact Us</Link>
              </li>
              {/* <li className={isActive("/login")}>
                <Link to="/login">Login</Link>
              </li> */}
            </ul>

            <button
              onClick={() => setOpenEnquiry(true)}
              className="bg-red-600 text-white px-4 py-1 md:py-1.5 text-sm rounded-full hover:bg-red-500 transition whitespace-nowrap"
            >
              Make an Appointment
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => {setOpen(!open); 
              setMobileProductsOpen(false);
              setActiveMobileProduct(null);}}
            className="md:hidden text-sm text-gray-700 bg-white"
          >
            <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
  
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden absolute left-0 w-full bg-white shadow-lg z-50">
            <ul className="flex flex-col gap-4 px-6 py-6 font-medium text-gray-700">
              <li>
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setOpen(false)}>About</Link>
              </li>

              {/* products dropdown  */}
             <li>
  <button
    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
    className="w-full flex justify-between items-center"
  >
    Products
    <span>{mobileProductsOpen ? "−" : "+"}</span>
  </button>

  {mobileProductsOpen && (
    <ul className="mt-2 ml-4 space-y-3">
      {productsMenu.map((product, idx) => (
        <li key={idx}>
          <Link
            to={`/products/${product.value}`}
            onClick={() => {
              setOpen(false);
              setMobileProductsOpen(false);
            }}
            className="block py-1 hover:text-primary"
          >
            {product.name}
          </Link>
        </li>
      ))}
    </ul>
  )}
</li>


              <li>
                <Link to="/certifications" onClick={() => setOpen(false)}>Certifications</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
              </li>

              <button
                onClick={() => {
                  setOpen(false);
                  setOpenEnquiry(true);
                }}
                className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-500 transition w-fit"
              >
                Make an Appointment
              </button>
            </ul>
          </div>
        )}
      </nav>

      {/* MODAL MUST BE HERE */}
      <BusinessEnquiryModal
        isOpen={openEnquiry}
        onClose={() => setOpenEnquiry(false)}
      />
    </>
  );
}

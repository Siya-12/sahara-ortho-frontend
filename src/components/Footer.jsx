import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-900 to-blue-500 text-white">

      {/* ================= MOBILE FOOTER ================= */}
      <div className="md:hidden max-w-md mx-auto px-4 py-10">

        {/* Brand */}
        <div className="text-center">
          <img
            src={logo}
            alt="Sahara Ortho"
            className="h-12 mx-auto mb-3 bg-white p-2 rounded"
          />

          <p className="text-sm text-red-50 line-clamp-2">
            Trusted manufacturer of premium orthopaedic rehabilitation &
            surgical products.
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p className="flex justify-center items-center gap-2">
              <Phone size={14} /> +91 87002 81458
            </p>
            <p className="flex justify-center items-center gap-2 break-all">
              <Mail size={14} /> saharaortho68@gmail.com
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <SocialIcon Icon={Facebook} link="https://www.facebook.com/share/1AWdeaWFAX/" />
            <SocialIcon Icon={Instagram} link="https://www.instagram.com/sahara_ortho" />
            <SocialIcon Icon={Linkedin} link="https://in.linkedin.com/in/sahara-ortho-65a6a9266" />
            <SocialIcon Icon={Youtube} link="https://youtube.com/@orthopaediciansuresh2137" />
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-8 space-y-4">
          <Accordion title="Our Products">
              <p>Bone Plates</p>
            <p>Bone Nails</p>
            <p>Bone Screws</p>
             <p>Instruments</p>
            <p>Illizarov</p>
            <p>Jess Systems</p>
             <p>Wires, pins and rods</p>
            <p>Spinal Implants</p>
            <p>Maxillofacial</p>
            
           
          </Accordion>

          <Accordion title="Quick Links">
           <Link to="/" className="block text-white"> Home</Link>
           <Link to="/about" className="block text-white"> About Us</Link>
            <Link to="/products" className="block text-white"> Our Products</Link>
            <Link to="/certifications" className="block text-white">Certifications</Link>
            <Link to="/contact" className="block text-white">Contact Us</Link>
            {/* <Link to="/products" className="block text-white">Privacy Policy</Link>
            <Link to="/products" className="block text-white">Terms & Conditions</Link> */}
          </Accordion>

          <Accordion title="Company Address">
            <p>
              Unit No.113, First Floor,<br />Wegmans Prinston Plaza,<br />Plot
No.CSC, Block-H,<br />Sector-18, Rohini,<br />North West
Delhi-110089
            </p>
          </Accordion>
        </div>
      </div>

      {/* ================= DESKTOP FOOTER (UNCHANGED) ================= */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-4 gap-10">

          {/* Brand Info */}
          <div>
            <img
              src={logo}
              alt="Sahara Ortho"
              className="h-14 mb-4 bg-white p-2 rounded"
            />

            <p className="text-sm leading-relaxed text-red-50">
              Sahara Ortho is a trusted manufacturer of premium orthopaedic
              rehabilitation and surgical products, committed to quality,
              innovation, and patient care.
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone size={16} /> +91 87002 81458
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} /> saharaortho68@gmail.com
              </p>
            </div>

            <div className="flex gap-4 mt-5">
              <SocialIcon Icon={Facebook} link="https://www.facebook.com/share/1AWdeaWFAX/" />
              <SocialIcon Icon={Instagram} link="https://www.instagram.com/sahara_ortho" />
              <SocialIcon Icon={Linkedin} link="https://in.linkedin.com/in/sahara-ortho-65a6a9266" />
              <SocialIcon Icon={Youtube} link="https://youtube.com/@orthopaediciansuresh2137" />
            </div>
          </div>

          {/* Products */}
  <FooterColumn title="Our Products">
  <FooterLink text="Bone Plates" to="/products/bone-plates" />
  <FooterLink text="Bone Nails" to="/products/bone-nails" />
  <FooterLink text="Bone Screws" to="/products/bone-screws" />
  <FooterLink text="Instruments" to="/products/instruments" />
  <FooterLink text="Illizarov" to="/products/illizarov" />
  <FooterLink text="Jess Systems" to="/products/jess-systems" />
  <FooterLink text="Wires, Pins and Rods" to="/products/wires-pins-rods" />
  <FooterLink text="Spinal Implants" to="/products/spinal-implants" />
  <FooterLink text="Maxillofacial" to="/products/maxillofacial" />
          </FooterColumn>

          {/* Links */}
          <FooterColumn title="Quick Links">
          <FooterLink text="Home" to="/" />
          <FooterLink text="About Us" to="/about" />
          <FooterLink text="Our Products" to="/products" />
          <FooterLink text="Certifications" to="/certifications" />
          <FooterLink text="Contact Us" to="/contact" />
{/* <FooterLink text="Privacy Policy" to="/privacy-policy" /> */}
{/* <FooterLink text="Terms & Conditions" to="/terms-conditions" /> */}
          </FooterColumn>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-lg mb-4 border-b border-red-200 pb-2">
              Office Address
            </h4>
            <p className="text-sm text-red-50 leading-relaxed">
             Unit No.113, First Floor,<br />Wegmans Prinston Plaza,<br />Plot
No.CSC, Block-H,<br />Sector-18, Rohini,<br />North West
Delhi-110089
            </p>

            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-300 text-center text-xs py-3">
        © 2026 Sahara Ortho. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/30 rounded-lg bg-primary text-white">
      <button
        onClick={() => setOpen(!open)}
        className="bg-white w-full flex justify-between items-center px-4 py-3 text-sm font-medium text-gray-800"
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        
        <div className="px-4 pb-4 text-sm space-y-2 text-white"
           onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      )}
    </div>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="font-semibold text-lg mb-4 border-b border-red-200 pb-2">
        {title}
      </h4>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ text, to }) {
  return (
    <li>
     <Link
      to={to}
    className="hover:text-white hover:translate-x-1 transition cursor-pointer text-white">
      {text}
     
       </Link>
       </li>
  );
}

function SocialIcon({ Icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition"
    >
      <Icon size={16} />
    </a>
  );
}



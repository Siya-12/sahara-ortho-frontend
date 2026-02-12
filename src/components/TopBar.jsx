export default function TopBar() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-900 to-blue-400 text-white text-sm fixed top-0 left-0 w-full z-50">
      <div className="w-full px-6 lg:px-10 py-2">

        {/* ================= DESKTOP / TABLET (UNCHANGED) ================= */}
        <div className="hidden md:flex md:items-center md:justify-between gap-2">
          
          {/* Left: Email & Phone */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center sm:items-start">
            <a
              href="mailto:saharaortho68@gmail.com"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition"
            >
              <i className="bi bi-envelope-fill text-white"></i>
              <span>saharaortho68@gmail.com</span>
            </a>

            <a
              href="tel:+918700281458"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition"
            >
              <i className="bi bi-telephone-fill text-white"></i>
              <span>+91 8700281458</span>
            </a>
          </div>

          {/* Right: Social Icons */}
          <div className="flex justify-end gap-4 text-lg">
            <a href="https://wa.me/918700281458" target="_blank" className="hover:opacity-80 transition">
              <i className="text-white bi bi-whatsapp"></i>
            </a>
            <a href="https://in.linkedin.com/in/sahara-ortho-65a6a9266" target="_blank" className="hover:opacity-80 transition">
              <i className="text-white bi bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/sahara_ortho" target="_blank" className="hover:opacity-80 transition">
              <i className="text-white bi bi-instagram"></i>
            </a>
            <a href="https://www.facebook.com/share/1AWdeaWFAX/" target="_blank" className="hover:opacity-80 transition">
              <i className="text-white bi bi-facebook"></i>
            </a>
          </div>
        </div>

        {/* ================= MOBILE ONLY (2 LINES) ================= */}
        <div className="md:hidden space-y-1">

          {/* Line 1: Email (centered) */}
          <div className="flex justify-center">
            <a
              href="mailto:saharaortho68@gmail.com"
              className="flex items-center gap-2 text-white"
            >
              <i className="bi bi-envelope-fill"></i>
              <span>saharaortho68@gmail.com</span>
            </a>
          </div>

          {/* Line 2: Phone left | Icons right */}
          <div className="flex items-center justify-between">
            <a
              href="tel:+918700281458"
              className="flex items-center gap-2 text-white"
            >
              <i className="bi bi-telephone-fill"></i>
              <span>+91 8700281458</span>
            </a>

            <div className="flex gap-3 text-lg">
              <a href="https://wa.me/918700281458" target="_blank" className="hover:opacity-80 transition">
                <i className="text-white bi bi-whatsapp"></i>
              </a>
              <a href="https://in.linkedin.com/in/sahara-ortho-65a6a9266" target="_blank" className="hover:opacity-80 transition">
                <i className="text-white bi bi-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/sahara_ortho" target="_blank" className="hover:opacity-80 transition">
                <i className="text-white bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com/share/1AWdeaWFAX/" target="_blank" className="hover:opacity-80 transition">
                <i className="text-white bi bi-facebook"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

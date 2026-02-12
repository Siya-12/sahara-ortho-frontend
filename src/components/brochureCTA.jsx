export default function BrochureCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-teal-600 via-blue-600 to-teal-500

">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Text */}
        <p className="text-white text-lg md:text-xl font-medium text-center md:text-left">
          For more information, Download our Brochure
        </p>

        {/* Button */}
        <a
  href="../src/assets/brochure.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-black hover:text-white"
>
  View Brochure
</a>

      </div>
    </section>
  );
}

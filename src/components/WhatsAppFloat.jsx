export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918700281458"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        flex items-center justify-center
        rounded-full
        bg-[#25D366]
        shadow-[0_8px_20px_rgba(0,0,0,0.25)]
        transition
        hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)]
      "
    >
      <i className="bi bi-whatsapp text-2xl text-white"></i>
    </a>
  );
}

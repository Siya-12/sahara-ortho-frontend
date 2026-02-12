import { useEffect } from "react";

export default function BusinessEnquiryModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      
      {/* Modal Box */}
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg relative">

        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Business Enquiry
          </h2>
          <button
            onClick={onClose}
            className="bg-white text-gray-500 hover:text-red-600 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form
          action="https://formspree.io/f/mnjqlkrr"
          method="POST"
          className="px-6 py-6 space-y-4"
        >
          {/* Company */}
          <input
            type="text"
            name="company"
            placeholder="Company / Organization Name *"
            required
            className="bg-white text-black w-full border rounded px-4 py-2"
          />

          {/* Contact Person */}
          <input
            type="text"
            name="contact_person"
            placeholder="Contact Person Name *"
            required
            className="bg-white text-black w-full border rounded px-4 py-2"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            className="bg-white text-black w-full border rounded px-4 py-2"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
            className="bg-white text-black w-full border rounded px-4 py-2"
          />

          {/* City / Country */}
          <input
            type="text"
            name="location"
            placeholder="City / Country *"
            required
            className="bg-white text-black w-full border rounded px-4 py-2"
          />

          {/* Enquiry Type */}
          <select
            name="enquiry_type"
            required
            className="bg-white text-black w-full border rounded px-4 py-2"
          >
            <option value="">Select Enquiry Type *</option>
            <option>Dealership / Distribution</option>
            <option>Bulk Purchase</option>
            <option>Hospital / Clinic Supply</option>
            <option>Export Enquiry</option>
            <option>Product Catalogue</option>
            <option>Other Business Enquiry</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Message / Requirement *"
            required
            className="bg-white text-black w-full border rounded px-4 py-2"
          ></textarea>

          {/* Hidden tag */}
          <input type="hidden" name="source" value="Business Enquiry Popup" />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

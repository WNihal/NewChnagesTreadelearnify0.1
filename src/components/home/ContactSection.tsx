import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Phone,
  MapPin,
  Mail,
  MessageCircle,
  Send,
  XCircle,
  Loader2,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    city: "",
    message: "",
  });

  const [popup, setPopup] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaValue) {
      setPopup({
        show: true,
        message: "Please complete the reCAPTCHA verification.",
        type: "error",
      });
      return;
    }

    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxQDVqfClKnIObFXMA92fOO-UQzOnu1zs3B9eTgbrLc1uFRS-MBPDv-26uLD_7V5T6_/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            recaptcha: recaptchaValue,
            timestamp: new Date().toISOString(),
            source: "Contact Form - Home Page",
          }),
        }
      );

      setPopup({
        show: true,
        message:
          "Your message has been received. Our team will contact you soon.",
        type: "success",
      });

      setFormData({ name: "", number: "", city: "", message: "" });
      setRecaptchaValue(null);
      // Reset reCAPTCHA
      const recaptchaElement = document.querySelector(".g-recaptcha");
      if (recaptchaElement) {
        window.grecaptcha?.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setPopup({
        show: true,
        message: "There was an error submitting your form. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Started Today
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your financial future? Contact us for more
            details
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                For More Details Call Us
              </h3>
              <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6 mb-8">
                <div className="flex items-center space-x-4">
                  <Phone className="text-green-600" size={32} />
                  <div>
                    <p className="text-2xl font-bold text-green-600">
                      +91 9373228941
                    </p>
                    <p className="text-gray-600">Primary Contact</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gray-900">
                Contact Details
              </h4>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div>
                  <h5 className="text-gray-900 font-semibold mb-2">Address</h5>
                  <p className="text-gray-700 leading-relaxed">
                    M-2 Shreyash Apartment, Aath Rasta Square,
                    <br />
                    Laxmi Nagar, Nagpur 440022
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <Mail className="text-green-600" size={24} />
                </div>
                <div>
                  <h5 className="text-gray-900 font-semibold mb-2">Email</h5>
                  <a
                    href="mailto:thetradelearnify@gmail.com"
                    className="text-gray-700 hover:text-green-600 transition-colors duration-300"
                  >
                    thetradelearnify@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h5 className="text-gray-900 font-semibold mb-2">
                    Contact Numbers
                  </h5>
                  <div className="space-y-1">
                    <p className="text-gray-700">+91 9373228941</p>
                    <p className="text-gray-700">+91 7972299513</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="pt-6">
              <a
                href="https://wa.me/919373228941"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-600/25 transform hover:scale-105"
              >
                <MessageCircle size={24} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send Us Your Details
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-900 font-semibold mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="number"
                  className="block text-gray-900 font-semibold mb-2"
                >
                  Number *
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-gray-900 font-semibold mb-2"
                >
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-900 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your trading goals (optional)"
                />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey="6Lf2dNkrAAAAAIriAJajDmTuW7hHOTOirIiBnALO"
                  onChange={handleRecaptchaChange}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 text-white hover:shadow-green-600/25 transform hover:scale-105"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Section */}
        {/* <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Here
              </span>
            </h3>
            <p className="text-lg text-gray-600">
              Visit our academy in Nagpur for offline classes and consultations
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-lg">
            <div className="w-full h-96 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0234567890123!2d79.0123456789!3d21.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzI0LjQiTiA3OcKwMDAnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Trade Learnify Academy Location"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-700 font-medium">
                M-2 Shreyash Apartment, Aath Rasta Square, Laxmi Nagar, Nagpur 440022
              </p>
            </div>
          </div>
        </div> */}
      </div>

      {/* Popup Modal */}
      {popup.show && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div
            className={`bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg text-center border ${
              popup.type === "success" ? "border-green-300" : "border-red-300"
            }`}
          >
            <div className="flex justify-center mb-4">
              {popup.type === "success" ? (
                <Send className="text-green-600" size={40} />
              ) : (
                <XCircle className="text-red-600" size={40} />
              )}
            </div>
            <h3
              className={`text-lg font-semibold mb-2 ${
                popup.type === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
              {popup.message}
            </h3>
            <button
              onClick={() => setPopup({ ...popup, show: false })}
              className="mt-4 px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;

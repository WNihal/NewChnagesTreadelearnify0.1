import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Resources", path: "/resources" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const courses = [
    "Professional Trader Development Program (PTDP)",
    "Online Trading Mastery Program",
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/19p8keJthv/?mibextid=wwXIfr",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/thetradelearnify?igsh=NG9yZmV4bWd2NTd0&utm_source=qr",
      label: "Instagram",
    },
    { icon: Twitter, href: "https://x.com/tradelearnify", label: "Twitter" },
    {
      icon: Youtube,
      href: " https://www.youtube.com/@TheTradeLearnify",
      label: "Youtube",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/Logo_a_page-0001-removebg-preview.png"
                  alt="Logo"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="text-gray-900">
                  <div className="text-lg font-bold">
                    The Trade Learnify Academy
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Empowering individuals to achieve financial freedom through
                comprehensive trading education, proven strategies, and
                personalized mentorship.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <IconComponent
                        className="text-gray-600 group-hover:text-white"
                        size={18}
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Courses */}
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-6">Our Courses</h3>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <li
                    key={index}
                    className="text-gray-600 text-sm leading-relaxed"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-6">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin
                    className="text-green-600 flex-shrink-0 mt-1"
                    size={18}
                  />
                  <div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Shreyash Apartment, Opposite of HDFC Bank,
                      <br />
                      Aath Rasta Square, Laxmi Nagar,
                      <br />
                      Nagpur - 440022, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="text-green-600 flex-shrink-0" size={18} />
                  <div className="space-y-1">
                    <a
                      href="tel:+919373228941"
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm block"
                    >
                      +91 9373228941
                    </a>
                    <a
                      href="tel:+917972299513"
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm block"
                    >
                      +91 7972299513
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="text-green-600 flex-shrink-0" size={18} />
                  <a
                    href="mailto:thetradelearnify@gmail.com"
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm"
                  >
                    thetradelearnify@gmail.com
                  </a>
                </div>

                {/* WhatsApp Button */}
                <div className="pt-4">
                  <a
                    href="https://wa.me/919373228941"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              <p className="text-gray-500 text-xs">
                © {currentYear} Website designed and managed by{" "}
                <a
                  href="https://webtekdi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700"
                >
                  webtekdi.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
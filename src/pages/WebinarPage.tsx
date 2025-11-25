import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Calendar,
  Clock,
  Globe,
  MapPin,
  Users,
  CheckCircle,
  AlertCircle,
  Send,
  XCircle,
  Loader2,
  TrendingUp,
  BookOpen,
  Target,
  Award,
} from "lucide-react";
import { supabase } from "../lib/supabase";

const WebinarPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [formData, setFormData] = useState({
    name: "",
    whatsapp_number: "",
    email: "",
    city: "",
    market_experience: "",
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

  // Countdown Timer - Set your webinar date here
  useEffect(() => {
    const webinarDate = new Date("2025-12-31T18:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = webinarDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
      // Store registration in database
      const { data, error } = await supabase
        .from("webinar_registrations")
        .insert([
          {
            name: formData.name,
            whatsapp_number: formData.whatsapp_number,
            email: formData.email,
            city: formData.city,
            market_experience: formData.market_experience,
            payment_status: "pending",
          },
        ])
        .select()
        .single();

      if (error) throw error;

      // Redirect to Razorpay payment
      // <!-- PASTE YOUR RAZORPAY PAYMENT LINK HERE -->
      // Replace the URL below with your actual Razorpay payment link
      const razorpayUrl = "https://razorpay.me/@yourbusinessname";

      // Store registration ID in localStorage for payment verification
      localStorage.setItem("webinar_registration_id", data.id);

      // Redirect to payment
      window.location.href = razorpayUrl;
    } catch (error) {
      console.error("Error submitting form:", error);
      setPopup({
        show: true,
        message: "There was an error processing your registration. Please try again.",
        type: "error",
      });
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Crypto Trading Mastery",
      description: "Learn proven cryptocurrency trading strategies and risk management techniques",
    },
    {
      icon: Globe,
      title: "Forex Market Insights",
      description: "Understand global currency markets and develop winning forex strategies",
    },
    {
      icon: BookOpen,
      title: "Commodity Trading",
      description: "Master gold, silver, crude oil and agricultural commodity trading",
    },
    {
      icon: Target,
      title: "Live Trading Sessions",
      description: "Watch real-time market analysis and trading execution",
    },
    {
      icon: Award,
      title: "Q&A with Experts",
      description: "Get your trading questions answered by industry professionals",
    },
    {
      icon: CheckCircle,
      title: "Trading Resources",
      description: "Receive exclusive study materials and trading tools",
    },
  ];

  const attendees = [
    "Young Professionals looking to build additional income",
    "Salaried Individuals wanting financial independence",
    "College Students eager to learn market skills",
    "Homemakers seeking flexible earning opportunities",
    "Anyone looking for a career in the stock market",
    "Business Owners wanting to diversify investments",
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Live Educational Workshop
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Learn Crypto, Forex & Commodities
            </h2>
            <p className="text-2xl md:text-3xl text-green-100 mb-12">
              From Data to Financial Freedom
            </p>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Calendar className="mx-auto mb-3" size={32} />
                <p className="text-sm opacity-90">Date</p>
                <p className="font-bold text-lg">TBA</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Clock className="mx-auto mb-3" size={32} />
                <p className="text-sm opacity-90">Time</p>
                <p className="font-bold text-lg">TBA</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <MapPin className="mx-auto mb-3" size={32} />
                <p className="text-sm opacity-90">Venue</p>
                <p className="font-bold text-lg">Live on Zoom</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Globe className="mx-auto mb-3" size={32} />
                <p className="text-sm opacity-90">Language</p>
                <p className="font-bold text-lg">Hindi</p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-6">Webinar Starts In</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-4xl font-bold">{timeLeft.days}</div>
                  <div className="text-sm mt-2">Days</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-4xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm mt-2">Hours</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-4xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm mt-2">Minutes</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-4xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm mt-2">Seconds</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#register"
              className="inline-block bg-white text-green-600 px-12 py-5 rounded-xl font-bold text-2xl transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105"
            >
              Reserve My Seat – ₹149
            </a>
          </div>
        </div>
      </section>

      {/* What You Will Get */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What You Will Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                This Webinar
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Can Attend */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who Can{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Attend?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {attendees.map((attendee, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-4"
              >
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700 font-medium">{attendee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-6 text-center mb-12 shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <AlertCircle size={32} />
              <p className="text-2xl font-bold">
                Almost Full — Only 2 Seats Left!
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                Register Now
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Fill in your details to secure your seat
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-900 font-semibold mb-2"
                  >
                    Full Name *
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
                    htmlFor="whatsapp_number"
                    className="block text-gray-900 font-semibold mb-2"
                  >
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp_number"
                    name="whatsapp_number"
                    value={formData.whatsapp_number}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none transition-colors duration-300"
                    placeholder="10-digit mobile number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-900 font-semibold mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
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
                    htmlFor="market_experience"
                    className="block text-gray-900 font-semibold mb-2"
                  >
                    Market Experience *
                  </label>
                  <select
                    id="market_experience"
                    name="market_experience"
                    value={formData.market_experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner - No Experience</option>
                    <option value="intermediate">Intermediate - Some Knowledge</option>
                    <option value="advanced">Advanced - Active Trader</option>
                  </select>
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
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Pay ₹149 & Reserve My Seat</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Know the Institute */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Know the Institute –{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                The Trade Learnify Academy
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Trade Learnify, we empower individuals to achieve financial freedom through knowledge, discipline, and data-driven strategies. Our mission is to simplify the world of trading and make it accessible for anyone who is ready to step forward and take control of their financial future.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We offer a 6-month comprehensive offline program in Nagpur and a 6-month online course available across India, designed to provide in-depth learning, real-time practice, and one-on-one support to every student.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Unlike the common belief that trading is risky and "not for everyone," we break this myth by teaching practical strategies, tested systems, and market discipline that can create consistent results.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
                <p className="text-lg text-gray-800 font-medium">
                  Join 2500+ successful students who have transformed their trading journey with us.
                </p>
              </div>
            </div>

            {/* Image Collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/gallery/1.jpg"
                  alt="Academy Learning"
                  className="w-full h-48 object-cover rounded-xl shadow-md"
                />
                <img
                  src="/gallery/3.jpg"
                  alt="Student Success"
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/gallery/2.jpg"
                  alt="Trading Education"
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
                <img
                  src="/gallery/4.jpg"
                  alt="Professional Training"
                  className="w-full h-48 object-cover rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Important Disclaimer
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Trading in financial markets, including stocks, forex, commodities, and cryptocurrencies, involves substantial risk and may not be suitable for all investors. Past performance is not indicative of future results.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The information provided in this webinar is for educational purposes only and should not be considered as financial advice. Participants should conduct their own research and consult with qualified financial advisors before making any investment decisions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Trade Learnify Academy does not guarantee any specific results or profits. All trading decisions are the sole responsibility of the individual trader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us for this exclusive webinar and take the first step towards financial freedom
          </p>
          <a
            href="#register"
            className="inline-block bg-white text-green-600 px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105"
          >
            Reserve My Seat Now – ₹149
          </a>
        </div>
      </section>

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
    </div>
  );
};

export default WebinarPage;

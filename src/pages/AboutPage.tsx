import React from "react";
import { Award, Target, Eye } from "lucide-react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Abhitesh Singh",
      role: "Educational Program Head",
      expertise: "Curriculum Development & Student Mentoring",
      position: "Business Partner",
      image: "/mentor/Abhitesh Singh.jpg",
    },
    {
      name: "Mayank Chinchalkar",
      role: "Lead Trading Strategist",
      expertise: "Technical Analysis & Risk Management",
      position: "Business Partner",
      image: "/mentor/Mayank Chinchalkar.jpg",
    },
    {
      name: "Vinay Pohankar",
      role: "Market Research Director",
      expertise: "Fundamental Analysis & Market Psychology",
      position: "Business Partner",
      image: "/mentor/Vinay Pohankar.jpg",
    },
  ];

  const achievements = [
    "Trained more than 2500 aspiring traders across India",
    "6-Month structured programs (online & offline) with a proven success framework",
    "Developed data-driven & backtested trading strategies with higher win rates",
    "Built a strong trading community where students grow together and support each other",
    "One-on-one mentorship provided to 2000+ learners for personalized trading guidance",
    "Delivered 100+ interactive workshops & webinars on trading psychology, risk management, and strategy building",
    "Helped beginners become consistent traders with simplified, step-by-step learning",
    "Designed personalized trading plans through individual viva sessions",
    "Recognized as one of Nagpur's trusted stock market academies",
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                The Trade Learnify Academy
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transforming trading education through practical knowledge and
              proven strategies
            </p>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Us
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                At Trade Learnify, we empower individuals to achieve financial
                freedom through knowledge, discipline, and data-driven
                strategies. Our mission is to simplify the world of trading and
                make it accessible for anyone who is ready to step forward and
                take control of their financial future.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                We offer a 6-month comprehensive offline program in Nagpur and a
                6-month online course available across India, designed to
                provide in-depth learning, real-time practice, and one-on-one
                support to every student.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Unlike the common belief that trading is risky and "not for
                everyone," we break this myth by teaching practical strategies,
                tested systems, and market discipline that can create consistent
                results.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6 mb-8">
                <p className="text-lg text-gray-800 font-medium italic">
                  "At The Trade Learnify Academy, we believe trading is not just
                  about buying and selling—it's about building confidence,
                  creating opportunities, and achieving the financial
                  independence you deserve."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Vision
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Driving financial freedom with proven trading strategies and a
              strong vision for growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="relative group">
              <div className="backdrop-blur-xl bg-white/80 border border-green-200 shadow-xl rounded-3xl p-10 transition-transform transform group-hover:-translate-y-3 group-hover:shadow-2xl">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-600 to-green-500 shadow-lg mx-auto -mt-14 mb-8">
                  <Target className="text-white" size={36} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  Our Mission 🎯
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed text-center font-medium">
                  Our Goal is to help{" "}
                  <span className="text-green-600 font-bold inline-block mr-2">
                    10,000+
                  </span>
                  People Achieve Financial Freedom in a simple and Honest way.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative group">
              <div className="backdrop-blur-xl bg-white/80 border border-blue-200 shadow-xl rounded-3xl p-10 transition-transform transform group-hover:-translate-y-3 group-hover:shadow-2xl">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg mx-auto -mt-14 mb-8">
                  <Eye className="text-white" size={36} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  Our Vision 📈
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed text-center font-medium">
                  {/* To build India’s most trusted{" "}
                  <span className="text-blue-600 font-bold">
                    trading academy
                  </span> */}
                  To help every student earn profits that showed up in their
                  passbook.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expert{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals behind your trading success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-3"
              >
                <div className="mb-6 flex justify-center">
                  {/* Professional Square Image Fix */}
                  <div className="h-56 w-56 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium">{member.position}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <span>Join Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <Award className="text-green-600" size={24} />
                </div>
                <p className="text-gray-700 leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

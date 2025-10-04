import React from "react";
import { Clock, TrendingUp, Users, BookOpen, Target } from "lucide-react";

const WhyJoinSection = () => {
  const reasons = [
    {
      title: "6 Months of Complete Support",
      description:
        "Get continuous mentorship and guidance throughout your journey, ensuring every doubt is resolved.",
      iconComponent: Clock,
    },
    {
      title: "Higher Win-Rate Trading Setups",
      description:
        "Learn strategies backed by data and testing that give you an edge in the market.",
      iconComponent: TrendingUp,
    },
    {
      title: "Exclusive Traders' Community",
      description:
        "Connect with like-minded learners and mentors in a supportive environment where growth is collective.",
      iconComponent: Users,
    },
    {
      title: "Highly Interactive Notes",
      description:
        "Structured, simplified, and engaging study material designed to make learning easy and effective.",
      iconComponent: BookOpen,
    },
    {
      title: "Personalized Trading Plan via One-on-One Viva",
      description:
        "Instead of generic teaching, we help you build your own trading plan suited to your personality and goals.",
      iconComponent: Target,
    },
    {
      title: "Proven Track Record",
      description:
        "Join 1000+ successful traders who have transformed their financial future with our proven methodologies.",
      iconComponent: Target,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Join Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the unique advantages that set us apart from other trading
            education providers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.iconComponent;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-green-300 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                    <IconComponent
                      className="text-green-600 group-hover:text-green-700"
                      size={24}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-600/25 transform hover:scale-105"
          >
            <span>Enroll Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
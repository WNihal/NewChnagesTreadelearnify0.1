import React from "react";
import { CheckCircle, Users, TrendingUp, Shield, Target } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "6-Month Comprehensive Course",
      description:
        "Step-by-step learning from basics to advanced trading concepts",
    },
    {
      icon: Shield,
      title: "Advanced Risk Management",
      description:
        "Protect and grow your capital with proven risk management techniques",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Strategies",
      description:
        "Trade with confidence using backtested strategies with higher win rates",
    },
    {
      icon: Users,
      title: "One-on-One Support",
      description:
        "Personal mentorship and guidance tailored to your learning pace",
    },
    {
      icon: Target,
      title: "Limited Batch Size",
      description:
        "Quality-focused approach ensuring individual attention for every student",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Choose Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Here's why students across India choose us for their trading
            education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Features - Left Side */}
          <div className="space-y-6 order-2 lg:order-1">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                    <IconComponent className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image - Right Side */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/why choose us.jpeg"
                alt="Professional Trading Education at The Trade Learnify Academy"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-8 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-gray-900 font-bold text-xl mb-3">
                    Proven Success Methods
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Data-driven strategies with higher win rates and
                    comprehensive risk management
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Success Rate */}
            <div className="absolute -top-4 -left-4 bg-green-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs">Success Rate</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-xl border border-green-200 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1:1</div>
                <div className="text-xs">Mentorship</div>
              </div>
            </div>

            {/* Additional floating element */}
            <div className="absolute top-32 -left-6 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-green-200 text-gray-900 px-4 py-2 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">6 Months</div>
                <div className="text-xs">Complete Program</div>
              </div>
            </div>
          </div>
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

export default WhyChooseUsSection;

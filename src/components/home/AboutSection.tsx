import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              The Trade Learnify Academy
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Trade Learnify, we empower individuals to achieve financial
              freedom through knowledge, discipline, and data-driven strategies.
              Our mission is to simplify trading and make it accessible for
              anyone ready to take control of their financial future.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We offer a{" "}
              <span className="text-green-600 font-semibold">
                6-month comprehensive program
              </span>{" "}
              both offline in Nagpur and online across India, providing in-depth
              learning, real-time practice, and personalized one-on-one support.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Unlike the belief that trading is risky and "not for everyone," we
              break this myth by teaching practical strategies, tested systems,
              and market discipline for consistent results.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6 mt-8">
              <p className="text-lg text-gray-800 font-medium italic">
                "Trading is not just about buying and selling—it's about
                building confidence, creating opportunities, and achieving the
                financial independence you deserve."
              </p>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Trading Education at The Trade Learnify Academy"
                className="w-full h-[28rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute top-20 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-gray-900 font-bold text-lg mb-2">
                    Professional Trading Education
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Learn from industry experts with proven track records
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
              <div className="text-center">
                <div className="text-xl font-bold">2500+</div>
                <div className="text-xs">Students</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-xl border border-green-200 shadow-lg">
              <div className="text-center">
                <div className="text-xl font-bold text-green-600">6 Months</div>
                <div className="text-xs">Program</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

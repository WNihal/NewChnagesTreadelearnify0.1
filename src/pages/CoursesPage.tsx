import React, { useState } from 'react';
import { CheckCircle, Clock, MapPin, Users, Wifi, Building } from 'lucide-react';

const CoursesPage = () => {
  const [selectedProgram, setSelectedProgram] = useState<'offline' | 'online'>('offline');

  const modules = [
    {
      title: '📈 Module 1: Foundation of Financial Markets',
      description: 'Introduction to stock market basics, how trading & investing works in India, market participants, brokers, and exchanges, understanding indices (Nifty, Bank Nifty, Sensex), candlestick charts, price action basics, and technical analysis foundation'
    },
    {
      title: '📊 Module 2: Equity Mastery Program',
      description: 'Swing Trading Strategies – capturing medium-term moves, Intraday Trading System – precision entries & exits, Investment Blueprint – building a long-term portfolio, risk-reward ratios and position sizing, trade journaling and performance tracking'
    },
    {
      title: '⚡ Module 3: Futures & Options Masterclass',
      description: 'Understanding futures contracts & margin requirements, Options basics: Calls, Puts, Premiums, Advanced option strategies, Hedging, Options selling, Option buying, Practical F&O trading setups'
    },
    {
      title: '🌍 Module 4: Forex & Global Market Strategies',
      description: 'Introduction to the global currency market, Major currency pairs (EUR/USD, GBP/USD, etc.), Technical & fundamental drivers of forex, Building a forex trading system, Money management in volatile currency pairs'
    },
    {
      title: '🥇 Module 5: Commodity Trading Specialist',
      description: 'Trading in Gold, Silver, Crude Oil, Global macro factors affecting commodity prices, Intraday & positional commodity strategies, Using multi-timeframe analysis for commodities'
    },
    {
      title: '₿ Module 6: Crypto & Digital Assets',
      description: 'Introduction to blockchain & cryptocurrencies, Top coins (BTC, ETH, etc.) and altcoins, Volatility management in crypto, Long-term investing vs short-term trading in crypto, Safe wallet usage & risk management in digital assets'
    },
    {
      title: '🧠 Module 7: Advanced Trading Psychology & Risk Management',
      description: 'The psychology of winning traders, Handling fear, greed & overtrading, Risk per trade, drawdowns & capital protection, Designing your personalized trading plan (via one-on-one viva), Building discipline & consistency'
    },
    {
      title: '🎯 Module 8: Practical Labs & Trader Development',
      description: 'Live market trading sessions, Case studies on successful trades & failures, Data-driven backtesting of strategies, Peer-to-peer discussions in our Trader\'s Community, Mock trading assessments & final certification'
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'One-on-One Mentorship',
      description: 'Personal guidance from industry experts'
    },
    {
      icon: CheckCircle,
      title: 'Data-Driven Strategies',
      description: 'Backtested and proven trading methodologies'
    },
    {
      icon: Building,
      title: 'Interactive Notes',
      description: 'Comprehensive study materials and resources'
    },
    {
      icon: Users,
      title: "Traders' Community",
      description: 'Exclusive network of successful traders'
    },
    {
      icon: Clock,
      title: 'Practical Labs',
      description: 'Hands-on trading experience with live markets'
    },
    {
      icon: CheckCircle,
      title: 'Personalized Trading Plan',
      description: 'Customized strategy based on your risk profile'
    }
  ];

  const keyFeatures = [
    '6 Months Comprehensive Support',
    '24/7 Doubt Solving Sessions',
    'Interactive Study Materials',
    'Small Batch Size (Max 15 students)',
    'Live Market Analysis',
    'Weekly Performance Reviews',
    'Trading Psychology Sessions',
    'Risk Management Framework'
  ];

  const programDetails = {
    offline: {
      duration: '6 Months',
      mode: 'Classroom + Online Hybrid',
      location: 'Nagpur, Maharashtra',
      schedule: 'Weekend Batches Available',
      icon: Building
    },
    online: {
      duration: '6 Months',
      mode: 'Live Online Classes',
      location: 'Pan-India Access',
      schedule: 'Flexible Timing Options',
      icon: Wifi
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Trading{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Mastery Program
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              6-Month Professional Trader Development Program (PTDP) - Your complete transformation journey from beginner to confident trader
            </p>
          </div>

          {/* Program Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-2 border border-gray-200">
              <button
                onClick={() => setSelectedProgram('offline')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedProgram === 'offline'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Offline Program
              </button>
              <button
                onClick={() => setSelectedProgram('online')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedProgram === 'online'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Online Program
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Snapshot – Your Journey to Trading Mastery</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At The Trade Learnify Academy, our 6-Month Professional Trader Development Program (PTDP) is not just a course—it's a complete transformation journey. We take you from beginner to confident trader, covering every major market: Equities, Futures & Options, Forex, Commodities, and Cryptocurrencies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What makes us different is our one-on-one mentorship approach, ensuring personalized guidance, customized trading plans, and continuous support throughout your journey. This isn't about theory alone—it's about live market training, practical strategies, and hands-on mentorship that turn knowledge into real-world results.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 mb-16 border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {selectedProgram === 'offline' ? 'Offline' : 'Online'} Program Overview
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(programDetails[selectedProgram]).map(([key, value]) => {
                if (key === 'icon') return null;
                const IconComponent = programDetails[selectedProgram].icon;
                return (
                  <div key={key} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <IconComponent className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-gray-900 font-semibold mb-2 capitalize">{key}</h3>
                    <p className="text-gray-600">{value as string}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-green-600 font-semibold italic">
                "This program doesn't just teach trading—it builds traders who can succeed in any market condition."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Makes This Program{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Unique?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              📚 Course{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Modules
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              8 comprehensive modules covering every aspect of professional trading
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-8">
              <p className="text-2xl font-bold text-gray-900 mb-4">
                "From beginner to consistent trader—this is your complete path to financial freedom."
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <span>Start Your Journey</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Features
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <CheckCircle className="text-green-600 mx-auto mb-4" size={24} />
                <p className="text-gray-900 font-medium">{feature}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <span>Limited Seats Left - Apply Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
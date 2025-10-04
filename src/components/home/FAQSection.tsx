import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is this course designed for beginners?',
      answer: 'Yes, our course is specifically designed for beginners with no prior trading experience. We start from the very basics and gradually build up to advanced concepts, ensuring everyone can follow along at their own pace.'
    },
    {
      question: 'Do I need laptop or tab from the start?',
      answer: 'While having a laptop or tablet is helpful for practice and accessing online resources, it\'s not mandatory from day one. We provide guidance on the best devices and software to use as you progress through the course.'
    },
    {
      question: 'Who can join the course?',
      answer: 'Anyone above 18 years of age who is serious about learning trading can join. Whether you\'re a student, working professional, homemaker, or business owner, our course is designed to fit different lifestyles and learning paces.'
    },
    {
      question: 'Will I get the certificate?',
      answer: 'Yes, upon successful completion of the 6-month course and passing the final assessment, you will receive a certificate from The Trade Learnify Academy, validating your trading education and skills.'
    },
    {
      question: 'What will I learn in this course?',
      answer: 'You\'ll learn comprehensive trading including technical analysis, fundamental analysis, risk management, trading psychology, various market instruments (equity, F&O, forex, commodities), and develop your personalized trading strategy.'
    },
    {
      question: 'What is meant by backtested strategy?',
      answer: 'A backtested strategy is a trading method that has been tested using historical market data to verify its effectiveness. We only teach strategies that have been proven to work consistently over different market conditions.'
    },
    {
      question: 'Will I get one on one support?',
      answer: 'Absolutely! Every student gets personalized one-on-one mentorship sessions, doubt clearing sessions, and individual guidance to ensure you understand concepts clearly and develop confidence in trading.'
    },
    {
      question: 'How many times can I revise the course?',
      answer: 'Unlimited times in your 6 months course.'
    },
    {
      question: 'Why choose us?',
      answer: 'We offer proven backtested strategies, small batch sizes for personalized attention, comprehensive 6-month support, one-on-one mentorship, and a track record of successful students achieving consistent profits.'
    },
    {
      question: 'How much money do we need at start?',
      answer: 'You can start learning without any trading capital. For live trading practice, we recommend starting with ₹25,000 to ₹50,000, but this is not required during the learning phase. We teach you how to manage capital effectively.'
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our trading education program
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {openQuestion === index ? (
                      <ChevronUp className="text-green-600" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-500 group-hover:text-green-600 transition-colors duration-300" size={24} />
                    )}
                  </div>
                </button>

                {openQuestion === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/faq"
              className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold text-lg transition-colors duration-300"
            >
              <span>View All FAQs</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
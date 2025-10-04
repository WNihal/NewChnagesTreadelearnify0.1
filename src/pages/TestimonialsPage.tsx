import React, { useState } from "react";
import { Star, Play, ExternalLink } from "lucide-react";

const TestimonialsPage = () => {
  const [selectedProgram, setSelectedProgram] = useState<"offline" | "online">(
    "offline"
  );
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const offlineTestimonials = {
    videoTestimonials: [
      {
        id: "wzgAmYuwAy0",
        thumbnail: "https://img.youtube.com/vi/wzgAmYuwAy0/maxresdefault.jpg",
      },
      {
        id: "TuXFL4IUwFM",
        thumbnail: "https://img.youtube.com/vi/TuXFL4IUwFM/maxresdefault.jpg",
      },
      {
        id: "XVXJKW5-dsc",
        thumbnail: "https://img.youtube.com/vi/XVXJKW5-dsc/maxresdefault.jpg",
      },
      {
        id: "M8W-gTm6kz8",
        thumbnail: "https://img.youtube.com/vi/M8W-gTm6kz8/maxresdefault.jpg",
      },
      {
        id: "2KV1NT9H6bs",
        thumbnail: "https://img.youtube.com/vi/2KV1NT9H6bs/maxresdefault.jpg",
      },
    ],
    googleReviews: [
      {
        name: "Arpit Turkar",
        rating: 5,
        review:
          "I had an excellent experience with The Trade Learnify. The teaching style is very practical and easy to understand, even for beginners. They not only explain trading concepts clearly but also focus on backtesting, strategies. The faculty is very supportive and ensures every student understands the concepts in depth, Highly recommended for anyone serious about learning trading in Nagpur",
        date: "1 month ago",
        location: "Nagpur",
      },
      {
        name: "Priyanka Gupta",
        rating: 5,
        review:
          "The atmosphere at Trade Learnify Academy is very supportive and positive, making learning enjoyable. The teachers are excellent and teach practical strategies using backtested data. The flexible class timings make it convenient for everyone. Overall, it’s a great place to learn trading with a friendly and motivating environment. Highly recommended!",
        date: "3 month ago",
        location: "Nagpur",
      },
      {
        name: "Bhavesh Bawankar",
        rating: 5,
        review:
          "I joined here as a complete beginner in stock market but after completing their 6 months course offline now able to trade emotion less ,best institute in Nagpur Faculty is great , they follow feedback based system , faculties are always there to help you guide you",
        date: "3 weeks ago",
        location: "Nagpur",
      },
      {
        name: "Vedang Athale",
        rating: 5,
        review:
          "I recently joined this stock market academy and mera experience bohot hi acha raha. Teaching style yaha ka kaafi clear aur practical hai, even beginners easily samajh sakte hain. Sirf theory nahi, yaha real market applications pe bhi focus kiya jata hai, jo trading mein confidence build karne mein help karta hai. Mentors bohot supportive hain aur har doubt patiently clear karte hain.Honestly, agar aapko stock market professionally aur disciplined way mein seekhna hai toh yeh academy ekdum best hai. Highly recommend!",
        date: "4 weeks ago",
        location: "Nagpur",
      },
      {
        name: "Tirupati D Zadi Zadi Mumbai",
        rating: 5,
        review:
          "Trade Learnify Academy , (Nagpur )teaching method is very unique and Practical oriented, All the Mentors are very dynamic, Results oriented proven Backtesting methodology, Zabardast strategies in IIndian Stock Market and all other markets, Mayank Sir, Vinay Sir, Abhitesh Sir, All are having very nice trading experience, Massive Skills, helping nature, leadership qualities, Kind hearted persons, true human being all the Mentors including Priyanka Ma'am.",
        date: "2 months ago",
        location: "Nagpur",
      },
      {
        name: "Tinku Rangari",
        rating: 5,
        review:
          "Trade Learnify Academy ne meri trading journey ko ek nayi direction di. Har step par confidence aur clarity mili.Inka system bohot organized hai, backtesting ke zariye har strategy ki proof milti hai — risk kam, learning zyada!.Academy ka environment bohot motivating aur supportive hai, jahan har trader apni growth pe focus kar sakta hai.Teaching staff bohot knowledgeable aur patient hain. Har doubt ko asani se solve karte hain.",
        date: "6 weeks ago",
        location: "Nagpur",
      },
    ],
    studentEarnings: [
      {
        name: "Rajesh Kumar",
        experience: "8 months post-course",
        earnings: "₹2.5L per month",
        background: "Software Engineer turned full-time trader",
        story:
          "The offline classroom environment in Nagpur helped me stay focused and disciplined. Direct mentorship made all the difference.",
        program: "Offline Program - Nagpur",
      },
      {
        name: "Priya Sharma",
        experience: "6 months post-course",
        earnings: "₹1.8L per month",
        background: "Homemaker with no prior trading experience",
        story:
          "Face-to-face learning and peer support in offline batches gave me the confidence to start trading successfully.",
        program: "Offline Program - Nagpur",
      },
      {
        name: "Amit Patel",
        experience: "1 year post-course",
        earnings: "₹3.2L per month",
        background: "Business owner expanding investment portfolio",
        story:
          "The structured offline program and immediate doubt resolution helped me master complex trading strategies quickly.",
        program: "Offline Program - Nagpur",
      },
    ],
  };

  const onlineTestimonials = {
    videoTestimonials: [
      {
        id: "XzJqXtkGh0w",
        thumbnail: "https://img.youtube.com/vi/XzJqXtkGh0w/maxresdefault.jpg",
      },
      {
        id: "gqC_AfC3nKo",
        thumbnail: "https://img.youtube.com/vi/gqC_AfC3nKo/maxresdefault.jpg",
      },
      {
        id: "wzgAmYuwAy0",
        thumbnail: "https://img.youtube.com/vi/wzgAmYuwAy0/maxresdefault.jpg",
      },
      {
        id: "TuXFL4IUwFM",
        thumbnail: "https://img.youtube.com/vi/TuXFL4IUwFM/maxresdefault.jpg",
      },
      {
        id: "XVXJKW5-dsc",
        thumbnail: "https://img.youtube.com/vi/XVXJKW5-dsc/maxresdefault.jpg",
      },
    ],
    googleReviews: [
      {
        name: "Anita Desai",
        rating: 5,
        review:
          "The online program is perfectly structured. Live sessions and recorded classes make it very convenient for working professionals.",
        date: "1 week ago",
        location: "Mumbai",
      },
      {
        name: "Karan Malhotra",
        rating: 5,
        review:
          "Excellent online trading course! The interactive sessions and doubt clearing calls are very effective.",
        date: "2 weeks ago",
        location: "Delhi",
      },
      {
        name: "Meera Iyer",
        rating: 5,
        review:
          "Online learning with personal mentorship calls made all the difference. Highly recommended!",
        date: "1 month ago",
        location: "Bangalore",
      },
      {
        name: "Sanjay Gupta",
        rating: 5,
        review:
          "The flexibility of online classes while maintaining quality education is remarkable. Great support system.",
        date: "3 weeks ago",
        location: "Chennai",
      },
      {
        name: "Neha Sharma",
        rating: 5,
        review:
          "Online program's recorded sessions and live doubt clearing made learning very convenient for my schedule.",
        date: "1 month ago",
        location: "Hyderabad",
      },
      {
        name: "Rahul Verma",
        rating: 5,
        review:
          "Perfect balance of live interaction and flexibility. The online program's quality matches classroom teaching with added convenience.",
        date: "5 weeks ago",
        location: "Kolkata",
      },
    ],
    studentEarnings: [
      {
        name: "Arjun Kapoor",
        experience: "7 months post-course",
        earnings: "₹2.2L per month",
        background: "Marketing Manager learning part-time",
        story:
          "The online program's flexibility allowed me to learn while working. Live sessions and personal mentorship calls were game-changers.",
        program: "Online Program - Mumbai",
      },
      {
        name: "Kavya Reddy",
        experience: "5 months post-course",
        earnings: "₹1.6L per month",
        background: "IT Professional seeking additional income",
        story:
          "Online learning with recorded sessions helped me learn at my own pace. The quality of education is outstanding.",
        program: "Online Program - Bangalore",
      },
      {
        name: "Deepak Joshi",
        experience: "10 months post-course",
        earnings: "₹2.8L per month",
        background: "Consultant transitioning to trading",
        story:
          "The online program's comprehensive curriculum and personal mentorship helped me transition successfully to full-time trading.",
        program: "Online Program - Delhi",
      },
    ],
  };

  const currentTestimonials =
    selectedProgram === "offline" ? offlineTestimonials : onlineTestimonials;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Learners Say
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real stories from real students who transformed their financial
              future through our online and offline programs
            </p>
          </div>
        </div>
      </section>

      {/* Program Toggle */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
              <button
                onClick={() => setSelectedProgram("offline")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedProgram === "offline"
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Offline Program
              </button>
              <button
                onClick={() => setSelectedProgram("online")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedProgram === "online"
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Online Program
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {selectedProgram === "offline"
                ? "Offline Program"
                : "Online Program"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Success Stories
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {currentTestimonials.videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-1"
                onClick={() => handleVideoClick(video.id)}
              >
                <div className="relative aspect-[9/16]">
                  <img
                    src={video.thumbnail}
                    alt="YouTube Short"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white ml-1" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Google{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Reviews
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              {selectedProgram === "offline"
                ? "Offline Program - Nagpur"
                : "Online Program - Pan India"}
            </p>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-green-600 fill-current"
                    size={24}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600">
                ({selectedProgram === "offline" ? "87" : "65"} reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.googleReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-gray-900 font-semibold">
                      {review.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-green-600 fill-current"
                        size={16}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{review.review}"
                </p>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?sca_esv=79b3e61bd2633932&sxsrf=AE3TifND6w41kq0GLdVemCGlPFFaweQ-9g:1759317930937&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_jsyuCcg92BLrIVC6rCsexIJRDPAPyGy9-Xtej8DPegEw6I3eXa0pZj88XInKi9STMR8lC646IWy-ypR6Y2SKbRgvWBJ7hPlNgTbcLY6-i4PaEO42C5E1WjlE6-Iav99nxEyEo%3D&q=The+Trade+Learnify+%7C+Stock+Market+Academy+Reviews&sa=X&ved=2ahUKEwjf9seC8oKQAxVQWHADHQsAEG0Q0bkNegQIIBAD&biw=1366&bih=633&dpr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold"
            >
              <span>View All Google Reviews</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Student Earnings Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Student{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Earnings Showcase
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real earnings from{" "}
              {selectedProgram === "offline" ? "offline" : "online"} program
              students - see how our education translates to financial success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentTestimonials.studentEarnings.map((student, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {student.earnings}
                  </div>
                  <div className="text-gray-500 text-sm mb-4">
                    {student.experience}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {student.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {student.background}
                  </p>
                  <p className="text-green-600 text-sm font-semibold">
                    {student.program}
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed italic text-center">
                  "{student.story}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Success Story?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of successful traders who transformed their financial
            future through our {selectedProgram} program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <span>Get Started Today</span>
            </a>
            <a
              href="/courses"
              className="inline-flex items-center space-x-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              <span>
                View {selectedProgram === "offline" ? "Offline" : "Online"}{" "}
                Program
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X size={20} />
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Video Player"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsPage;

import React, { useState } from "react";
import { Star, Play, ExternalLink, ArrowRight, X } from "lucide-react";

const TestimonialsSection = () => {
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
          "The atmosphere at Trade Learnify Academy is very supportive and positive, making learning enjoyable. The teachers are excellent and teach practical strategies using backtested data. The flexible class timings make it convenient for everyone. Overall, it's a great place to learn trading with a friendly and motivating environment. Highly recommended!",
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
    ],
  };

  const currentTestimonials =
    selectedProgram === "offline" ? offlineTestimonials : onlineTestimonials;

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Learners Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real success stories from our students across both online and
            offline programs
          </p>
        </div>

        {/* Program Toggle */}
        <div className="flex justify-center mb-16">
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

        {/* Video Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {selectedProgram === "offline"
              ? "Offline Program"
              : "Online Program"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Success Stories
            </span>
          </h3>
          <div className="grid grid-cols-5 gap-4">
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
                    <div className="w-12 h-12 bg-red-600/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white ml-1" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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

        {/* Google Reviews */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Google Reviews -{" "}
              {selectedProgram === "offline"
                ? "Offline Program"
                : "Online Program"}
            </h3>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-green-500 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <span className="text-xl font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600">
                ({selectedProgram === "offline" ? "150" : "95"} reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentTestimonials.googleReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-gray-900 font-semibold">
                      {review.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{review.location}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-green-500 fill-current"
                        size={14}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                  "{review.review}"
                </p>
                <p className="text-gray-500 text-xs">{review.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/testimonials"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-600/25 transform hover:scale-105"
          >
            <span>View All Testimonials</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
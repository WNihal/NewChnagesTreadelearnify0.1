import React, { useState, useEffect } from "react";
import { Play, ArrowRight, X } from "lucide-react";

const AcademyGallerySection = () => {
  const [selectedType, setSelectedType] = useState<"videos" | "images">(
    "videos"
  );
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const videos = [
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
  ];

  // Load gallery images dynamically
  useEffect(() => {
    const loadGalleryImages = async () => {
      const imageFiles = [];
      // Try to load images 1-20 (adjust range as needed)
      for (let i = 1; i <= 8; i++) {
        try {
          const response = await fetch(`/gallery/${i}.jpg`);
          if (response.ok) {
            imageFiles.push(`/gallery/${i}.jpg`);
          }
        } catch (error) {
          // Image doesn't exist, continue
        }
      }
      setGalleryImages(imageFiles);
    };

    loadGalleryImages();
  }, []);

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setSelectedImage(null);
  };

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Academy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a glimpse into our academy life, learning environment, and
            student success stories
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
            <button
              onClick={() => setSelectedType("videos")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedType === "videos"
                  ? "bg-green-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => setSelectedType("images")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedType === "images"
                  ? "bg-green-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Images
            </button>
          </div>
        </div>

        {/* Content */}
        {selectedType === "videos" ? (
          <div className="grid grid-cols-5 gap-4">
            {videos.map((video, index) => (
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <span>
              View All {selectedType === "videos" ? "Videos" : "Images"}
            </span>
            <ArrowRight size={20} />
          </a>
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-6xl max-h-[95vh] bg-white rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X size={20} />
            </button>
            <div className="flex items-center justify-center min-h-[50vh] max-h-[95vh]">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AcademyGallerySection;

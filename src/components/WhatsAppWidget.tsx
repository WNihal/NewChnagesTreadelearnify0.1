import React, { useState } from 'react';
import { X } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919373228941', '_blank');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center text-xs transition-colors duration-200 z-10 shadow-md"
        >
          <X size={12} />
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 group hover:scale-105"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="w-8 h-8"
          />
          <span className="font-semibold text-sm pr-2">Chat With Us</span>
        </button>

      </div>
    </div>
  );
};

export default WhatsAppWidget;
import { useState } from "react";

interface CameraViewerProps {
  images: string[];
  onClose: () => void;
}

export const CameraViewer: React.FC<CameraViewerProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="">
      <img
        src="/camera.png"
        alt="Camera Frame"
        
      />

      <div className="">
        <img
          src={images[currentIndex]}
          alt="Preview"
          className="w-90 h-65 bottom-[80px] left-[65px] absolute object-cover"
        />
      </div>

      <button
        onClick={handleNext}
        className="absolute bottom-[125px] right-[40px] w-[36px] h-[36px] backdrop-blur-md border border-gray-400 rounded-full flex items-center justify-center hover:bg-white"
      >
        ➤
      </button>

      <button
        onClick={onClose}
        className="absolute top-2 right-2 bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs hover:bg-gray-600"
      >
        ✕
      </button>
    </div>
  );
};

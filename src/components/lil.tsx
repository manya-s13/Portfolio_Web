import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function RetroAboutCard() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="absolute top-20 right-4 z-20 w-60">
      <div className="bg-[#E6E6E3] border-4 border-[#E6E6E3]" >
        
        {/* Header */}
        <div className="bg-gray-300/20 border-b-2 border-gray-200 p-2 flex justify-between items-center">
          <h2 className="text-black font-bold text-lg">LIL' ABOUT ME</h2>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-black hover:bg-gray-400 p-1 border border-gray-600"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="bg-black text-gray-200 p-5 min-h-[150px] relative">
          <div className="text-md leading-relaxed space-y-3">
            <p>
             Manya is a 21 year old exploring the space between design and engineering  
              <span > 🔧</span>crafting her creative playground through design, development, and writing.{' '}
              <span className="underline text-white hover:text-yellow-400 cursor-pointer">
              </span>
            </p>
          </div>

          {/* Bottom right corner text */}
          {/* <div className="absolute bottom-2 right-2 text-gray-400 text-xs">
            <span className="text-blue-400">⚡</span> ABOUT ME
          </div> */}
        </div>

        {/* Bottom border effect */}
        <div className="h-1 bg-black"></div>
      </div>
    </div>
  );
}
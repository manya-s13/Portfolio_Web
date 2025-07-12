import { X } from 'lucide-react';
import { useState } from 'react';
import { CameraViewer } from './Camera';

const carouselData = [
  
  {
    id: 1,
    image: "/book.jpg",
    title: "A GLIMPSE OF MANYA",
    description: "i love reading. mostly i read literary fiction. You will mostly find me curled up with a book"
  },
  {
    id: 2,
    image: "/sub.png",
    title: "A GLIMPSE OF MANYA",
    description: "I write articles and blogs on substack. i love sharing my thoughts about naviagting my 20s, personal growth, and the creative process"
  },
  {
    id: 3,
    image: "/kafka.jpeg",
    title: "A GLIMPSE OF MANYA",
    description: "I love science, technology, art, fashion. I love studying about this stuff."
  },
];

const buttonStyle = `
    bg-[#B8B8B8]
    px-4 py-2
    rounded-sm
    text-xl text-black
    transition-all duration-200
    shadow-[5px_5px_0px_0px_white]
    hover:shadow-none
    hover:translate-y-1
    cursor-pointer
  `;

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openCamera, setOpenCamera] = useState(false);

  const cameraImages = [
    "/mee.JPG",
    "/beach.jpeg",
    "/me.png",
    "/lala.HEIC",
    "/books.jpeg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const currentItem = carouselData[currentIndex];

  return (
    <div id='about' className="h-screen bg-black">
      <div className="pt-10">
        <h1 className="text-[#FFB4AD] text-3xl text-center">Welcome to my little corner on the internet {'<3'}</h1>
        
        <div className="flex items-start justify-between px-10 mt-16">
          <div className="flex-1 pr-8">
            <h1 className="text-white text-2xl"> 
              Manya is a developer and a curious creator <br /> 
              who loves creating digital spaces that feel <br /> 
              intentional and alive. Seeking purpose through <br /> 
              work that makes an impact.
            </h1>
            <div className='flex gap-x-6 py-10 items-center'>
              <img src='/lap.png' width={150} height={70} className='hover:skew-x-12 transition-transform duration-300' />
              <img src='/coffee.png' width={90} height={90} className='hover:skew-x-12 transition-transform duration-300' />
              <button 
                onClick={() => setOpenCamera(true)}
                className="text-6xl p-3 cursor-pointer hover:scale-110"
              >
                <img src='/cam.png' alt='camera' width={90} height={90} />
              </button>
            </div>
            
            {openCamera && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                
                <div 
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                  onClick={() => setOpenCamera(false)}
                ></div>
                
                <div className="relative z-10">
                  <CameraViewer images={cameraImages} onClose={() => setOpenCamera(false)} />
                </div>
              </div>
            )}
          </div>
          
          <div className="flex-1 max-w-xs">
            <div className="border-4 border-[#e6e6e3] bg-[#e6e6e3]">
              <div className="bg-[#e6e6e3] px-4 py-2 flex justify-between items-center border-b border-gray-400">
                <h2 className="text-black text-xl">{currentItem.title}</h2>
                <button className="text-black text-lg font-bold px-2"> <X /> </button>
              </div>
              
              <div className="w-full h-48 bg-white overflow-hidden">
                <img 
                  src={currentItem.image} 
                  alt={currentItem.title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
              
              <div className="bg-black p-4">
                <div className="bg-[#6E6D6D] p-2 mb-4">
                  <p className="text-white text-lg leading-relaxed">{currentItem.description}</p>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <button 
                    onClick={prevSlide}
                    className="cursor-pointer bg-transparent border-2 border-white text-white py-1 px-6 text-lg rounded-xl"
                  >
                    Back
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="cursor-pointer bg-white text-black py-1 px-6  text-lg rounded-xl"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col px-10'>
          <div className="">
           
            <p className='text-white text-xl mb-6'>You can reach out to me at: 
              <a href="mailto:manyasharma137@gmail.com" className='font-bold hover:underline ml-2'>
                manyasharma137@gmail.com
              </a>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://x.com/cinamonn_girll" target='_blank' className={buttonStyle}>
                Twitter
              </a>
              <a href="https://linkedin.com/in/manyas13" target='_blank' className={buttonStyle}>
                LinkedIn
              </a>
              <a href="https://github.com/manya-s13" target='_blank' className={buttonStyle}>
                Github
              </a>
              <a href="https://leetcode.com/u/manya13/" target='_blank' className= {buttonStyle}>
                LeetCode
              </a>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default About;
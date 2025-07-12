import Footer from "./Footer"
import {motion} from "framer-motion"
import RetroAboutCard from "./lil"
import { useState } from "react"
import { X } from "lucide-react"

function Hero() {

  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <div className="bg-[#E45A78] h-screen w-full overflow-hidden">
      <div className="mt-10">
        <div className="flex flex-col items-center justify-center">
          <div className="border text-2xl rounded-4xl px-6 py-2">Developer. Designer. Debugger.</div>
          
          <motion.div 
        drag
        dragConstraints={{
          left: -50,
          right: 900,
          top: -300,
          bottom: 400
        }}
        dragElastic={0.1}
        whileDrag={{ scale: 1.1 }}
        className="hidden md:block bg-black border-3 border-white text-white p-4 text-2xl cursor-move absolute top-32 left-12 z-10"
        style={{ imageRendering: 'pixelated' }}
      >
        <p>Figuring how to <br /> center a div</p>
      </motion.div>


          <img src="/Group-2.svg" alt="Manya" className="pt-10 hover:scale-110" />

          <RetroAboutCard />

          <div className="relative text-4xl text-center mt-8">
            Hi! I am a developer <br /> based in India
            
            <div className="hidden md:flex absolute left-[-400px] top-20y space-x-20">
            <a href="https://manyaa.substack.com" target="_blank" className="cursor-pointer hover:scale-110"><img src="page.png" width={60} height={60} alt="page" /><span className="text-2xl">Substack</span></a>
              <a href="https://drive.google.com/file/d/1EPetQxZsZ1COa8stpq8vsqyxY_OPTwsx/view?usp=sharing" target="_blank" className="cursor-pointer hover:scale-110"><img src="folder.png" width={60} height={60} alt="folder" /> <span className="text-2xl">Resume</span> </a>
            </div>

            <div className="absolute right-[-300px] top-14">
            <div className="cursor-pointer hover:scale-110" onClick={openContactModal}><img src="email.png" width={60} height={60} alt="folder" /> <span className="text-2xl">Contact</span> </div>
            </div>
            
          </div>
        </div>
      </div>

      {isContactModalOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -50 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className="fixed top-70 left-1/2 transform -translate-x-1/2 z-50 w-80 bg-[#e6e6e3] border-2 border-[#e6e6e3] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="bg-gray-300/20 px-2 py-1 flex items-center justify-between border-b border-gray-400">
            <div className="flex items-center space-x-2">
              <span className="text-black text-lg font-bold">SAY HI :)</span>
            </div>
            <div className="flex items-center space-x-1">
             
              <button
                onClick={closeContactModal}
                className="w-4 h-4  items-center justify-center"
              >
                <span className="text-black cursor-pointer text-xs"> <X /> </span>
              </button>
            </div>
          </div>
          
          <div className="p-6 bg-[#f4f4f2]">
            <div className="">
              <h2 className="text-xl font-bold text-gray-800">Let's Connect!</h2>
              <h1>Hey ! This is Manya</h1>
              <p>Connect with me ^ ^ </p>
              <div className="flex space-x-4 underline">
                <a href="https://x.com/cinamonn_girll"target="_blank">Twitter</a>
                <a href="https://linkedin.com/in/manyas13" target="_blank" >LinkedIn</a>
                <a href="https://github.com/manya-s13" target="_blank" >Github</a>
                <a href="https://www.instagram.com/cigszyn/" target="_blank">Instagram</a>
              </div>
            </div>
           
            <div className="mt-6 flex space-x-2">
              <button
                onClick={() => window.open('mailto:manyasharma137@gmail.com', '_blank')}
                className="cursor-pointer flex-1 bg-[#8b8b8b] text-white py-1 px-2 text-lg border border-gray-400 hover:bg-[#E45A78] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                Send Email
              </button>
              <button
                onClick={closeContactModal}
                className="cursor-pointer flex-1 bg-[#8b8b8b] text-white py-2 px-3 text-lg border border-gray-400 hover:bg-[#E45A78] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <Footer />
    </div>
  )
}

export default Hero
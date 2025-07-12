import { X } from "lucide-react";
import { FaReact, FaFigma, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiPrisma, SiPostgresql, SiMongodb, SiAppwrite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiFramer } from "react-icons/fi";
import { IoIosGitMerge } from "react-icons/io";



const Tech = () => {
  const front = [
    { name: "React", icon: <FaReact/> },
    { name: "NextJs", icon: <SiNextdotjs/> },
    {name: "Zustand" , icon: <span className="text-2xl">Z</span>},
    {name: "Tailwind", icon: <RiTailwindCssFill />},
    { name: "Framer Motion", icon: <FiFramer /> }, 
    { name: "Figma", icon: <FaFigma /> },
  ];
  const back = [
    { name: "Nodejs", icon: <FaNodeJs/> },
    { name: "Express", icon: <SiExpress/> },
    { name: "Prisma", icon: <SiPrisma/> },
    { name: "PostgressSQL", icon: <SiPostgresql/> },
    { name: "MongoDB", icon: <SiMongodb/> },
    { name: "Appwrite", icon: <SiAppwrite/> },
  ];
  const cloud = [
    { name: "AWS", icon: <FaAws/> },
    { name: "Docker", icon: <FaDocker/> },
    { name: "CI/CD", icon: <IoIosGitMerge/> },
  ];

  const buttonStyle = `
    bg-[#B8B8B8]
    px-2 py-1
    sm:px-4 sm:py-2
    rounded-sm
    text-sm sm:text-lg lg:text-xl font-semibold text-black
    transition-all duration-200
    shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
    sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
    hover:shadow-none
    hover:translate-y-1
    cursor-pointer
  `;

  return (
    <section id="tech">
    <div className="min-h-screen bg-[#6A9DCF] flex items-center justify-center p-4">
      <div className="bg-[#E6E6E3] border border-black w-full max-w-4xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center bg-[#B8B8B8] border-b border-black px-2 py-2 sm:px-4 sm:py-2">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
            tech stack i work with {"</>"}
          </h1>
          <button className="text-black text-lg sm:text-xl lg:text-2xl px-2">
            <X size={20} className="sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Separator Line */}
        <hr className="bg-black h-[2px]" />

        {/* Content */}
        <div className="px-3 py-4 sm:px-6 sm:py-6">
          <h2 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 font-bold">front-end</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {front.map((tech, index) => (
              <div
                key={index}
                className={buttonStyle}
                
              >
                <span className="flex items-center gap-1 sm:gap-2">{tech.icon} <span className="hidden sm:inline">{tech.name}</span> </span>
              </div>
            ))}
          </div>
        </div>
        <div className="px-3 py-4 sm:px-6 sm:py-6">
          <h2 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 font-bold">back-end</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {back.map((tech, index) => (
              <div
                key={index}
                className={buttonStyle}
                
              >
                <span className="flex items-center gap-1 sm:gap-2">{tech.icon} <span className="hidden sm:inline">{tech.name}</span> </span>
              </div>
            ))}
          </div>
        </div>
        <div className="px-3 py-4 sm:px-6 sm:py-6">
          <h2 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 font-bold">devops</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {cloud.map((tech, index) => (
              <div
                key={index}
                className={buttonStyle}
                
              >
                <span className="flex items-center gap-1 sm:gap-2">{tech.icon} <span className="hidden sm:inline">{tech.name}</span> </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Tech;

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
    px-4 py-2
    rounded-sm
    text-xl font-semibold text-black
    transition-all duration-200
    shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
    hover:shadow-none
    hover:translate-y-1
    cursor-pointer
  `;

  return (
    <section id="tech">
    <div className="h-screen bg-[#6A9DCF] flex items-center justify-center">
      <div className="bg-[#E6E6E3] border border-black w-full max-w-4xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center bg-[#B8B8B8] border-b border-black px-4 py-2">
          <h1 className="text-2xl font-bold">
            tech stack i work with {"</>"}
          </h1>
          <button className="text-black text-xl px-2">
            <X size={24} />
          </button>
        </div>

        {/* Separator Line */}
        <hr className="bg-black h-[2px]" />

        {/* Content */}
        <div className="px-6 py-6">
          <h2 className="text-2xl mb-4 font-bold">front-end</h2>
          <div className="flex gap-4">
            {front.map((tech, index) => (
              <div
                key={index}
                className={buttonStyle}
                
              >
                <span className="flex items-center gap-2">{tech.icon} {tech.name} </span>
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 py-6">
          <h2 className="text-2xl mb-4 font-bold">back-end</h2>
          <div className="flex gap-4">
            {back.map((tech, index) => (
              <div
                key={index}
                className={buttonStyle}
                
              >
                <span className="flex items-center gap-2">{tech.icon} {tech.name} </span>
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 py-6">
          <h2 className="text-2xl mb-4 font-bold">devops</h2>
          <div className="flex gap-4">
            {cloud.map((tech, index) => (
              <div
                key={index}
                className={buttonStyle}
                
              >
                <span className="flex items-center gap-2">{tech.icon} {tech.name} </span>
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

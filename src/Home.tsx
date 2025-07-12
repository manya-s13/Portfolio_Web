import {motion, useScroll, useTransform} from 'framer-motion';
import {  useRef } from 'react';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Tech from './components/Tech';
import About from './components/About';

function Home() {

    const containerRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const projects = useTransform(scrollYProgress, [0, 0.25], ["100%", "0%"]);
    const tech = useTransform(scrollYProgress, [0.25, 0.5], ["100%", "0%"]);
    const about = useTransform(scrollYProgress, [0.5, 0.75], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
        <div id='hero' className='fixed h-screen w-full'>
            <Hero />
        </div>
        <motion.div 
        style={{y: projects}}
        id='projects'
        className='fixed h-screen w-full z-10' >
            <Projects />
        </motion.div>
        <motion.div 
        id='tech'
        style={{y: tech}}
        className='fixed h-screen w-full z-20' >
            <Tech />
        </motion.div>
        <motion.div 
        id='about'
        style={{y: about}}
        className='fixed h-screen w-full z-30' >
            <About />
        </motion.div>
    </div>
  )
}

export default Home
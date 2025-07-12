"use client";

import { Card, Carousel } from "./ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-2">
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Real-Time Collaborative Canvas",
    title: "VibeCollab",
    src: "/p1.png",
    github: "https://github.com/manya-s13/vibeCollab.git",
    techStack: ["React", "Node.js", "TypeScript", "Sockets.io", "Prisma", "PostgreSQL"],
  },
  {
    category: "AI Powered Resume Scanner",
    title: "Scan CV",
    src: "/p2.png",
    github: "https://github.com/manya-s13/scanCV.git",
    live: "https://scan-cv.vercel.app",
    techStack: ["React", "Node.js", "Gemini API", "TypeScript", "Tailwind CSS", "Framer-Motion"],
  },
  {
    category: "File Storing Application",
    title: "CloudDocs",
    src: "/p3.png",
    github: "https://github.com/manya-s13/cloudDocs.git",
    techStack: ["Next.js", "Appwrite", "TypeScript", "Tailwind", "Shadcn"],
  },

  {
    category: "Real Time chatting application",
    title: "Chat Application",
    src: "/p5.png",
    github: "https://github.com/manya-s13/ChatApp.git",
    techStack: ["React", "NodeJs", "MongoDB", "Sockets.io", "Tailwind"],
  },
  {
    category: "Blogging plaform to write and read articles and blogs",
    title: "Blogify",
    src: "/p6.png",
    github: "https://github.com/manya-s13/blogify.git",
    techStack: ["React", "NodeJs", "MongoDB", "Stripe API", "Tailwind"],
    
  },
  {
    category: "Saas Landing Page",
    title: "Drift UI",
    src: "/p4.png",
    github: "https://github.com/manya-s13/DriftUI.git",
    live: "https://drift-ui-nine.vercel.app",
    techStack: ["React", "JavaScript", "Tailwind", "Framer-Motion"],
    
  },
  {
    category: "Saas Landing Page",
    title: "LanX",
    src: "/p7.png",
    github: "https://github.com/manya-s13/LanX.git",
    techStack: ["React", "TypeScript", "Tailwind", "Framer-Motion"],
    
  }
];

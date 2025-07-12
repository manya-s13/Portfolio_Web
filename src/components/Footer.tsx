function Footer() {

  const scrollToSection = (sectionId: string): void => {
    // Container is 500vh, so total scrollable distance is 400vh (500vh - 100vh viewport)
    const totalScrollDistance = window.innerHeight * 4; // 400vh in pixels
    
    let scrollPosition = 0;
    
    switch (sectionId) {
      case 'projects':
        scrollPosition = totalScrollDistance * 0.312; // 50vh - middle of projects range
        break;
      case 'tech':
        scrollPosition = totalScrollDistance * 0.62; // 150vh - middle of tech range
        break;
      case 'about':
        scrollPosition = totalScrollDistance * 0.94; // 250vh - middle of about range
        break;
      default:
        scrollPosition = 0;
    }

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };


  return (
    <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between rounded-full border border-white bg-black p-2 text-white shadow-lg">
          <div className="flex flex-row items-center justify-between space-x-5">
            <a onClick={()=> scrollToSection('projects')}>
            <h1 className="rounded-full border text-2xl py-1 px-6 hover:bg-[#e6e6e3] hover:text-black transition-colors cursor-pointer">
              PROJECTS
            </h1>
            </a>
            <a onClick={()=> scrollToSection('tech')}>
            <h1 className="rounded-full border text-2xl py-1 px-6 hover:bg-[#e6e6e3] hover:text-black transition-colors cursor-pointer">
              TECH
            </h1>
            </a>
            <a onClick={()=> scrollToSection('about')}>
            <h1 className="rounded-full border text-2xl py-1 px-6 hover:bg-[#e6e6e3] hover:text-black transition-colors cursor-pointer">
              ABOUT
            </h1>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
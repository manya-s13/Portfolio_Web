import  { useRef, useState } from "react";

const CustomMusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`w-20 h-20 rounded-full bg-cover bg-center shadow-md transition-transform duration-500 ${
          playing ? "animate-spin 10s linear infinite" : ""
        }`}
        style={{ backgroundImage: "url('/vinyl.png')" }} 
        onClick={togglePlay}
      ></div>
      
      <audio ref={audioRef} src="/song.mp3" />
    </div>
  );
};

export default CustomMusicPlayer;

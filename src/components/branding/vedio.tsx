
"use client";

interface VideoSectionProps {
  src: string; 
  poster?: string; 
}

const VideoSection: React.FC<VideoSectionProps> = ({ src, poster }) => {
  return (
    <section className="w-full py-12 flex justify-center items-center">
      <div className="w-[100%] max-w-[2300px]  overflow-hidden ">
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default VideoSection;


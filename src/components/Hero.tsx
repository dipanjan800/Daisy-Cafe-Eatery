import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 lg:py-20">
      <div className="w-full grid md:grid-cols-2 items-center gap-12 lg:gap-16 my-auto">

        {/* Left Content */}
        <div className="space-y-8">

          <div className="flex items-center gap-3 text-[#d4a373] uppercase tracking-[0.35em] text-sm">
            <span className="text-lg">✦</span>
            <span>Premium Coffee</span>
          </div>

          <h1 className="font-serif text-[42px] sm:text-[56px] md:text-[64px] lg:text-[80px] xl:text-[96px] leading-[1.1] md:leading-[1] lg:leading-[0.92] text-white">
            Unlock a
            <br />
            <span className="text-[#d4a373]">
              Superior Taste
            </span>
            <br />
            in Every Sip!
          </h1>

          <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 text-gray-300">
            Coffee is more than just a drink—it's an experience. Every cup is
            carefully crafted to deliver rich aromas, exceptional flavor, and
            unforgettable moments.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">

            <button className="group inline-flex items-center gap-3 rounded-full bg-[#d4a373] px-7 py-3.5 font-semibold text-[#110d0a] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(212,163,115,0.35)]">
              <span>Explore Our Coffee</span>

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-full border border-[#d4a373]/30 px-7 py-3.5 text-white transition-all duration-300 hover:border-[#d4a373] hover:bg-[#d4a373]/10">
              View Menu
            </button>

          </div>

        </div>

        {/* Right Content */}
        <div className="relative w-full">

          <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[650px] xl:h-[720px] overflow-hidden rounded-[32px] border border-[#d4a373]/10 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.45)]">

            {/* Hero Video */}
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="auto"
            >
              <source
                src="/videos/new-hero-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#110d0a]/80 via-transparent to-transparent pointer-events-none" />

            {/* Mute Toggle Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 z-20 p-3 rounded-full bg-black/40 text-white hover:bg-black/80 transition-colors border border-white/20 backdrop-blur-md flex items-center justify-center"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
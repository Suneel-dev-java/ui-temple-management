import { useState, useEffect, useRef } from "react";

export default function ChantPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasBeenPaused, setHasBeenPaused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef(null);

  // Audio URL: Served locally from public/om_namah_shivaya.mp3 for instant loading
  const audioUrl = "/om_namah_shivaya.mp3";

  // First interaction auto-play
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying && !hasBeenPaused) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            // Hide tooltip after 4 seconds of playing
            setTimeout(() => setShowTooltip(false), 4000);
          })
          .catch((err) => {
            console.log("Autoplay blocked on load, waiting for user click:", err);
          });
      }
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);
    document.addEventListener("scroll", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
    };
  }, [isPlaying, hasBeenPaused]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setHasBeenPaused(true);
      setShowTooltip(true);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setTimeout(() => setShowTooltip(false), 3000);
        })
        .catch((err) => {
          console.error("Playback failed:", err);
        });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
      {/* Devotional Chant Tooltip */}
      {showTooltip && (
        <div className="bg-dev-blue text-white text-[10px] font-semibold py-1 px-2.5 rounded-lg shadow-lg border border-gold-500/25 whitespace-nowrap animate-bounce select-none">
          {isPlaying ? "♫ Chanting active..." : "♫ Play 'Om Namah Shivaya'"}
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={togglePlay}
        className={`relative w-9 h-9 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 border ${
          isPlaying
            ? "bg-dev-orange border-gold-400 text-white scale-105 shadow-[0_0_10px_#f27224]"
            : "bg-white border-dev-blue text-dev-blue hover:scale-105"
        }`}
        aria-label={isPlaying ? "Pause Chant" : "Play Chant"}
      >
        {/* Glowing Pulsing Rings (Only when playing) */}
        {isPlaying && (
          <>
            <span className="absolute -inset-0.5 rounded-full bg-dev-orange/40 animate-ping opacity-75 pointer-events-none" />
            <span className="absolute -inset-1.5 rounded-full bg-gold-400/20 animate-pulse pointer-events-none" />
          </>
        )}

        {/* Audio Icons */}
        {isPlaying ? (
          /* Speaker with Sound Waves */
          <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75l-3-3H6a1.5 1.5 0 01-1.5-1.5v-4.5A1.5 1.5 0 016 8.25h3l3-3v13.5z" />
          </svg>
        ) : (
          /* Muted Speaker */
          <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
        )}
      </button>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        preload="auto"
      />
    </div>
  );
}

import { useState, useEffect } from "react";
import mallikarjunaImg from "../assets/mallikarjuna_swamy.png";
import bhramarambaImg from "../assets/bhramaramba_devi.png";
import ramalingeswaraImg from "../assets/ramalingeswara_swamy.png";
import durgaImg from "../assets/durga_bhavani.png";

export default function DeityCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      leftText: "Om Namah Shivaya",
      rightText: "Sri Matre Namaha",
      leftDeity: {
        name: "Lord Mallikarjuna Swamy",
        title: "Jyotirlingam",
        image: mallikarjunaImg,
      },
      rightDeity: {
        name: "Goddess Bhramaramba Devi",
        title: "Shakti Peetham",
        image: bhramarambaImg,
      },
    },
    {
      id: 2,
      leftText: "శ్రీ రామలింగేశ్వర స్వామి",
      rightText: "శ్రీ దుర్గా భవానీ దేవి",
      leftDeity: {
        name: "Lord Ramalingeswara Swamy",
        title: "Sanctum Sanctorum",
        image: ramalingeswaraImg,
      },
      rightDeity: {
        name: "Goddess Durga Bhavani",
        title: "Durga Alankaram",
        image: durgaImg,
      },
    },
    {
      id: 3,
      leftText: "హర హర మహాదేవ",
      rightText: "శరణు శరణు దుర్గమ్మ",
      leftDeity: {
        name: "Sri Ramalingeswara Swamy",
        title: "Ramalingeswara Swamy",
        image: ramalingeswaraImg,
      },
      rightDeity: {
        name: "Goddess Durga Bhavani",
        title: "Durga Bhavani",
        image: durgaImg,
      },
    },
    {
      id: 4,
      leftText: "శివాయ నమః",
      rightText: "దుర్గాయై నమః",
      leftDeity: {
        name: "Lord Mallikarjuna Swamy",
        title: "Lord Shiva",
        image: mallikarjunaImg,
      },
      rightDeity: {
        name: "Goddess Bhramaramba Devi",
        title: "Goddess Parvati",
        image: bhramarambaImg,
      },
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="bg-transparent py-4 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Ornate Frame Container */}
        <div className="relative bg-[#020b17] border-4 border-gold-500 rounded-[30px] md:rounded-[40px] shadow-2xl overflow-hidden min-h-[220px] md:min-h-[320px] md:h-[350px] flex items-center justify-between p-4 md:p-8">
          
          {/* Subtle ornate background overlay */}
          <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay bg-cover bg-center" style={{ backgroundImage: "radial-gradient(circle, #f27224 10%, transparent 80%)" }} />

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 z-20 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-colors shadow-md"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 z-20 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-colors shadow-md"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Content */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative z-10">
            {/* Slide Text Left */}
            <div className="w-full md:w-1/4 text-center md:text-left">
              <h2 className="font-display text-lg md:text-2xl lg:text-3xl text-white font-medium drop-shadow-sm leading-snug">
                {slides[activeIndex].leftText}
              </h2>
              <div className="w-12 h-0.5 bg-dev-orange mx-auto md:mx-0 mt-2 rounded-full opacity-80" />
            </div>

            {/* Deities Section in the Center */}
            <div className="w-full md:w-1/2 flex items-center justify-center gap-3 sm:gap-6 my-1 md:my-0">
              {/* Left Deity */}
              <div className="flex flex-col items-center">
                <div className="relative rounded-[16px] md:rounded-[24px] overflow-hidden border-2 border-dev-orange shadow-[0_0_15px_rgba(242,114,36,0.45)] w-20 h-28 sm:w-32 sm:h-44 md:w-36 md:h-48 lg:w-40 lg:h-52 bg-gradient-to-t from-black to-slate-900">
                  <img
                    src={slides[activeIndex].leftDeity.image}
                    alt={slides[activeIndex].leftDeity.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Title overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-1.5 text-center">
                    <span className="text-[8px] md:text-[10px] text-white/90 uppercase tracking-widest font-semibold block">
                      {slides[activeIndex].leftDeity.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Deity */}
              <div className="flex flex-col items-center">
                <div className="relative rounded-[16px] md:rounded-[24px] overflow-hidden border-2 border-dev-orange shadow-[0_0_15px_rgba(242,114,36,0.45)] w-20 h-28 sm:w-32 sm:h-44 md:w-36 md:h-48 lg:w-40 lg:h-52 bg-gradient-to-t from-black to-slate-900">
                  <img
                    src={slides[activeIndex].rightDeity.image}
                    alt={slides[activeIndex].rightDeity.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Title overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-1.5 text-center">
                    <span className="text-[8px] md:text-[10px] text-white/90 uppercase tracking-widest font-semibold block">
                      {slides[activeIndex].rightDeity.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Text Right */}
            <div className="w-full md:w-1/4 text-center md:text-right">
              <h2 className="font-display text-lg md:text-2xl lg:text-3xl text-white font-medium drop-shadow-sm leading-snug">
                {slides[activeIndex].rightText}
              </h2>
              <div className="w-12 h-0.5 bg-dev-orange mx-auto md:ml-auto md:mr-0 mt-2 rounded-full opacity-80" />
            </div>
          </div>

          {/* Dots Indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center items-center gap-2 z-20">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "bg-dev-orange scale-125 shadow-[0_0_6px_#f27224]"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

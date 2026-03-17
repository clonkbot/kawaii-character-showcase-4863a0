import { useState, useEffect } from 'react';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    setLoaded(true);
    // Generate random sparkles
    const newSparkles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-pink-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-red-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-72 md:h-72 bg-pink-200/40 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 md:w-48 md:h-48 bg-amber-200/30 rounded-full blur-2xl animate-float-slow" />

        {/* Sparkle effects */}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute w-2 h-2 md:w-3 md:h-3"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay}s`,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full text-red-400/60 animate-sparkle"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 md:py-12">
        {/* Header */}
        <div
          className={`text-center mb-6 md:mb-10 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 mb-2 md:mb-4 tracking-tight">
            可愛い キャラクター
          </h1>
          <p className="text-base md:text-xl text-rose-600/70 font-medium tracking-wide">
            ✨ Adorable Character Showcase ✨
          </p>
        </div>

        {/* Character Card */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          {/* Glow effect behind card */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 rounded-3xl md:rounded-[2.5rem] blur-2xl opacity-30 scale-105 animate-pulse-slow" />

          {/* Main card */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl md:rounded-[2.5rem] p-4 md:p-8 shadow-2xl shadow-rose-200/50 border-4 border-white/60 max-w-[90vw] md:max-w-2xl">
            {/* Decorative corner elements */}
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-sm md:text-xl">♥</span>
            </div>
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-sm md:text-xl">★</span>
            </div>
            <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-sm md:text-xl">✿</span>
            </div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-rose-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-sm md:text-xl">♦</span>
            </div>

            {/* Image container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl md:rounded-3xl" />
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fef2f2'/%3E%3Cstop offset='100%25' style='stop-color:%23fce7f3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23bg)' width='400' height='400'/%3E%3C!-- Bear Hood --%3E%3Cellipse cx='200' cy='180' rx='140' ry='130' fill='%23dc2626'/%3E%3C!-- Ears --%3E%3Ccircle cx='100' cy='90' r='50' fill='%23dc2626'/%3E%3Ccircle cx='100' cy='90' r='30' fill='%23991b1b'/%3E%3Ccircle cx='300' cy='90' r='50' fill='%23dc2626'/%3E%3Ccircle cx='300' cy='90' r='30' fill='%23991b1b'/%3E%3C!-- Face opening --%3E%3Cellipse cx='200' cy='200' rx='95' ry='90' fill='%23fef3c7'/%3E%3C!-- White stripe --%3E%3Cpath d='M60 150 Q200 120 340 150 L340 165 Q200 135 60 165 Z' fill='white'/%3E%3C!-- Hair --%3E%3Cpath d='M130 160 Q150 140 170 160 Q190 140 210 160 Q230 140 250 160 Q270 140 280 160' fill='none' stroke='%23451a03' stroke-width='8'/%3E%3C!-- Glasses --%3E%3Ccircle cx='155' cy='200' r='40' fill='none' stroke='%23991b1b' stroke-width='8'/%3E%3Ccircle cx='245' cy='200' r='40' fill='none' stroke='%23991b1b' stroke-width='8'/%3E%3Cline x1='195' y1='200' x2='205' y2='200' stroke='%23991b1b' stroke-width='6'/%3E%3C!-- Eyes --%3E%3Cellipse cx='155' cy='205' rx='15' ry='20' fill='%231a1a1a'/%3E%3Cellipse cx='245' cy='205' rx='15' ry='20' fill='%231a1a1a'/%3E%3Ccircle cx='160' cy='198' r='6' fill='white'/%3E%3Ccircle cx='250' cy='198' r='6' fill='white'/%3E%3C!-- Eyebrows --%3E%3Cpath d='M125 175 Q140 165 175 175' fill='none' stroke='%23451a03' stroke-width='5'/%3E%3Cpath d='M225 175 Q260 165 275 175' fill='none' stroke='%23451a03' stroke-width='5'/%3E%3C!-- Mouth --%3E%3Cpath d='M180 255 Q200 270 220 255' fill='none' stroke='%23451a03' stroke-width='4'/%3E%3C!-- Blush --%3E%3Cellipse cx='120' cy='240' rx='15' ry='10' fill='%23fda4af' opacity='0.6'/%3E%3Cellipse cx='280' cy='240' rx='15' ry='10' fill='%23fda4af' opacity='0.6'/%3E%3C!-- Collar --%3E%3Cpath d='M140 290 L200 340 L260 290' fill='%2314b8a6'/%3E%3Ccircle cx='200' cy='310' r='8' fill='%230d9488'/%3E%3C!-- Bow --%3E%3Ccircle cx='310' cy='180' r='25' fill='%23dc2626'/%3E%3Ccircle cx='330' cy='160' r='20' fill='%23dc2626'/%3E%3Ccircle cx='350' cy='180' r='20' fill='%23dc2626'/%3E%3Ccircle cx='330' cy='200' r='20' fill='%23dc2626'/%3E%3Ccircle cx='330' cy='180' r='10' fill='%23991b1b'/%3E%3C/svg%3E"
                alt="Cute chibi character with red bear hood"
                className="relative w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[450px] mx-auto rounded-2xl md:rounded-3xl transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  imageRendering: 'auto',
                  filter: 'drop-shadow(0 10px 30px rgba(220, 38, 38, 0.2))',
                }}
              />

              {/* Floating hearts on hover */}
              <div className="absolute top-2 right-2 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xl md:text-3xl animate-bounce-slow">💕</span>
              </div>
            </div>

            {/* Character info */}
            <div className="mt-4 md:mt-8 text-center">
              <h2 className="text-xl md:text-3xl font-bold text-rose-600 mb-2 md:mb-3">
                赤いクマちゃん
              </h2>
              <p className="text-sm md:text-base text-rose-500/70 font-medium mb-3 md:mb-4">
                Red Bear-Chan • 高画質イラスト
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
                {['Kawaii', 'Chibi', 'Cute', 'Red', 'Bear Hood', 'Glasses'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 md:px-4 md:py-1.5 bg-gradient-to-r from-red-100 to-pink-100 text-red-600 rounded-full text-xs md:text-sm font-semibold border border-red-200/50 hover:scale-105 transition-transform cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative text */}
        <div
          className={`mt-8 md:mt-12 text-center transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-base md:text-lg text-rose-400/80 font-medium">
            ～ 高品質 • ハイクオリティ ～
          </p>
          <div className="flex justify-center gap-2 md:gap-3 mt-3 md:mt-4 text-xl md:text-2xl">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>🌸</span>
            <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>✨</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💖</span>
            <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🎀</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🌸</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-4 md:py-6 text-center">
        <p className="text-xs md:text-sm text-rose-400/50 font-medium tracking-wide">
          Requested by @web-user · Built by @clonkbot
        </p>
      </footer>

      {/* Global styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1.05); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export default App;

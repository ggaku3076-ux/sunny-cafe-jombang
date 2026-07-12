import Image from "next/image";
import { ShoppingCart, Calendar, Award, ShieldCheck, Users } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="beranda" 
      className="relative h-screen lg:h-auto lg:min-h-[82vh] flex flex-col overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* === BACKGROUND IMAGES (Optimized via Next.js and Preloaded) === */}
      {/* Desktop background */}
      <div className="absolute inset-0 hidden lg:block z-0" aria-hidden="true">
        <Image
          src="/Asset/BACKGROUND.jpg"
          alt="Sunny Cafe Desktop Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* Mobile background (portrait-optimized image) */}
      <div className="absolute inset-0 block lg:hidden z-0" aria-hidden="true">
        <Image
          src="/Asset/Tanpa judul (Reel Instagram).png"
          alt="Sunny Cafe Mobile Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* === OVERLAYS === */}
      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-brand-dark/15 pointer-events-none z-10" />

      {/* Desktop: Left-side gradient for text readability */}
      <div 
        className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-brand-dark/50 via-brand-dark/25 to-transparent pointer-events-none z-10 hidden lg:block" 
        aria-hidden="true"
      />

      {/* Mobile: Top gradient for text readability (leaves bottom person clear) */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-brand-dark/65 via-brand-dark/20 to-transparent pointer-events-none z-10 block lg:hidden" 
        aria-hidden="true"
      />

      {/* === MAIN CONTENT === */}
      {/* Desktop: standard left-aligned layout */}
      {/* Mobile: content aligned to top to prevent covering the subject in the background */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 md:px-8 flex-grow flex items-start lg:items-center pb-6 pt-28 lg:pt-32 lg:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end lg:items-center w-full">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-3 sm:gap-5 md:gap-8">
            
            {/* Main title */}
            {/* Main title (Styled to match logo font) */}
            <h1 
              id="hero-title" 
              className="flex flex-col items-center lg:items-start text-white leading-none"
            >
              <span className="font-satisfy text-[72px] sm:text-8xl lg:text-[130px] font-normal tracking-normal capitalize select-none py-2 filter drop-shadow-md">
                Sunny
              </span>
              <span className="font-oswald text-3xl sm:text-4xl lg:text-5xl tracking-[0.3em] uppercase font-bold mt-1 select-none filter drop-shadow-sm">
                Cafe
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-xl md:text-3xl font-medium tracking-tight text-white/95">
              Step to the beat of quality.
            </p>

            {/* Sub-description — hidden on very small screens, shown from sm up */}
            <p className="hidden sm:block text-sm sm:text-base text-white/80 leading-relaxed max-w-md lg:max-w-lg font-light">
              Premium coffee, authentic wood-fired pizza, and a creative space built for people who keep moving forward.
            </p>

            {/* Buttons — full width on mobile for clean touch targets */}
            <div className="flex w-full sm:w-auto gap-3 sm:gap-4 mt-1">
              <a
                href="/menu"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl bg-white px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-brand-pink hover:bg-white/90 transition-colors duration-200 shadow-lg shadow-black/10"
              >
                <ShoppingCart className="h-4 w-4 text-brand-pink" aria-hidden="true" />
                <span>Shop Now</span>
              </a>
              
              <a
                href="/rsvp"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl border-2 border-white/70 px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm"
              >
                <Calendar className="h-4 w-4 text-white" aria-hidden="true" />
                <span>Book Table</span>
              </a>
            </div>

          </div>

          {/* Right Column Spacer: desktop only */}
          <div className="lg:col-span-5 hidden lg:block" aria-hidden="true" />

        </div>
      </div>

      {/* === BOTTOM FEATURES ROW === */}
      {/* Mobile: 2x2 compact grid | Desktop: 4-column row */}
      <div className="relative z-20 w-full border-t border-white/10 py-5 lg:py-8">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            
            {/* Feature 1 */}
            <div className="flex gap-2.5 lg:gap-4 items-start text-left text-white">
              <div className="h-7 lg:h-10 w-7 lg:w-10 shrink-0 flex items-center justify-center text-white/90">
                <Award className="h-5 lg:h-8 w-5 lg:w-8" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[10px] lg:text-sm font-bold tracking-wide uppercase leading-tight">Premium Quality</h3>
                <p className="text-[9px] lg:text-xs text-white/60 mt-0.5 leading-snug hidden sm:block">
                  High-grade ingredients for the best taste.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-2.5 lg:gap-4 items-start text-left text-white">
              <div className="h-7 lg:h-10 w-7 lg:w-10 shrink-0 flex items-center justify-center text-white/90">
                <svg 
                  className="h-5 lg:h-8 w-5 lg:w-8" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                  <path d="M17 2l-7 10" />
                  <path d="M7 2l7 10" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[10px] lg:text-sm font-bold tracking-wide uppercase leading-tight">Powerful Vibe</h3>
                <p className="text-[9px] lg:text-xs text-white/60 mt-0.5 leading-snug hidden sm:block">
                  Cozy seating, 100 Mbps Wi-Fi, built for focus.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-2.5 lg:gap-4 items-start text-left text-white">
              <div className="h-7 lg:h-10 w-7 lg:w-10 shrink-0 flex items-center justify-center text-white/90">
                <ShieldCheck className="h-5 lg:h-8 w-5 lg:w-8" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[10px] lg:text-sm font-bold tracking-wide uppercase leading-tight">Durable & Reliable</h3>
                <p className="text-[9px] lg:text-xs text-white/60 mt-0.5 leading-snug hidden sm:block">
                  Consistent taste and top service every day.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-2.5 lg:gap-4 items-start text-left text-white">
              <div className="h-7 lg:h-10 w-7 lg:w-10 shrink-0 flex items-center justify-center text-white/90">
                <Users className="h-5 lg:h-8 w-5 lg:w-8" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[10px] lg:text-sm font-bold tracking-wide uppercase leading-tight">Made for Creators</h3>
                <p className="text-[9px] lg:text-xs text-white/60 mt-0.5 leading-snug hidden sm:block">
                  Designed for people who never stop moving.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Subtle dotted pattern decoration at bottom-left (desktop only) */}
      <div 
        className="absolute bottom-16 left-8 w-16 h-16 opacity-10 pointer-events-none hidden md:block z-20" 
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
          backgroundSize: "8px 8px"
        }}
      />
    </section>
  );
}

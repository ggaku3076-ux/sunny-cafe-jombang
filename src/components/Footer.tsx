import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Compass, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      id="lokasi" 
      className="bg-brand-pink text-white pt-12 md:pt-16 pb-6 md:pb-8 border-t-0"
      aria-labelledby="footer-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* === MOBILE FOOTER LAYOUT === */}
        <div className="block md:hidden">
          
          {/* Logo & Brand - centered on mobile */}
          <div className="flex flex-col items-center text-center gap-3 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Asset/LOGO.png"
                  alt="Sunny Cafe Jombang Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-nunito font-light text-xl text-white tracking-tight">
                Sunny Cafe
              </span>
            </div>
            <p className="text-xs text-white/75 leading-relaxed max-w-[280px]">
              Tempat pelepas penat dan berkolaborasi di pusat kota Jombang.
            </p>
          </div>

          {/* Quick info cards - 2 column grid on mobile */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {/* Alamat */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 flex flex-col gap-2">
              <MapPin className="h-4 w-4 text-white/80" aria-hidden="true" />
              <p className="text-[11px] text-white/90 leading-snug">
                Jalan W.R Supratman No 7, Kabupaten Jombang
              </p>
            </div>
            {/* Jam */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 flex flex-col gap-2">
              <Clock className="h-4 w-4 text-white/80" aria-hidden="true" />
              <div>
                <p className="text-[11px] font-semibold text-white/90">Setiap Hari</p>
                <p className="text-[11px] text-white/70">08:00 - 23:00</p>
              </div>
            </div>
            {/* Telepon */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 flex flex-col gap-2">
              <Phone className="h-4 w-4 text-white/80" aria-hidden="true" />
              <a href="tel:+6282231144930" className="text-[11px] text-white/90 leading-snug">
                0813-3478-3101
              </a>
            </div>
            {/* Email */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 flex flex-col gap-2">
              <Mail className="h-4 w-4 text-white/80" aria-hidden="true" />
              <a href="mailto:info@sunnycafe.id" className="text-[11px] text-white/90 leading-snug break-all">
                info@sunnycafe.id
              </a>
            </div>
          </div>

          {/* Google Maps button - full width on mobile */}
          <a
            href="https://maps.google.com/?q=Sunny+Cafe+Jombang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-white py-3 text-xs font-bold text-brand-pink hover:bg-white/90 transition-all duration-200 shadow-sm mb-6"
            aria-label="Buka peta Google Maps ke Sunny Cafe Jombang (tab baru)"
          >
            <Compass className="h-4 w-4 text-brand-pink" />
            <span>Petunjuk Arah Google Maps</span>
            <ExternalLink className="h-3 w-3 text-brand-pink" />
          </a>

          {/* Navigation links - horizontal scroll */}
          <div className="flex items-center justify-center gap-5 py-4 border-t border-white/15">
            <Link href="/" className="text-[11px] text-white/70 hover:text-white transition-colors">Home</Link>
            <Link href="/menu" className="text-[11px] text-white/70 hover:text-white transition-colors">Products</Link>
            <Link href="/wfc" className="text-[11px] text-white/70 hover:text-white transition-colors">About Us</Link>
            <Link href="/rsvp" className="text-[11px] text-white/70 hover:text-white transition-colors">Artists</Link>
            <Link href="/lokasi" className="text-[11px] text-white/70 hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Copyright */}
          <p className="text-center text-[10px] text-white/50 mt-3">
            © 2026 Sunny Cafe Jombang. All rights reserved.
          </p>
        </div>

        {/* === DESKTOP FOOTER LAYOUT === */}
        <div className="hidden md:block">
          {/* Footer Top Grid */}
          <div className="grid grid-cols-12 gap-8 mb-16 items-start">
            
            {/* Logo & Brand Column (Col-4) */}
            <div className="col-span-4 flex flex-col gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/Asset/LOGO.png"
                    alt="Sunny Cafe Jombang Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="font-nunito font-light text-2xl text-white tracking-tight">
                  Sunny Cafe
                </span>
              </div>
              
              <p className="text-sm text-white/80 leading-relaxed mt-2">
                Sebuah tempat pelepas penat, bertukar pikiran, dan berkolaborasi di pusat kota Jombang. Kami hadir menyajikan hidangan fusion modern yang dibuat dengan cinta dari dapur kami.
              </p>
              <div className="text-[10px] text-white/60 tracking-wider">
                © 2026 SUNNY CAFE JOMBANG. ALL RIGHTS RESERVED.
              </div>
            </div>

            {/* Contact Info Column (Col-4) */}
            <div className="col-span-4 flex flex-col gap-4 text-left">
              <h3 className="font-bold text-white text-sm uppercase tracking-widest border-b border-white/20 pb-2">
                Hubungi Kami
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-white/90">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-white shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Jalan W.R Supratman No 7, Kabupaten Jombang</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white shrink-0" aria-hidden="true" />
                  <a href="tel:+6282231144930" className="hover:text-white/80 transition-colors">
                    0813-3478-3101 (WhatsApp)
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-white shrink-0" aria-hidden="true" />
                  <a href="mailto:info@sunnycafe.id" className="hover:text-white/80 transition-colors">
                    info@sunnycafe.id
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours & Navigation Column (Col-4) */}
            <div className="col-span-4 flex flex-col gap-4 text-left">
              <h3 className="font-bold text-white text-sm uppercase tracking-widest border-b border-white/20 pb-2">
                Jam Operasional
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-white/90">
                  <Clock className="h-5 w-5 text-white shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Buka Setiap Hari</p>
                    <p className="text-xs text-white/85">08:00 - 23:00 WIB</p>
                  </div>
                </div>
                
                {/* Google Maps External Button */}
                <a
                  href="https://maps.google.com/?q=Sunny+Cafe+Jombang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded bg-white px-4 py-2.5 text-xs font-bold text-brand-pink hover:bg-white/90 transition-all duration-200 shadow-sm"
                  aria-label="Buka peta Google Maps ke Sunny Cafe Jombang (tab baru)"
                >
                  <Compass className="h-4 w-4 text-brand-pink" />
                  <span>Petunjuk Arah Google Maps</span>
                  <ExternalLink className="h-3 w-3 text-brand-pink" />
                </a>
              </div>
            </div>

          </div>

          {/* Footer Bottom Divider */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex gap-6 text-xs text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/menu" className="hover:text-white transition-colors">Products</Link>
              <Link href="/wfc" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/rsvp" className="hover:text-white transition-colors">Artists</Link>
              <Link href="/lokasi" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <div className="text-xs text-white/60">
              Dibuat untuk kebutuhan demo proposal kerja sama Sunny Cafe Jombang.
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

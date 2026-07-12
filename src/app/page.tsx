import Link from "next/link";
import Hero from "@/components/Hero";
import { Wifi, BookOpen, CalendarRange, MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  const portalCards = [
    {
      icon: Wifi,
      title: "Fasilitas Bekerja (WFC)",
      description: "Nikmati koneksi internet 100 Mbps, area stopkontak di setiap meja, dan musholla yang nyaman.",
      href: "/wfc",
      linkText: "Lihat Info WFC",
    },
    {
      icon: BookOpen,
      title: "Katalog Menu",
      description: "Pesan langsung menu Wood-Fired Pizza, Pasta, Kopi, atau makanan khas lokal kami secara interaktif.",
      href: "/menu",
      linkText: "Jelajahi Menu",
    },
    {
      icon: CalendarRange,
      title: "Reservasi Tempat",
      description: "Sewa area indoor ber-AC atau semi-outdoor untuk acara privat, rapat kantor, atau perayaan ulang tahun.",
      href: "/rsvp",
      linkText: "Simulasi RSVP",
    },
    {
      icon: MapPin,
      title: "Lokasi & Kontak",
      description: "Temukan jam operasional dan petunjuk arah Google Maps langsung ke kafe kami di daerah Kartini, Jombang.",
      href: "/lokasi",
      linkText: "Lihat Lokasi",
    },
  ];

  return (
    <>
      <Hero />
      
      {/* Home Portal Navigation Grid */}
      <section 
        className="py-16 md:py-24 bg-brand-pink-bg border-t border-brand-pink/10"
        aria-labelledby="portal-title"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs font-bold tracking-widest text-brand-pink uppercase">
              JELAJAHI KAFE KAMI
            </span>
            <h2 
              id="portal-title" 
              className="text-3xl font-extrabold text-brand-dark sm:text-4xl mt-3"
            >
              Layanan Utama Sunny Cafe
            </h2>
            <p className="text-base text-brand-dark/70 mt-4">
              Pilih halaman yang ingin Anda tuju di bawah ini untuk melihat detail fasilitas, katalog menu, atau melakukan pemesanan area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portalCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-brand-pink/10 hover:border-brand-pink transition-all duration-300 flex flex-col justify-between items-start text-left shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-col gap-4">
                    <div className="h-12 w-12 rounded-xl bg-brand-pink-bg border border-brand-pink/20 flex items-center justify-center text-brand-pink shrink-0">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark">{card.title}</h3>
                    <p className="text-sm text-brand-dark/60 leading-relaxed">{card.description}</p>
                  </div>

                  <Link
                    href={card.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand-pink hover:text-brand-pink-light group"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

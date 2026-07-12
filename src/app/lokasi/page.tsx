import { MapPin, Phone, Mail, Clock, Compass, MessageSquare } from "lucide-react";

export default function LokasiPage() {
  return (
    <section 
      className="bg-white pt-32 pb-16 md:pt-40 md:pb-24"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-brand-pink uppercase">
            HUBUNGI KAMI & LOKASI
          </span>
          <h1 
            id="contact-title" 
            className="text-3xl font-extrabold text-brand-dark sm:text-4xl mt-3"
          >
            Kunjungi Sunny Cafe Jombang
          </h1>
          <p className="text-base text-brand-dark/70 mt-4">
            Berlokasi strategis di pusat kota Jombang (daerah Kartini), kafe kami mudah diakses dari berbagai penjuru kota. Temukan info kontak dan arah lokasi lengkap kami di bawah ini.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
          
          {/* Details & Contacts (Left) */}
          <div className="flex flex-col gap-8 text-left">
            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-4">Informasi Kontak</h2>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-brand-pink-bg border border-brand-pink/20 flex items-center justify-center text-brand-pink shrink-0">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-sm">Alamat Lengkap</h3>
                    <p className="text-sm text-brand-dark/70 mt-1 leading-relaxed">
                      Jalan W.R Supratman No 7, Kabupaten Jombang
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-brand-pink-bg border border-brand-pink/20 flex items-center justify-center text-brand-pink shrink-0">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-sm">Nomor Telepon & WhatsApp</h3>
                    <p className="text-sm text-brand-dark/70 mt-1">
                      <a href="tel:+6282231144930" className="hover:text-brand-pink transition-colors">
                        0813-3478-3101
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-brand-pink-bg border border-brand-pink/20 flex items-center justify-center text-brand-pink shrink-0">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-sm">Email Resmi</h3>
                    <p className="text-sm text-brand-dark/70 mt-1">
                      <a href="mailto:info@sunnycafe.id" className="hover:text-brand-pink transition-colors">
                        info@sunnycafe.id
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-4">Jam Operasional</h2>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-brand-pink-bg border border-brand-pink/20 flex items-center justify-center text-brand-pink shrink-0">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-sm">Buka Setiap Hari</h3>
                  <p className="text-sm text-brand-dark/70 mt-1">
                    Senin - Minggu: 08:00 - 23:00 WIB
                  </p>
                  <p className="text-xs text-brand-dark/50 mt-1">
                    *Menerima pesanan terakhir (Last Order) makanan hangat pada pukul 21:30 WIB.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Wireframe & Directions (Right) */}
          <div className="flex flex-col gap-6 p-6 sm:p-8 bg-brand-pink-bg border border-brand-pink/15 rounded-2xl">
            <h2 className="text-xl font-bold text-brand-dark text-left">Peta Lokasi</h2>
            
            {/* Visual map wireframe */}
            <div className="relative aspect-[16/10] w-full rounded-xl border border-brand-pink/30 bg-white p-4 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-10">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="border-t border-l border-brand-pink/30"></div>
                ))}
              </div>
              
              <div className="flex justify-between items-start">
                <span className="font-mono text-[9px] text-brand-pink font-bold uppercase tracking-wider">
                  Jombang Pusat // Tegalsari
                </span>
                <div className="h-2 w-2 rounded-full bg-brand-pink"></div>
              </div>

              <div className="flex items-center justify-center my-auto flex-col gap-2">
                <div className="h-10 w-10 rounded-full bg-brand-pink-bg border border-brand-pink/20 flex items-center justify-center text-brand-pink">
                  <Compass className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold text-brand-dark text-center leading-tight">
                  SUNNY CAFE JOMBANG
                  <span className="block text-[10px] text-brand-dark/50 font-normal mt-0.5">Jalan W.R Supratman No 7</span>
                </div>
              </div>

              <div className="flex justify-between items-end font-mono text-[9px] text-brand-dark/40">
                <span>SEBRANG JALAN KARTINI</span>
                <span>KODE POS: 60264</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://maps.google.com/?q=Sunny+Cafe+Jombang"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded bg-brand-pink py-3.5 text-sm font-semibold text-white hover:bg-brand-pink-light transition-colors duration-200"
                aria-label="Petunjuk Arah Google Maps ke Sunny Cafe Jombang (tab baru)"
              >
                <Compass className="h-4 w-4" />
                <span>Buka Petunjuk Arah Google Maps</span>
              </a>

              <a
                href="https://wa.me/6282231144930"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded border border-brand-dark/20 bg-white py-3.5 text-sm font-semibold text-brand-dark hover:border-brand-pink hover:text-brand-pink transition-colors duration-200"
                aria-label="Hubungi Admin lewat Chat WhatsApp (tab baru)"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Hubungi Admin via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

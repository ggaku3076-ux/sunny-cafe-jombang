"use client";

import { useState, useMemo } from "react";
import { Users, Calendar, Award, CheckCircle2, ChevronRight } from "lucide-react";

interface VenueArea {
  id: string;
  name: string;
  maxCapacity: number;
  features: string[];
  description: string;
}

export default function VenueSection() {
  const [guests, setGuests] = useState<number>(25);
  const [eventType, setEventType] = useState<string>("meeting");
  const [date, setDate] = useState<string>("");
  const [timeSession, setTimeSession] = useState<string>("afternoon");
  const [clientName, setClientName] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const areas: VenueArea[] = [
    {
      id: "vip",
      name: "VIP Private Room",
      maxCapacity: 20,
      description: "Ruang pertemuan privat yang tenang dan nyaman di lantai 2.",
      features: ["AC Dingin", "Proyektor & Layar", "Papan Tulis", "Stopkontak Dedikasi", "Kapasitas Maks. 20 Orang"],
    },
    {
      id: "indoor",
      name: "High-Ceiling Indoor Lounge",
      maxCapacity: 50,
      description: "Area utama dengan langit-langit tinggi, kaca besar, dan pencahayaan kristal yang elegan.",
      features: ["Full AC", "Sound System Standard", "Area Buffet Khusus", "Kursi Anyaman Estetik", "Kapasitas Maks. 50 Orang"],
    },
    {
      id: "semi-outdoor",
      name: "Semi-Outdoor Garden Canopy",
      maxCapacity: 100,
      description: "Area semi-terbuka luas dikelilingi tanaman hijau segar yang sejuk untuk acara kasual.",
      features: ["Sirkulasi Udara Alami", "Sound System Outdoor", "Dekorasi Tanaman Hijau", "Tata Letak Fleksibel", "Kapasitas Maks. 100 Orang"],
    },
  ];

  // Automated Area recommendation based on guest size
  const recommendedArea = useMemo(() => {
    if (guests <= 20) {
      return areas.find((a) => a.id === "vip") || areas[0];
    } else if (guests <= 50) {
      return areas.find((a) => a.id === "indoor") || areas[1];
    } else {
      return areas.find((a) => a.id === "semi-outdoor") || areas[2];
    }
  }, [guests]);

  // Handle RSVP Submit via WhatsApp
  const handleRsvpsubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !date) return;

    const sessionLabel = 
      timeSession === "morning" ? "Pagi (08:00 - 12:00)" : 
      timeSession === "afternoon" ? "Siang (13:00 - 17:00)" : 
      "Malam (18:00 - 22:00)";

    const eventLabel = 
      eventType === "meeting" ? "Rapat / Rapat Kantor" : 
      eventType === "birthday" ? "Ulang Tahun" : 
      eventType === "workshop" ? "Workshop / Kelas Belajar" : 
      "Gathering Keluarga / Sosial";

    let message = `Halo Sunny Cafe Jombang, saya ingin menanyakan ketersediaan tempat untuk acara privat:\n\n`;
    message += `- *Nama Penyelenggara:* ${clientName}\n`;
    message += `- *Jenis Acara:* ${eventLabel}\n`;
    message += `- *Jumlah Tamu:* ${guests} orang\n`;
    message += `- *Tanggal Acara:* ${date}\n`;
    message += `- *Sesi Waktu:* ${sessionLabel}\n`;
    message += `- *Area yang Direkomendasikan:* ${recommendedArea.name}\n\n`;
    message += `Mohon info mengenai ketersediaan tanggal dan paket katering minimal order. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6282231144930?text=${encoded}`, "_blank");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setClientName("");
      setDate("");
    }, 3000);
  };

  return (
    <section 
      id="rsvp" 
      className="bg-brand-pink-bg pt-32 pb-16 md:pt-40 md:pb-24 border-y border-brand-pink/10"
      aria-labelledby="venue-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-brand-pink uppercase">
            RESERVASI TEMPAT & ACARA
          </span>
          <h2 
            id="venue-title" 
            className="text-3xl font-extrabold text-brand-dark sm:text-4xl mt-3"
          >
            Sewa Area & Simulasi RSVP
          </h2>
          <p className="text-base text-brand-dark/70 mt-4">
            Ingin mengadakan rapat kantor, kelas belajar, ulang tahun, atau reuni? Gunakan kalkulator estimasi area kami untuk menemukan ruangan terbaik di Sunny Cafe Jombang.
          </p>
        </div>

        {/* Main Grid: RSVP Form & Recommended Area card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* RSVP Simulator Form (Col-5) */}
          <form 
            onSubmit={handleRsvpsubmit}
            className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-brand-pink/10 flex flex-col gap-5 justify-between"
          >
            <h3 className="text-xl font-bold text-brand-dark flex items-center gap-2 border-b border-brand-pink/10 pb-4">
              <Calendar className="h-5 w-5 text-brand-pink" aria-hidden="true" />
              <span>Formulir Simulasi RSVP</span>
            </h3>

            {/* Client Name Input */}
            <div className="flex flex-col gap-1 text-left">
              <label htmlFor="rsvp-name" className="text-xs font-bold text-brand-dark/70">Nama Lengkap</label>
              <input
                id="rsvp-name"
                type="text"
                placeholder="Masukkan nama Anda..."
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-brand-dark/10 rounded focus:border-brand-pink focus:ring-0 focus:outline-none bg-white text-brand-dark"
              />
            </div>

            {/* Event Type Select */}
            <div className="flex flex-col gap-1 text-left">
              <label htmlFor="rsvp-event-type" className="text-xs font-bold text-brand-dark/70">Jenis Acara</label>
              <select
                id="rsvp-event-type"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-brand-dark/10 rounded focus:border-brand-pink focus:ring-0 focus:outline-none bg-white text-brand-dark"
              >
                <option value="meeting">Rapat Kerja / Rapat Kantor</option>
                <option value="birthday">Perayaan Ulang Tahun</option>
                <option value="workshop">Workshop / Kelas Kursus</option>
                <option value="social">Gathering Keluarga / Reuni</option>
              </select>
            </div>

            {/* Guests Input Slider */}
            <div className="flex flex-col gap-2 text-left">
              <div className="flex justify-between items-center">
                <label htmlFor="rsvp-guests" className="text-xs font-bold text-brand-dark/70">Jumlah Tamu</label>
                <span className="font-mono text-sm font-bold text-brand-pink flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{guests} Orang</span>
                </span>
              </div>
              <input
                id="rsvp-guests"
                type="range"
                min="5"
                max="100"
                step="5"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full accent-brand-pink"
              />
              <span className="text-[10px] text-brand-dark/40">Gunakan slider untuk menyesuaikan perkiraan tamu (5 - 100 orang).</span>
            </div>

            {/* Date Input */}
            <div className="flex flex-col gap-1 text-left">
              <label htmlFor="rsvp-date" className="text-xs font-bold text-brand-dark/70">Tanggal Rencana Acara</label>
              <input
                id="rsvp-date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-brand-dark/10 rounded focus:border-brand-pink focus:ring-0 focus:outline-none bg-white text-brand-dark"
              />
            </div>

            {/* Time Session Select */}
            <div className="flex flex-col gap-1 text-left">
              <label htmlFor="rsvp-session" className="text-xs font-bold text-brand-dark/70">Sesi Acara</label>
              <select
                id="rsvp-session"
                value={timeSession}
                onChange={(e) => setTimeSession(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-brand-dark/10 rounded focus:border-brand-pink focus:ring-0 focus:outline-none bg-white text-brand-dark"
              >
                <option value="morning">Pagi (08:00 - 12:00 WIB)</option>
                <option value="afternoon">Siang (13:00 - 17:00 WIB)</option>
                <option value="evening">Malam (18:00 - 22:00 WIB)</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full mt-2 rounded bg-brand-pink py-3.5 text-center text-sm font-bold tracking-wider text-white uppercase hover:bg-brand-pink-light transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Mengirim ke WA...</span>
                </>
              ) : (
                <>
                  <span>Hubungi Admin & Cek Slot</span>
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Recommended Area Showcase Card (Col-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 bg-white border border-brand-pink/15 rounded-2xl">
            <div className="flex flex-col gap-4">
              <div className="inline-flex max-w-fit items-center gap-1.5 rounded-full border border-brand-pink/20 bg-brand-pink-bg px-3 py-1 text-xs font-bold text-brand-pink">
                <Award className="h-3.5 w-3.5" />
                <span>Rekomendasi Area Terpilih</span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-brand-dark tracking-tight">
                  {recommendedArea.name}
                </h3>
                <p className="text-sm text-brand-dark/60 mt-1">
                  {recommendedArea.description}
                </p>
              </div>

              {/* Wireframe sketch of the recommended area */}
              <div className="relative aspect-[16/8] w-full rounded-xl border border-brand-pink/30 bg-brand-pink-bg/40 p-4 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-3 pointer-events-none opacity-10">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="border-t border-l border-brand-pink/30"></div>
                  ))}
                </div>
                <span className="font-mono text-[9px] text-brand-pink font-bold uppercase tracking-wider">
                  Layout Blueprint (Skala 1:100)
                </span>
                
                <div className="flex items-center justify-center my-auto flex-col gap-1">
                  <div className="font-mono text-xs font-semibold text-brand-dark/70 border border-brand-pink/40 rounded px-2.5 py-1 bg-white">
                    {recommendedArea.name.toUpperCase()} ZONE
                  </div>
                  <span className="text-[10px] text-brand-dark/40 font-mono">MAKSIMAL: {recommendedArea.maxCapacity} ORANG</span>
                </div>

                <div className="flex justify-between items-end font-mono text-[9px] text-brand-dark/40">
                  <span>WD-SUB // IR. ANWARI</span>
                  <span>AREA ID: {recommendedArea.id.toUpperCase()}</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="flex flex-col gap-2 mt-2">
                <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">Fasilitas Area:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                  {recommendedArea.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-brand-dark/80">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink shrink-0" aria-hidden="true" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-brand-dark/5 pt-6 mt-6 text-left">
              <p className="text-xs text-brand-dark/50 leading-normal">
                *Paket sewa area di Sunny Cafe Jombang bersifat fleksibel, dapat berupa sistem sewa per jam atau minimum pembelanjaan makanan & minuman (Minimum Spend). Hubungi admin kami untuk informasi lebih lanjut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

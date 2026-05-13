/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, MapPin, Mail, Clock, ChevronRight, Bike, Truck, Search, Facebook } from "lucide-react";

const SERVICES = [
  {
    title: "Serwis i Naprawa",
    description: "Kompleksowa obsługa mechaniczna motocykli wszystkich marek. Od wymiany płynów po remonty silników.",
    icon: <Bike className="w-8 h-8" />,
  },
  {
    title: "Wynajem Przyczepki",
    description: "Oferujemy profesjonalną przyczepkę motocyklową na wynajem. Bezpieczny transport Twojego motocykla.",
    icon: <Truck className="w-8 h-8" />,
  },
  {
    title: "Pomoc przy zakupie",
    description: "Profesjonalne oględziny przedzakupowe. Pomożemy Ci sprawdzić stan techniczny i uniknąć kosztownych błędów.",
    icon: <Search className="w-8 h-8" />,
  },
];

const HOURS = [
  { day: "Poniedziałek", time: "09:00 - 17:00" },
  { day: "Wtorek", time: "09:00 - 17:00" },
  { day: "Środa", time: "09:00 - 17:00" },
  { day: "Czwartek", time: "09:00 - 17:00" },
  { day: "Piątek", time: "09:00 - 17:00" },
  { day: "Sobota", time: "ZAMKNIĘTE", closed: true },
  { day: "Niedziela", time: "ZAMKNIĘTE", closed: true },
];

const SECTION_LABEL = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="h-px bg-white/20 flex-grow" />
    <span className="font-condensed text-[11px] uppercase tracking-[0.3em] text-white/50">{text}</span>
    <div className="h-px bg-white/20 flex-grow" />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary noise-overlay overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-bg-primary/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl tracking-tighter chrome-text italic">BPMOTORS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-condensed uppercase tracking-widest text-xs">
            <a href="#services" className="hover:text-white transition-colors">Usługi</a>
            <a href="#contact" className="hover:text-white transition-colors">Kontakt</a>
            <a href="#hours" className="hover:text-white transition-colors">Godziny</a>
          </div>
          <a
            href="tel:570936855"
            className="flex items-center gap-2 px-6 py-2 bg-white text-black font-condensed font-bold uppercase tracking-tight hover:bg-white/90 transition-transform active:scale-95"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">Zadzwoń</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] racing-stripe rotate-[-35deg] opacity-10 pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-condensed text-sm uppercase tracking-[0.5em] text-white/40 mb-4 block">Radom | Serwis | Pasja</span>
            <h1 className="text-7xl md:text-[10rem] leading-[0.8] mb-8 chrome-text italic font-black">
              BP MOTORS
            </h1>
            <p className="font-condensed text-xl md:text-2xl uppercase tracking-[0.15em] text-text-secondary max-w-2xl mx-auto">
              Profesjonalny Serwis i Naprawa Motocykli. Twój sprzęt w rękach pasjonatów.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#services"
              className="group relative px-10 py-4 font-condensed font-bold uppercase tracking-widest border border-white overflow-hidden"
            >
              <div className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300 racing-stripe-bold opacity-10" />
              <span className="relative z-10 flex items-center gap-2">
                Zobacz Ofertę <ChevronRight size={18} />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative bg-bg-secondary">
        <div className="max-w-7xl mx-auto">
          <SECTION_LABEL text="Nasze Usługi" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-bg-card border border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="w-32 h-32 racing-stripe-bold rotate-45" />
                </div>
                
                <div className="w-16 h-16 mb-8 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-colors duration-500 rounded-full">
                  {service.icon}
                </div>
                
                <h3 className="text-3xl mb-4 group-hover:tracking-wider transition-all duration-500">{service.title}</h3>
                <p className="text-text-muted font-sans leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-6 bg-white text-black relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none carbon-fiber" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-condensed font-bold uppercase tracking-widest text-[#888] mb-4 block">O Nas</span>
            <h2 className="text-5xl md:text-7xl mb-8 leading-none">
              Pasja Wykuta <br />w Metalu
            </h2>
            <p className="font-sans text-lg text-text-dark-muted mb-8 leading-relaxed italic border-l-4 border-black pl-6">
              "BPMotors to nie tylko warsztat. To miejsce, gdzie każdy motocykl traktowany jest z należytym szacunkiem i precyzją. Bartłomiej Pacholasz dba o to, by każda maszyna opuszczająca serwis była w idealnym stanie."
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 border border-black font-condensed font-bold uppercase tracking-tighter">
                Dokładność
              </div>
              <div className="px-6 py-3 border border-black font-condensed font-bold uppercase tracking-tighter">
                Doświadczenie
              </div>
              <div className="px-6 py-3 border border-black font-condensed font-bold uppercase tracking-tighter">
                Transparentność
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square bg-black relative flex items-center justify-center group overflow-hidden"
          >
            <img 
              src="https://i.postimg.cc/pXTMMNkJ/511190884-122093539886931749-2737000021380571945-n.jpg"
              alt="BPMotors Workshop"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-0 right-0 w-1/2 h-full racing-stripe-bold opacity-10 pointer-events-none" />

          </motion.div>
        </div>
      </section>

      {/* Info Grid: Map, Hours, Contact */}
      <section id="contact" className="py-24 px-6 bg-bg-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Opening Hours */}
            <div id="hours">
              <h3 className="text-3xl mb-12 flex items-center gap-4">
                <Clock className="text-white/40" /> Godziny Otwarcia
              </h3>
              <div className="space-y-4">
                {HOURS.map((h) => (
                  <div key={h.day} className={`flex justify-between py-2 border-b border-white/5 ${h.closed ? 'text-text-muted' : ''}`}>
                    <span className="font-condensed uppercase tracking-widest">{h.day}</span>
                    <span className={`font-mono text-sm ${h.closed ? '' : 'text-white'}`}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl mb-12 flex items-center gap-4">
                <MapPin className="text-white/40" /> Gdzie Jesteśmy
              </h3>
              <div className="aspect-video w-full border border-white/10 grayscale invert filter brightness-90 contrast-125">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.6728213603374!2d21.0991900770708!3d51.40906611788171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471859b38d4b708f%3A0x2d5778f349d05755!2sPrzytycka%20119%2C%2026-610%20Radom!5e0!3m2!1spl!2spl!4v1778663169250!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Details */}
      <footer className="py-20 px-6 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-5xl mb-6 chrome-text italic">BPMOTORS</h2>
            <p className="text-text-muted max-w-sm font-sans mb-8">
              Profesjonalny warsztat motocyklowy prowadzony przez Bartłomieja Pacholasza. 
              Pasja, precyzja i rzetelność w każdym calu.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61577952471658" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-condensed font-bold uppercase tracking-widest text-[#888] mb-6">Dane Kontaktowe</h4>
            <ul className="space-y-4 text-text-secondary font-condensed uppercase tracking-tight">
              <li className="flex items-center gap-3">
                <Phone size={16} /> <a href="tel:570936855" className="hover:text-white">570 936 855</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} /> <a href="mailto:pacholasz.serwis@onet.pl" className="hover:text-white lowercase">pacholasz.serwis@onet.pl</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} /> Przytycka 119, Radom
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-condensed font-bold uppercase tracking-widest text-[#888] mb-6">Szybki Kontakt</h4>
            <div className="font-sans text-sm text-text-muted">
              Masz pytania dotyczące swojego motocykla? Zadzwoń lub napisz do nas – chętnie pomożemy!
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30 font-condensed">
          <span>&copy; 2026 BPMotors Bartłomiej Pacholasz</span>
          <span>Wszystkie prawa zastrzeżone</span>
        </div>
      </footer>
    </div>
  );
}

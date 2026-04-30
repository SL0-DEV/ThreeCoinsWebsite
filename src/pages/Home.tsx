import { PlayCircle, RefreshCw, Skull, BookOpen, Clock, User, TrendingUp, FileDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { triggerHaptic } from '../lib/haptics';
import { siteData } from '../data/config';

const IconMap: Record<string, React.ElementType> = {
  RefreshCw,
  Skull,
  BookOpen
};

export default function Home() {
  const [showVideo, setShowVideo] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    triggerHaptic();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // height of the fixed navbar
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-24">
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12"
            onClick={() => setShowVideo(null)}
          >
            <div className="relative w-full max-w-5xl aspect-video bg-black border-4 border-primary-container pixel-shadow-yellow" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setShowVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary-container font-space font-bold text-xl"
              >
                CLOSE [X]
              </button>
              <iframe 
                width="100%" 
                height="100%" 
                src={showVideo} 
                title="Gameplay Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[870px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="High Octane Action" 
            className="w-full h-full object-cover opacity-40" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG9zY1w2r4fafWJPDEijDdQhtWHaBdMVPtBZGBcsG-SWDeCLCT9LD9QwhnAuEkZkMcuxa73y7g1xT7qBObFKW97K5WimO0Sl7tnhPlNtfPEYdARWJxyENzVIkylo_PPYQBqyIPBbCvdVmpYew19WtiNJ5ndeyg8bwhHz7lCWF1HNh9yZmYx6WtEJ3__rEzr9cLL52ZfIywfXJmcZE-bfFgUK_O5SLNpqXAGpjtIJTkhFBB2eKNgHgeKT3ysRGkWM2Wgx8tp0pUwQ" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-6 text-center mt-12 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-secondary-container text-on-secondary-container font-label-bold px-4 py-1 mb-6 border-2 border-black pixel-shadow-yellow uppercase tracking-widest text-sm md:text-base">
              SPEED & PRECISION
            </div>
            
            <h2 className="font-space text-5xl md:text-7xl font-bold uppercase mb-6 leading-none tracking-tighter text-white">
              POLISHED GAMES, <br/>
              <span className="text-primary-container italic">EVERY 3 MONTHS.</span>
            </h2>
            
            <p className="font-manrope text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 px-2">
              Three Coins Studio is a lean, high-velocity indie powerhouse focused on small-scope games. We strip away the bloat to deliver pure, tactile, and high-quality experiences every three months.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollTo('games')}
                className="bg-primary-container text-black font-space font-semibold text-lg px-8 md:px-10 py-4 border-4 border-black pixel-shadow-yellow uppercase pressed hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:scale-95 transition-all"
              >
                SEE OUR GAMES
              </button>
              <button 
                onClick={() => scrollTo('roadmap')}
                className="bg-transparent text-primary-container font-space font-semibold text-lg px-8 md:px-10 py-4 border-4 border-primary-container pixel-shadow-yellow uppercase hover:bg-primary-container hover:text-black transition-colors pressed hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:scale-95"
              >
                THE ROADMAP
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Game Section */}
      <section id="games" className="py-16 md:py-24 bg-surface-container-lowest border-y-8 border-zinc-900 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col gap-24">
            {siteData.games.map((game, index) => (
              <div key={game.id} className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={index % 2 === 0 ? "order-2 md:order-1" : "order-2 md:order-2"}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {game.tag && <span className="bg-primary-container text-on-primary-container px-3 py-1 font-label-bold uppercase text-xs md:text-sm">{game.tag}</span>}
                    <span className="text-secondary-fixed-dim font-label-bold uppercase text-xs md:text-sm">{game.genre}</span>
                  </div>
                  
                  <h3 className="font-space text-4xl md:text-5xl font-bold text-white uppercase mb-6 italic tracking-tighter">{game.title}</h3>
                  
                  <p className="font-manrope text-base md:text-lg text-on-surface-variant mb-8 leading-relaxed">
                    {game.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-surface-container p-4 border-l-4 border-primary-container">
                      <span className="block font-label-bold text-primary-container uppercase text-xs mb-1">Status</span>
                      <span className="font-space font-semibold text-lg md:text-xl text-white">{game.status}</span>
                    </div>
                    <div className="bg-surface-container p-4 border-l-4 border-secondary-container">
                      <span className="block font-label-bold text-secondary-container uppercase text-xs mb-1">Release</span>
                      <span className="font-space font-semibold text-lg md:text-xl text-white">{game.release}</span>
                    </div>
                  </div>
                  
                  <a 
                    href={game.steamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={triggerHaptic}
                    className="inline-block text-center w-full md:w-auto bg-primary-container text-black font-space font-bold text-lg px-8 md:px-12 py-5 border-4 border-black pixel-shadow-yellow uppercase pressed hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:scale-95 transition-all"
                  >
                    WISHLIST ON STEAM
                  </a>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={index % 2 === 0 ? "order-1 md:order-2" : "order-1 md:order-1"}
                >
                  <div className="relative group cursor-pointer" onClick={() => { triggerHaptic(); setShowVideo(game.videoUrl); }}>
                    <div className="absolute -inset-4 bg-primary-container/20 border-2 border-dashed border-primary-container rounded-lg group-hover:rotate-2 transition-transform duration-300"></div>
                    <img 
                      alt={`${game.title} Gameplay`} 
                      className="relative z-10 w-full aspect-video object-cover border-4 border-black pixel-shadow" 
                      src={game.imageUrl}
                    />
                    <div className="absolute -bottom-4 -right-4 z-20 bg-secondary-container p-4 border-2 border-black pixel-shadow-yellow group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-10 h-10 text-black fill-current" />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold text-white uppercase mb-4">THE STUDIO VISION</h2>
          <div className="w-24 h-2 bg-primary-container mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {siteData.visions.map((vision, index) => {
            const Icon = IconMap[vision.iconName] || BookOpen;
            const borderColors = ['border-primary-container', 'border-secondary-container', 'border-tertiary'];
            const iconColors = ['text-primary-container', 'text-secondary-container', 'text-tertiary'];
            
            return (
              <motion.div 
                key={vision.id}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }} 
                className={`bg-surface-container-high p-8 border-t-4 ${borderColors[index % 3]} pixel-shadow h-full flex flex-col`}
              >
                <div className="bg-background w-14 h-14 flex items-center justify-center mb-6">
                  <Icon className={`w-8 h-8 ${iconColors[index % 3]}`} />
                </div>
                <h4 className="font-space text-2xl font-semibold text-white uppercase mb-4 italic">{vision.title}</h4>
                <p className="text-on-surface-variant font-manrope mb-6 flex-grow">{vision.description}</p>
                <div className="flex flex-wrap gap-2">
                  {vision.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-1 uppercase font-bold">{tag}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The Model (Quarterly Drop) */}
        <motion.div id="roadmap" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-primary-container p-6 md:p-10 border-4 border-black pixel-shadow-dark relative overflow-hidden scroll-mt-24">
          <div className="absolute -right-10 -top-10 opacity-10">
            <Clock className="w-64 h-64 -rotate-12" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-space text-3xl md:text-4xl font-bold text-black uppercase leading-tight mb-4">{siteData.nextRelease.title}</h3>
              <p className="text-zinc-900 font-space font-semibold text-lg md:text-xl max-w-xl">{siteData.nextRelease.description}</p>
            </div>
            <div className="flex-shrink-0 bg-black text-white p-6 md:p-8 border-2 border-zinc-900 pixel-shadow w-full md:w-auto">
              <div className="text-center">
                <span className="block text-sm font-space font-bold uppercase tracking-widest mb-2 text-primary-container">Next Release In</span>
                <span className="text-5xl md:text-6xl font-black font-space tracking-tighter">{siteData.nextRelease.days}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 border-t-8 border-zinc-900">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold text-white uppercase mb-4">MEET THE FOUNDERS</h2>
          <div className="w-24 h-2 bg-primary-container mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {siteData.founders.map((founder, i) => (
            <motion.div 
              key={founder.name}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container p-8 border-2 border-zinc-800 pixel-shadow text-center flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-zinc-800 rounded-full mb-6 border-2 border-primary-container flex items-center justify-center overflow-hidden">
                <User className="w-10 h-10 text-zinc-500" />
              </div>
              <h4 className="font-space text-2xl font-semibold text-white uppercase italic mb-1">{founder.name}</h4>
              <p className="text-primary-container font-space font-bold uppercase tracking-widest mb-4">{founder.role}</p>
              <p className="text-on-surface-variant text-sm font-manrope">{founder.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-16 md:py-24 bg-zinc-950 border-t-4 border-zinc-900 mt-12 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-surface-container-low border-2 border-zinc-800 p-8 md:p-12 pixel-shadow">
            <div className="max-w-3xl">
              <h2 className="font-space text-3xl md:text-4xl font-bold text-white uppercase mb-6">JOIN THE INDIE REVOLUTION</h2>
              <p className="font-manrope text-base md:text-lg text-on-surface-variant mb-10 leading-relaxed">
                We are proving that lean teams and focused, small-scope games outperform bloated AAA cycles. Our investment programs are designed for those who believe in the future of high-velocity, high-quality independent gaming. Professional precision meets creative irreverence.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-6">
                <a 
                  href="mailto:investors@threecoins.studio"
                  onClick={triggerHaptic}
                  className="bg-primary-container text-black font-space font-bold px-8 py-5 border-2 border-black pixel-shadow-yellow uppercase flex items-center justify-center gap-3 pressed hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:scale-95 transition-all w-full sm:w-auto"
                >
                  <TrendingUp className="w-6 h-6" />
                  VENTURE INQUIRY
                </a>
                <a 
                  href="https://example.com/deck.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={triggerHaptic}
                  className="bg-zinc-800 text-primary-container font-space font-bold px-8 py-5 border-2 border-primary-container pixel-shadow-yellow uppercase flex items-center justify-center gap-3 hover:bg-zinc-700 transition-colors pressed hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:scale-95 w-full sm:w-auto"
                >
                  <FileDown className="w-6 h-6" />
                  DOWNLOAD DECK
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

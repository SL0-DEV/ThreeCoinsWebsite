import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { triggerHaptic } from '../lib/haptics';
import { motion, AnimatePresence } from 'motion/react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    triggerHaptic();
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: 'Games', href: '#games' },
    { label: 'Vision', href: '#vision' },
    { label: 'Investors', href: '#investors' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <header className="bg-zinc-950 border-b-4 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-[1280px] mx-auto">
        <div className="flex items-center gap-4">
          <img 
            alt="Three Coins Studio Logo" 
            className="h-10 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uhj_gONvJttJQZG2Ef_gk1jo2IGfxC9dgL2TaEMRvaDXysigfj3IMxtwJ3av_WDeS8YKf6PkW3Qt34BdzHAGIIQ3sub-4QOF_c8FsBa4jR0j2v2tLsx9GMGDU2SbHLBt9Fscwzux4ySbscG2l1us1bZ2Vk38yomIe_-GOp7yp1YMaRXxpBcbPWLcQebWqFCCX5vCteuoL8ZNJ6FNRiIqU3Eu77XT5OnQYBtM7S29L8cBC6YuiWSCM-C1FRss0IQSM38CCjavYsm" 
          />
          <h1 className="text-2xl font-black text-white italic tracking-widest font-space uppercase hidden sm:block">
            THREE COINS STUDIO
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-space uppercase font-bold tracking-tighter">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              className="text-zinc-400 font-medium hover:text-white hover:-skew-x-6 transition-all" 
              href={link.href}
              onClick={triggerHaptic}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={triggerHaptic}
            className="hidden md:inline-block bg-zinc-800 text-white font-space font-black px-6 py-2 border-2 border-black pixel-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95 pressed"
          >
            JOIN DISCORD
          </a>
          
          <button onClick={toggleMenu} className="md:hidden text-white p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-t-2 border-zinc-800 overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-4 font-space uppercase font-bold tracking-tighter">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  className="text-zinc-300 font-medium hover:text-white transition-all text-xl" 
                  href={link.href}
                  onClick={() => { triggerHaptic(); setIsOpen(false); }}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { triggerHaptic(); setIsOpen(false); }}
                className="mt-4 text-center bg-zinc-800 text-white font-space font-black px-6 py-4 border-2 border-black pixel-shadow active:translate-x-1 active:translate-y-1 active:shadow-none transition-all pressed w-full block"
              >
                JOIN DISCORD
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

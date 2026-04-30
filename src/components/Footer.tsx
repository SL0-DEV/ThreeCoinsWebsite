import { Globe, ShieldCheck } from 'lucide-react';
import { triggerHaptic } from '../lib/haptics';

export default function Footer() {
  const links = ['Support', 'Press Kit', 'Discord', 'Twitter'];

  return (
    <footer className="bg-zinc-950 border-t-4 border-zinc-900 mt-auto">
      <div className="max-w-[1280px] mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img 
              alt="Three Coins Studio Logo" 
              className="h-8 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uhj_gONvJttJQZG2Ef_gk1jo2IGfxC9dgL2TaEMRvaDXysigfj3IMxtwJ3av_WDeS8YKf6PkW3Qt34BdzHAGIIQ3sub-4QOF_c8FsBa4jR0j2v2tLsx9GMGDU2SbHLBt9Fscwzux4ySbscG2l1us1bZ2Vk38yomIe_-GOp7yp1YMaRXxpBcbPWLcQebWqFCCX5vCteuoL8ZNJ6FNRiIqU3Eu77XT5OnQYBtM7S29L8cBC6YuiWSCM-C1FRss0IQSM38CCjavYsm" 
            />
            <span className="text-zinc-400 font-bold uppercase text-xl font-space tracking-widest">THREE COINS STUDIO</span>
          </div>
          <p className="font-space text-xs tracking-widest text-zinc-500">© 2026 THREE COINS STUDIO. NO QUARTERS REQUIRED.</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          {links.map(link => (
            <a 
              key={link}
              href="#" 
              onClick={triggerHaptic}
              className="font-space text-xs tracking-widest text-zinc-400 transition-colors duration-200 hover:text-zinc-300 underline decoration-2 underline-offset-4"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          <button onClick={triggerHaptic} className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-zinc-300 hover:text-zinc-300 transition-colors">
            <Globe className="w-5 h-5" />
          </button>
          <button onClick={triggerHaptic} className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-zinc-300 hover:text-zinc-300 transition-colors">
            <ShieldCheck className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

import { RefreshCw, Skull, BookOpen } from 'lucide-react';

export const siteData = {
  nextRelease: {
    days: "42 DAYS",
    title: "THE QUARTERLY DROP",
    description: "Every 90 days, we deliver a new, small-scope, high-polish title. No crunch, just smart design."
  },
  games: [
    {
      id: "gumball-hero",
      title: "GUMBALL HERO",
      description: "A high-octane 3D Action Roguelike where you step into the chrome casing of a sentient gumball machine. Fire, bounce, and explode colorful projectiles off the environment to defeat hordes of naughty children in a sugar-fueled frenzy of physics-based combat.",
      tag: "Featured",
      genre: "Action Roguelike FPS",
      status: "EARLY ACCESS",
      release: "Q2 2026",
      steamUrl: "https://store.steampowered.com",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      imageUrl: "https://lh3.googleusercontent.com/aida/ADBb0ujo6mDF9qm35zpf83jMYnPAd_XY8khg9IL5TwA2A0nnscvW7xcer8OLmKh9IjxKFkNq6C6VYdYI-uOuSzElEBu0uStgV2ClmiLLC5sZ6ZZju8NLCr-fofU54NgQZQGnLW-RmUwiI31g-xuoSOpurkM7BS-Ckm2EG5xmgXkuJMvd4LKP5mojeb80uHtF_fqWC3tINxlJvZDkvAU5GADatrFnx5Lgl8pDxoo3T-J7gFShsEgi_ewpJINRuN53kqpKPClBOy3DlWZd"
    }
  ],
  visions: [
    {
      id: "roguelike",
      title: "ROGUELIKE",
      description: "Hyper-polished systems that demand \"just one more run.\" We focus on tight loops and infinite variety.",
      iconName: "RefreshCw",
      tags: ["Infinite Replay", "Hardcore"]
    },
    {
      id: "horror",
      title: "HORROR",
      description: "Short, visceral experiences that stick in your brain. Atmospheric, terrifying, and masterfully paced.",
      iconName: "Skull",
      tags: ["Atmospheric", "Short-form"]
    },
    {
      id: "small-stories",
      title: "SMALL STORIES",
      description: "Narrative punch in under two hours. Experimental mechanics meeting human-centric storytelling.",
      iconName: "BookOpen",
      tags: ["Impactful", "Indie"]
    }
  ],
  founders: [
    {
      name: "Zaid",
      role: "CEO",
      description: "Visionary and strategist. Driving the high-velocity model to deliver pure, tactile gaming experiences."
    },
    {
      name: "Salem",
      role: "CTO",
      description: "Architect of systems. Ensuring every title is built on rock-solid, hyper-polished mechanics."
    },
    {
      name: "Mohammed",
      role: "CMO",
      description: "Voice of the studio. Connecting our high-quality games with the players who crave them most."
    }
  ]
};

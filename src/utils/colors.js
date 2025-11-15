export const getSpeciesColor = (species) => {
  const colors = {
    Human: { 
      bg: 'from-blue-600/30 to-cyan-600/30', 
      accent: 'border-blue-400/60', 
      text: 'text-blue-300',
      glow: 'shadow-blue-500/50'
    },
    Droid: { 
      bg: 'from-gray-600/30 to-slate-600/30', 
      accent: 'border-gray-400/60', 
      text: 'text-gray-300',
      glow: 'shadow-gray-500/50'
    },
    Wookiee: { 
      bg: 'from-amber-700/30 to-orange-700/30', 
      accent: 'border-amber-500/60', 
      text: 'text-amber-400',
      glow: 'shadow-amber-500/50'
    },
    Rodian: { 
      bg: 'from-emerald-600/30 to-green-600/30', 
      accent: 'border-emerald-400/60', 
      text: 'text-emerald-300',
      glow: 'shadow-emerald-500/50'
    },
    Hutt: { 
      bg: 'from-yellow-600/30 to-amber-600/30', 
      accent: 'border-yellow-500/60', 
      text: 'text-yellow-400',
      glow: 'shadow-yellow-500/50'
    },
    "Yoda's species": { 
      bg: 'from-lime-600/30 to-emerald-700/30', 
      accent: 'border-lime-400/60', 
      text: 'text-lime-300',
      glow: 'shadow-lime-500/50'
    },
    Trandoshan: { 
      bg: 'from-green-700/30 to-emerald-800/30', 
      accent: 'border-green-500/60', 
      text: 'text-green-400',
      glow: 'shadow-green-500/50'
    },
    "Mon Calamari": { 
      bg: 'from-cyan-600/30 to-blue-600/30', 
      accent: 'border-cyan-400/60', 
      text: 'text-cyan-300',
      glow: 'shadow-cyan-500/50'
    },
    Ewok: { 
      bg: 'from-orange-700/30 to-amber-800/30', 
      accent: 'border-orange-500/60', 
      text: 'text-orange-400',
      glow: 'shadow-orange-500/50'
    },
    Sullustan: { 
      bg: 'from-rose-600/30 to-pink-600/30', 
      accent: 'border-rose-400/60', 
      text: 'text-rose-300',
      glow: 'shadow-rose-500/50'
    },
    Neimodian: { 
      bg: 'from-teal-600/30 to-cyan-700/30', 
      accent: 'border-teal-400/60', 
      text: 'text-teal-300',
      glow: 'shadow-teal-500/50'
    },
    Gungan: { 
      bg: 'from-violet-600/30 to-purple-600/30', 
      accent: 'border-violet-400/60', 
      text: 'text-violet-300',
      glow: 'shadow-violet-500/50'
    },
    default: { 
      bg: 'from-purple-600/30 to-indigo-700/30', 
      accent: 'border-purple-400/60', 
      text: 'text-purple-300',
      glow: 'shadow-purple-500/50'
    }
  };
  
  return colors[species] || colors.default;
};

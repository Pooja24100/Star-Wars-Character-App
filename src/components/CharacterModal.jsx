import React, { useEffect } from 'react';
import { getSpeciesColor } from '../utils/colors';
import { formatDate } from '../utils/formatDate';

const StatCard = ({ label, value, icon }) => (
  <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-4 border-2 border-slate-700/50 hover:border-slate-600 transition-all hover:scale-105">
    <div className="flex items-center gap-3 mb-2">
      {icon && <div className="text-blue-400">{icon}</div>}
      <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">{label}</div>
    </div>
    <div className="text-2xl font-bold text-white capitalize">{value}</div>
  </div>
);

const CharacterModal = ({ character, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !character) return null;

  const colors = getSpeciesColor(character.speciesName);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-slate-700/50 shadow-2xl shadow-blue-500/20 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 overflow-hidden rounded-t-3xl">
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-60`}></div>
          <img
            src={`https://picsum.photos/seed/${character.name}/1200/400`}
            alt={character.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-slate-900/80 backdrop-blur-sm rounded-full hover:bg-slate-800 transition-all border-2 border-slate-700/50 hover:scale-110 group"
          >
            <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-2xl">
              {character.name}
            </h2>
            <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold border-2 ${colors.accent} ${colors.text} bg-slate-900/90 backdrop-blur-sm`}>
              <span className="w-2.5 h-2.5 rounded-full bg-current animate-pulse"></span>
              {character.speciesName}
            </span>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <section>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-5 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Physical Characteristics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard 
                label="Height" 
                value={character.height !== 'unknown' ? `${character.height} cm` : 'Unknown'}
                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>}
              />
              <StatCard 
                label="Mass" 
                value={character.mass !== 'unknown' ? `${character.mass} kg` : 'Unknown'}
                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>}
              />
              <StatCard 
                label="Birth Year" 
                value={character.birth_year}
                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
              />
            </div>
          </section>

          {/* Appearance */}
          <section>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-5 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Appearance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard label="Hair Color" value={character.hair_color} />
              <StatCard label="Skin Color" value={character.skin_color} />
              <StatCard label="Eye Color" value={character.eye_color} />
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-5 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
              Film Appearances
            </h3>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border-2 border-slate-700/50">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-lg">Number of Films</span>
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {character.films.length}
                </span>
              </div>
            </div>
          </section>

          {character.homeworld && (
            <section>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-5 flex items-center gap-3">
                <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Homeworld
              </h3>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border-2 border-slate-700/50 space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                  <span className="text-slate-400">Name</span>
                  <span className="text-white font-semibold text-lg">{character.homeworld.name}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                  <span className="text-slate-400">Terrain</span>
                  <span className="text-white font-semibold capitalize">{character.homeworld.terrain}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                  <span className="text-slate-400">Climate</span>
                  <span className="text-white font-semibold capitalize">{character.homeworld.climate}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Population</span>
                  <span className="text-white font-semibold">
                    {character.homeworld.population !== 'unknown' 
                      ? parseInt(character.homeworld.population).toLocaleString() 
                      : 'Unknown'}
                  </span>
                </div>
              </div>
            </section>
          )}

          <section>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-5 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Additional Information
            </h3>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border-2 border-slate-700/50">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Date Added to Database</span>
                <span className="text-white font-mono text-lg">{formatDate(character.created)}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;

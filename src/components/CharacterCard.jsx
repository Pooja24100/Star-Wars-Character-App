import React from 'react';
import { getSpeciesColor } from '../utils/colors';

const CharacterCard = ({ name, species, imageUrl, onClick }) => {
  const colors = getSpeciesColor(species);
  
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
      
      <div className={`relative bg-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-slate-700/50 group-hover:border-slate-600 transition-all duration-300 shadow-xl ${colors.glow} group-hover:shadow-2xl`}>
        <div className="relative h-56 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-40`}></div>
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>

        <div className="p-5 space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 line-clamp-1">
            {name}
          </h3>
          
          <div className="flex items-center justify-between">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold border-2 ${colors.accent} ${colors.text} bg-gradient-to-r ${colors.bg} backdrop-blur-sm`}>
              <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
              {species}
            </span>
            
            <svg className="w-6 h-6 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className={`h-1 bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      </div>
    </div>
  );
};

export default CharacterCard;

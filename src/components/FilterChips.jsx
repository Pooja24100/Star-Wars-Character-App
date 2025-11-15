import React from 'react';

const FilterChips = ({ species, selectedSpecies, onSpeciesChange }) => (
  <div className="flex flex-wrap gap-3">
    <button
      onClick={() => onSpeciesChange('')}
      className={`group relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
        selectedSpecies === ''
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 scale-105'
          : 'bg-slate-800/80 text-gray-300 hover:bg-slate-700/80 border-2 border-slate-700/50 hover:border-slate-600 hover:scale-105'
      }`}
    >
      {selectedSpecies === '' && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30 blur transition-opacity"></span>
      )}
      <span className="relative flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        All Species
      </span>
    </button>
    
    {species.map((s) => (
      <button
        key={s}
        onClick={() => onSpeciesChange(s)}
        className={`group relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
          selectedSpecies === s
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 scale-105'
            : 'bg-slate-800/80 text-gray-300 hover:bg-slate-700/80 border-2 border-slate-700/50 hover:border-slate-600 hover:scale-105'
        }`}
      >
        {selectedSpecies === s && (
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30 blur transition-opacity"></span>
        )}
        <span className="relative">{s}</span>
      </button>
    ))}
  </div>
);

export default FilterChips;

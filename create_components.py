#!/usr/bin/env python3
import os

# Define all component files with enhanced designs
components = {}

# Character Card Component
components['src/components/CharacterCard.jsx'] = '''import React from 'react';
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
'''

# Search Bar Component with enhanced design
components['src/components/SearchBar.jsx'] = '''import React from 'react';

const SearchBar = ({ value, onChange }) => (
  <div className="relative w-full max-w-3xl group">
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
        <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search the galaxy for characters..."
        className="w-full pl-14 pr-6 py-4 bg-slate-900/80 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl text-white text-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all shadow-xl"
      />
    </div>
  </div>
);

export default SearchBar;
'''

# Create all component files
for filepath, content in components.items():
    full_path = os.path.join('/home/claude/star-wars-browser', filepath)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w') as f:
        f.write(content)
    print(f"Created: {filepath}")

print("\nComponent files created successfully!")

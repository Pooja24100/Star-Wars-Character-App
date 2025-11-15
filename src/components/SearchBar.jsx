import React from 'react';

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

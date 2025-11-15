import React from 'react';

const LoadingCard = () => (
  <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border-2 border-slate-700/50 shadow-xl">
    <div className="animate-pulse space-y-4">
      <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl"></div>
      <div className="space-y-3">
        <div className="h-6 bg-slate-700 rounded-lg w-3/4"></div>
        <div className="h-5 bg-slate-700 rounded-lg w-1/2"></div>
      </div>
    </div>
  </div>
);

export default LoadingCard;

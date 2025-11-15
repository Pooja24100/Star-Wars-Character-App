import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex items-center justify-center gap-2 mt-12">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-xl text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 hover:scale-110 transition-all border-2 border-slate-700/50 disabled:hover:scale-100 shadow-lg"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <div className="flex gap-2">
      {[...Array(totalPages)].map((_, idx) => {
        const page = idx + 1;
        if (
          page === 1 ||
          page === totalPages ||
          (page >= currentPage - 1 && page <= currentPage + 1)
        ) {
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`min-w-[48px] px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
                currentPage === page
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 scale-110'
                  : 'bg-slate-800/80 text-gray-300 hover:bg-slate-700 border-2 border-slate-700/50 hover:border-slate-600 hover:scale-105'
              }`}
            >
              {page}
            </button>
          );
        } else if (page === currentPage - 2 || page === currentPage + 2) {
          return <span key={page} className="px-2 py-3 text-slate-500 text-xl">···</span>;
        }
        return null;
      })}
    </div>

    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-xl text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 hover:scale-110 transition-all border-2 border-slate-700/50 disabled:hover:scale-100 shadow-lg"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
);

export default Pagination;

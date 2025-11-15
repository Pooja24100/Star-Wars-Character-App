import React, { useState, useMemo } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import SearchBar from '../components/SearchBar';
import FilterChips from '../components/FilterChips';
import CharacterCard from '../components/CharacterCard';
import CharacterModal from '../components/CharacterModal';
import Pagination from '../components/Pagination';
import LoadingCard from '../components/LoadingCard';

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { characters, loading, error, totalPages, allSpecies } = useCharacters(currentPage);

  const filteredCharacters = useMemo(() => {
    return characters.filter((char) => {
      const matchesSearch = char.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSpecies = selectedSpecies === '' || char.speciesName === selectedSpecies;
      return matchesSearch && matchesSpecies;
    });
  }, [characters, searchQuery, selectedSpecies]);

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedCharacter(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl shadow-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  <span className="text-white">Star Wars </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Characters
                  </span>
                </h1>
                <p className="text-sm text-slate-400 mt-1">Explore heroes and villains from a galaxy far, far away</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 space-y-6">
          <div className="flex justify-center">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          
          {!loading && allSpecies.length > 0 && (
            <div className="flex justify-center">
              <FilterChips
                species={allSpecies}
                selectedSpecies={selectedSpecies}
                onSpeciesChange={setSelectedSpecies}
              />
            </div>
          )}
        </div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {[...Array(10)].map((_, idx) => (
              <LoadingCard key={idx} />
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-6 animate-pulse">
              <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Oops! Something went wrong</h3>
            <p className="text-slate-400 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && filteredCharacters.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-full mb-6">
              <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">No characters found</h3>
            <p className="text-slate-400 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSpecies('');
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg"
            >
              Clear Filters
            </button>
          </div>
        )}

        {!loading && !error && filteredCharacters.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              {filteredCharacters.map((character, idx) => (
                <CharacterCard
                  key={character.name + idx}
                  name={character.name}
                  species={character.speciesName}
                  imageUrl={`https://picsum.photos/seed/${character.name}/500/400`}
                  onClick={() => handleCardClick(character)}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </main>

      <CharacterModal
        character={selectedCharacter}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default CharacterList;

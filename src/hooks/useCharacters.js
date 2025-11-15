import { useState, useEffect } from 'react';

export const useCharacters = (page) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [allSpecies, setAllSpecies] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
        if (!response.ok) throw new Error('Failed to fetch characters');
        
        const data = await response.json();
        
        const enrichedCharacters = await Promise.all(
          data.results.map(async (character) => {
            let speciesName = 'Human';
            
            if (character.species.length > 0) {
              try {
                const speciesResponse = await fetch(character.species[0]);
                const speciesData = await speciesResponse.json();
                speciesName = speciesData.name;
              } catch (e) {
                console.error('Failed to fetch species', e);
              }
            }
            
            let homeworld = null;
            try {
              const homeworldResponse = await fetch(character.homeworld);
              homeworld = await homeworldResponse.json();
            } catch (e) {
              console.error('Failed to fetch homeworld', e);
            }

            return {
              ...character,
              speciesName,
              homeworld,
              created: character.created
            };
          })
        );

        setCharacters(enrichedCharacters);
        setTotalPages(Math.ceil(data.count / 10));
        
        const species = [...new Set(enrichedCharacters.map(c => c.speciesName))];
        setAllSpecies(species);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  return { characters, loading, error, totalPages, allSpecies };
};

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

interface Character {
  id: number;
  name: string;
  image: string;
}

const imageFeedStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
};

const characterCardStyle = {
  textAlign: "center",
};

const imageStyle = {
  maxWidth: "100%",
};

const paginationStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
};

const buttonStyle = {
  padding: "10px 20px",
  margin: "0 10px",
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const disabledButtonStyle = {
  backgroundColor: "#ccc",
  cursor: "not-allowed",
};

const CharacterFeed: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]); // Provide the type here
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 12;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCharacters();
  }, []);

  const totalPages = Math.ceil(characters.length / charactersPerPage);
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Rick and Morty Character Feed</h1>
      <div style={imageFeedStyle} className="image-feed">
        {currentCharacters.map((character) => (
          <div key={character.id} className="character-card">
            <img
              src={character.image}
              alt={character.name}
              style={imageStyle}
            />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterFeed;

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

interface Character {
  id: number;
  name: string;
  image: string;
}

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      const characterData = response.data.results;
      setCharacters(characterData);
    });
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Image
              src={character.image}
              alt={character.name}
              width={200}
              height={200}
            />
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;

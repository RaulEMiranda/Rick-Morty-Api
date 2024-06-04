import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  let personajes = [];

  useEffect(() => {
    const getData = async () => {
      for (let i = 1; i < 43; i++) {
        try {
          let res = await axios.get(
              `https://rickandmortyapi.com/api/character?page=${i}`
            ),
            json = res.data.results;
          //console.log(json);
          json.map((personaje) => {
            personajes.push(personaje);
          });
        } catch (error) {
          console.log("Error");
        }
      }
      setCharacters(personajes);
    };
    getData();
  }, []);

  const data = {
    characters,
  };

  return (
    <CharactersContext.Provider value={data}>
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersProvider };
export default CharactersContext;

import { useContext, useEffect, useState } from "react";
import CharactersContext from "../context/CharactersContext";
import EpisodesContext from "../context/EpisodesContext";
import { Loader } from "./Loader";

export const CharacterPerEpisode = ({ id }) => {
  const { characters } = useContext(CharactersContext)
  const { episodios } = useContext(EpisodesContext);
  const personajes = [];
  const [allCharacters, setAllCharacters] = useState([]);
  
  useEffect(() => {
    console.log(characters, episodios);
    characters.map((el) => {
      episodios[id - 1].characters.map((el2) => {
        if (el2 === el.url) {
          personajes.push(el);
        }
      });
    });

    setAllCharacters(personajes);
  }, []);

  return (
    <>
      <section>
        {allCharacters.length === 0 ? (
          <Loader />
        ) : (
          allCharacters.map((character) => (
            <article key={character.id}>
              <img src={character.image} alt={character.name} />
              <h4>{character.name}</h4>
            </article>
          ))
        )}
      </section>
    </>
  );
};

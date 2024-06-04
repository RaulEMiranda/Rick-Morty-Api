import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { CardCharacter } from "./CardCharacter";
import { PaginationList } from "./PaginationList";
import { useParams } from "react-router-dom";

export const Personajes = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    const getData = async (url) => {
      console.log(url,id);
      let res = await axios.get(url),
        json = res.data.results;
      //console.log(res.data);
      setCharacters([]);
      json.map((character) => {
        let personaje = {
          id: character.id,
          gender: character.gender,
          name: character.name,
          species: character.species,
          status: character.status,
          img: character.image,
        };
        setCharacters((characters) => [...characters, personaje]);
      });
    };
    getData(`https://rickandmortyapi.com/api/character?page=${id || currentPage}`);
  }, [currentPage]);

  return (
    <>
      <section className="cards-container">
        {characters.length === 0 ? (
          <Loader />
        ) : (
          characters.map((ch) => (
            <CardCharacter
              key={ch.id}
              gender={ch.gender}
              name={ch.name}
              species={ch.species}
              status={ch.status}
              img={ch.img}
            />
          ))
        )}
      </section>
      <PaginationList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
   
      />
    </>
  );
};

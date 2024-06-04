import { useContext, useEffect, useState } from "react";
import EpisodesContext from "../context/EpisodesContext";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { CharacterPerEpisode } from "./CharacterPerEpisode";

export const Episode = () => {
  const { episodes, episodios } = useContext(EpisodesContext);
  const { id } = useParams();



  return (
    <>
      <section>
        {episodios.length === 0 ? (
         <Loader />
        ) : (
          <>
            <h3 style={{ textAlign: "center" }}>
              Episodio N°{episodios[parseInt(id)-1].id}
            </h3>
            <p style={{ textAlign: "center" }}>{episodios[parseInt(id)-1].name}</p>
            <p style={{ textAlign: "center" }}>
              Estreno: {episodios[parseInt(id)-1].created}
            </p>
            <p>Personajes que aparecen en este episodio: </p>
            <CharacterPerEpisode id={parseInt(id)}/>
          </>
        )}
      </section>
    </>
  );
};

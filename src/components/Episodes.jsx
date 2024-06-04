import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CardEpisode } from "./CardEpisode";
import EpisodesContext from "../context/EpisodesContext";
import { Loader } from "./Loader";

export const Episodes = () => {
  const { episodios } = useContext(EpisodesContext);

  return (
    <>
      <section className="episodes-container">
        {episodios.length === 0 ? (
          <Loader />
        ) : (
          episodios.map((episodio) => (
            <CardEpisode
              key={episodio.id}
              id={episodio.id}
              characters={episodio.characters}
              air_date={episodio.air_date}
              name={episodio.name}
            />
          ))
        )}
      </section>
    </>
  );
};

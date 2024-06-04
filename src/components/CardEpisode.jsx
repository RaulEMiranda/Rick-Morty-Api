import React from "react";
import { Link } from "react-router-dom";

export const CardEpisode = ({ id, characters, air_date, name }) => {
  return (
    <>
      <article className="episode">
        <span>Episodio {id}({name}): </span>
        <span>Estrenado el {air_date}</span>
        <Link to={`/episodes/${id}`}>Ver mas...</Link>
      </article>
    </>
  );
};

import React from "react";

export const CardCharacter = ({gender, name, species, status, img}) => {
  return (
    <>
      <article className="card">
        <img src={img} alt={name} />
        <section className="card-description">
          <h3>{name}</h3>
          <span>Gender: {gender}</span>
          <span>Specie: {species}</span>
          <span>Status: {status}</span>
        </section>
      </article>
    </>
  );
};

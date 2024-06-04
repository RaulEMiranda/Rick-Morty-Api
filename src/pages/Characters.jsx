import { Outlet, useParams } from "react-router-dom";

import "./Characters.css";
export const Characters = () => {

  return (
    <>
      <main className="main">
        <section className="container-home">
          <h2>All Characters of Rick And Morty </h2>
          <Outlet />
        </section>
      </main>
    </>
  );
};

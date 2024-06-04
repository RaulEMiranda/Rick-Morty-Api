import React from "react";
import { Outlet } from "react-router-dom";
import "./EpisodesMain.css"

export const EpisodesMain = () => {
  return (
    <main className="main">
       <section className="container-home">
          <h2>All episodes of Rick And Morty </h2>
          <Outlet />
        </section>
    </main>
  );
};

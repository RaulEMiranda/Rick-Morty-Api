import "./Home.css";

export const Home = () => {
  return (
    <>
      <main className="main">
        <section className="container-home">
          <h1 className="title-home">Rick and Morty</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="img-primary"
              src="./src/assets/rick-morty.png"
              alt=""
            />
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            corrupti? Exercitationem illum cumque aliquam modi voluptatem? Ea,
            repellat sequi vitae labore at natus eveniet sed earum consectetur
            possimus maiores itaque?
          </p>
        </section>
      </main>
    </>
  );
};

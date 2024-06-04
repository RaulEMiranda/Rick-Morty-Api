export const Contactus = () => {
  return (
    <main className="main">
      <section className="container-home">
        <h2>Envianos tu opinion </h2>
        <form
          action="https://formsubmit.co/rauledmore98@outlook.com"
          method="post"
          target="_blank"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Escribe tu nombre..."
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Escribe tu correo..."
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <textarea name="" id="" cols="30" rows="10" required></textarea>
          <input
            className="submit"
            type="submit"
            value="Enviar Correo"
           // onClick={(e) => e.preventDefault()}
          />
        </form>
      </section>
    </main>
  );
};

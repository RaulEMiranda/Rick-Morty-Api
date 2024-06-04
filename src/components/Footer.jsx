import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BsTwitch } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="container-footer">
          <article className="img-social">
            <img src="./src/assets/rickHome.png" alt="rick-footer" />
            <section className="icons-social">
              <AiFillFacebook />
              <FaInstagram />
              <BsTwitch />
            </section>
          </article>
          <article className="footer-description">
            <section className="flex-column">
              <h3>Resources</h3>
              <a href="https://rickandmortyapi.com/documentation">
                Rick and Morty API
              </a>
            </section>
            <section className="flex-column">
              <h3>Company</h3>
              <span>R&L Solutions</span>
              <span>Kakarotinho SAC</span>
            </section>
            <section className="flex-column">
              <h3>Social</h3>
              <a
                href="https://www.facebook.com/reel/304049212403756"
                target="_blank"
              >
                Facebook
              </a>
              <a href="https://www.twitch.tv/iwobeka" target="_blank">
                Twitch
              </a>
              <a
                href="https://www.instagram.com/reel/CyjbpEYyWzV/?fbclid=IwAR2BjJchsvK9qQLO3WQVqGw-e9vcN8b0zVzz_sxRPce7Dmkyk4kSWnZ4gcY"
                target="_blank"
              >
                Instagram
              </a>
            </section>
          </article>
        </section>
      </footer>
    </>
  );
};

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src="src/assets/rickHome.png" alt="Rick-logo" />
        </Link>
        <nav className="header-menu">
          <Link to="characters">Characters</Link>
          <Link to="episodes">Episodes</Link>
          <Link to="contact-us">Contact Us</Link>
          <Link></Link>
        </nav>
      </header>
    </>
  );
};

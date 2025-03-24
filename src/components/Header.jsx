import navLinks from "../data/navLinks";

export default function Header() {
  // LOGIC HERE

  return (
    <header>
      <nav className="menu">
        <div className="logo">
          <img src="../../public/dc-logo.png" alt="" />
        </div>
        <ul className="unstyled-list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

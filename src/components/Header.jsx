export default function Header({ links }) {
  // LOGIC HERE

  return (
    <header>
      <nav className="menu">
        <div className="logo">
          <img src="../../public/dc-logo.png" alt="" />
        </div>
        <ul className="unstyled-list">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

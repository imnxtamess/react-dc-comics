export default function Header() {
  // LOGIC HERE

  return (
    <header>
      <nav className="menu">
        <div className="logo">
          <img src="/dc-logo.png" alt="" />
        </div>
        <ul className="unstyled-list">
          <li>
            <a href="">characters</a>
          </li>
          <li>
            <a href="">comics</a>
          </li>
          <li>
            <a href="">movies</a>
          </li>
          <li>
            <a href="">tv</a>
          </li>
          <li>
            <a href="">games</a>
          </li>
          <li>
            <a href="">collectibles</a>
          </li>
          <li>
            <a href="">videos</a>
          </li>
          <li>
            <a href="">fans</a>
          </li>
          <li>
            <a href="">news</a>
          </li>
          <li>
            <a href="">shop</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

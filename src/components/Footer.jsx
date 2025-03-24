export default function Footer({ comicsLinks, shopLinks, dcLinks, siteLinks }) {
  // LOGIC HERE

  return (
    <footer>
      <div className="upper_footer_container">
        <div className="upper_footer d-flex">
          <div class="col-2">
            <ul className="unstyled-list useful-links-list">
              <h3>DC COMICS</h3>
              {comicsLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
            <ul className="unstyled-list useful-links-list">
              <h3>SHOP</h3>
              {shopLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div class="col-2">
            <ul className="unstyled-list useful-links-list">
              <h3>DC</h3>
              {dcLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div class="col-2">
            <ul className="unstyled-list useful-links-list">
              <h3>SITES</h3>
              {siteLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
      <div className="lower_footer_container">
        <div className="lower_footer d-flex">
          <div className="btn">
            <a href="">sign up now!</a>
          </div>
          <div className="socials d-flex">
            <h3>follow us</h3>
            <a href="">
              <img src="/footer-facebook.png" alt="" />
            </a>
            <a href="">
              <img src="/footer-twitter.png" alt="" />
            </a>
            <a href="">
              <img src="/footer-youtube.png" alt="" />
            </a>
            <a href="">
              <img src="/footer-pinterest.png" alt="" />
            </a>
            <a href="">
              <img src="/footer-periscope.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

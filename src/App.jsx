import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import navLinks from "./data/navLinks";
import {
  footerComicsLinks,
  footerShopLinks,
  footerDcLinks,
  footerSiteLinks,
} from "./data/footerLinks";

function App() {
  return (
    <>
      <Header links={navLinks} />
      <Main />
      <Footer
        comicsLinks={footerComicsLinks}
        shopLinks={footerShopLinks}
        dcLinks={footerDcLinks}
        siteLinks={footerSiteLinks}
      />
    </>
  );
}

export default App;

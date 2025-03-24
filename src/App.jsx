import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import navLinks from "./data/navLinks";

function App() {
  return (
    <>
      <Header links={navLinks} />
      <Main />
      <Footer />
    </>
  );
}

export default App;

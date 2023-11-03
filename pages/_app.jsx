import Nav from "../components/nav";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Component {...pageProps} />
      </main>

      <footer>(c) 2023</footer>
    </>
  );
}

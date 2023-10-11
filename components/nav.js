import Link from "next/link";
//import css from "./nav.module.css";

export default function Nav() {
  return (
    <nav className="header-nav flex">
      <span className="header-nav__link"><Link href="/">Фильмотека</Link></span> 
      <span className="header-nav__link"><Link href="/search">Поиск</Link></span>
      <span className="header-nav__link"><Link href="/selected">Избранное</Link></span>
    </nav>
  );
}

import Link from "next/link";
import { useState } from "react";
//import css from "./nav.module.css";

export default function Nav() {
  const [active, setActive] = useState("");

  function toggleActive(event) {
    setActive(event.target.id);
  }

  return (
    <nav className="header-nav flex">
      <span
        onClick={() => toggleActive(event)}
        className={"nav-link" + (active === "first" ? " active" : "")}
      >
        <Link id="first" href="/">
          Фильмотека
        </Link>
      </span>
      <span
        onClick={() => toggleActive(event)}
        className={"nav-link" + (active === "second" ? " active" : "")}
      >
        <Link id="second" href="/search">
          Информация о фильме
        </Link>
      </span>
      <span
        onClick={() => toggleActive(event)}
        className={"nav-link" + (active === "third" ? " active" : "")}
      >
        <Link id="third" href="/selected">
          Избранное
        </Link>
      </span>
    </nav>
  );
}

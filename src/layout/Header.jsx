import React from "react";

export default function Header() {
  return (
    <header>
      <nav aria-label="main">
        <ul className="navigation-top">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/albums">Photo albums</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

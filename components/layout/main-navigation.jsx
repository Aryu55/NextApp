import Link from "next/link";
import { header } from "./main-navigation.module.css";
import Logo from "./logo.jsx"

const mainnavigation = () => {
  return (
    <header className={header}>
      <Link href="/">
        <a>
          <Logo></Logo>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default mainnavigation;

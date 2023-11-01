import React from "react";
import style from "../navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
      <h1> Jason Jelincic&aposs Personal Website </h1>
      <nav>
        <Link href="/" >Home</Link>
        <Link href="/about" >About Me</Link>
				<Link href="/resume" >Resume</Link>
      </nav>
    </header>
  );
}
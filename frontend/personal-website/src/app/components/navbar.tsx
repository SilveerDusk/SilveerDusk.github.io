import React from "react";
import style from "@/components/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
      <h1> Jason Jelincic&#39;s Personal Website </h1>
      <nav>
        <Link href="/" >Home</Link>
        <Link href="/blogs" >Blog</Link>
        <Link href="/protfolio" >Protfolio</Link>
				<Link href="/resume" >Resume</Link>
				<Link href="/contact" >Connect With Me</Link>
      </nav>
    </header>
  );
}
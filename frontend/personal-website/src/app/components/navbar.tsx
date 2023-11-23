import React from "react";
import style from "@/components/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
      <Link href="/"><h1 className={style.logo_a}> Jason Jelincic&#39;s Personal Website </h1></Link>
      <nav>
        <Link href="/" className={style.navbar_li_a}>Home</Link>
        <Link href="/blog" className={style.navbar_li_a}>Blog</Link>
        <Link href="/protfolio" className={style.navbar_li_a}>Protfolio</Link>
				<Link href="/resume" className={style.navbar_li_a}>Resume</Link>
				<Link href="/contact" className={style.navbar_li_a}>Connect With Me</Link>
      </nav>
    </header>
  );
}
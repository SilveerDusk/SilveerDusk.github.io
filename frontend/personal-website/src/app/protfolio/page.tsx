import Image from "next/image"

export default function Protfolio() {
  return (<div>
			<div className="centered">
        <h1 className="page-title">My Protfolio</h1>
        <h2>I did a thing once... well maybe a few times.</h2>
        <div className="project">
          <a href="index.html">
            <Image src="/JasonWebsite.png" alt="Photo of the Website" width={600} height={600}/>
          </a>
          <div className="project-details">
            <h3 className="project-name">
              My Personal Website
            </h3>
            <p className="project-description">
              I made my own personal website using a mix of html and css.
            </p>
            <a href="index.html">Check it Out!</a>
          </div>
        </div>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </div>
			</div>) 
}
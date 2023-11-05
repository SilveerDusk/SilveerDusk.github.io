import Image from "next/image"
import Link from "next/link"

export default function Protfolio() {
  return (<div>
			<div className="centered">
        <h1 className="title">My Protfolio</h1>
        <h2 className="sub-title">I did a thing once... well maybe a few times.</h2>
        <div className="project">
          <a href="index.html">
            <Image className="project_img" src="/JasonWebsite.png" alt="Photo of the Website" width={500} height={500}/>
          </a>
          <div className="project_details">
            <h3 className="project_title">
              My Personal Website
            </h3>
            <p className="project_description">
              I made my own personal website using a mix of html and css.
            </p>
            <Link className="project_link" href="/">Check it Out!</Link>
          </div>
        </div>
      </div>
			</div>) 
}
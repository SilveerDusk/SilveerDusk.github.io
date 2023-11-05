import Image from "next/image"

// You can name the function within page.tsx anything you want.
export default function Home() {
  return (<div>
				<div className="centered">
        <h1 className="title">Welcome to My Website!</h1>
        <div className="about">
          <div className="about-image">
            <Image src="/Slackgotophotocopy.jpeg" alt="A Photo of Me" width={400} height={400} ></Image>
          </div>
          <div className="about-text">
            <p>My name is <strong>Jason Jelincic</strong>, I am a <em>second year</em> computer science student at <strong>Cal Poly SLO </strong>
             with a minor in Chinese.</p> 
            <p>I am the <em>Outreach officer</em> for <strong>CS+AI</strong> and excited for the year and the oppertunities it will present.</p>
          </div>
        </div>
      </div>
			</div>) 
}
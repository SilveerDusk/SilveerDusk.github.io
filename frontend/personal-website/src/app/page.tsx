import Image from "next/image"
import style from '@/page.module.css'

// You can name the function within page.tsx anything you want.
export default function Home() {
  return (<div>
				<div className={style.centered}>
        <h1 className={style.title}>Welcome to My Website!</h1>
        <div className={style.about}>
          <div className={style.about_image}>
            <Image src="/RandomSelfie.jpeg" alt="A Photo of Me" width={800} height={800} ></Image>
          </div>
          <div className={style.about_text}>
            <p>My name is <strong>Jason Jelincic</strong>, I am a <em>third year</em> computer science student at <strong>Cal Poly SLO </strong>
             with a minor in Chinese. This fall I am studying aboard in Taiwan at National Taiwan University (NTU) where I am finishing my chinese
             minor while learning about Taiwans importance on a global scale!</p> 
            <p>I am the also a <em>Vice President</em> for Cal Poly's Computer Science and Artifical Intelligence Club (<strong>CS+AI</strong>) 
            and a tech lead for Hack4Impact's SLO Charter. 
            I am excited for the year and the opportunities it will present and I hope you enjoy looking around my site!</p>
          </div>
        </div>
      </div>
			</div>) 
}
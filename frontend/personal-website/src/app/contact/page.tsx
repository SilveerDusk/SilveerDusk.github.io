import Image from "next/image"

export default function Contact() {
  return (<div>
			<div className="centered">
        <h1 className="title">Connect With Me</h1>
        <form>
          <div>
            <section>
              <label htmlFor="name">Name</label>
              <label htmlFor="primary">Preferred Form of Contact</label>
              <label htmlFor="email">Email</label>
              <label htmlFor="linkedin">LinkedIn</label>
              <label htmlFor="message">Message</label>
            </section>
            <section>
              <input type="text" name="name" id="name" placeholder="Name" required/>
              <input type="text" name="primary" id="primary" placeholder="Preferred Form of Contact" required/>
              <input type="text" name="email" id="email" placeholder="Email"/>
              <input type="text" name="linkedin" id="linkedin" placeholder="LinkedIn URL"/>
              <input type="text" name="message" id="message" placeholder="Message" required/>
            </section>
          </div>
          <section>
            <input type="submit" name="submit" id="submit"/>
          </section>
        </form>
      </div>
			</div>) 
}
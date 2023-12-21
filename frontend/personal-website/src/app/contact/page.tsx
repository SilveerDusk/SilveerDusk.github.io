'use client';

async function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  try {
    //get form submission event
    const formElement = e.target as HTMLFormElement;

      // Access values directly from the form elements
      const nameInput =
        formElement.querySelector<HTMLInputElement>(
          'input[name="name"]'
        );
      const primaryInput =
        formElement.querySelector<HTMLTextAreaElement>(
          'input[name="primary"]'
        );
      const emailInput = 
        formElement.querySelector<HTMLInputElement>(
          'input[name="email"]'
        );
      const messageInput = 
        formElement.querySelector<HTMLInputElement>(
          'input[name="message"]'
        );

    const data = {
    service_id: 'contact_service',
    template_id: 'contact_form',
    user_id: '9rugHnOg7ap1QwtXd',
    template_params: {
        'user_name': nameInput?.value || "",
        'user_primary': primaryInput?.value || "",
        'user_email': emailInput?.value || "",
        'message': messageInput?.value || ""
      }
    };
    
    await console.log(data);

    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': "application/json" }
    }).then(function() {
      alert('Your mail is sent!');
    })

    //clear form data
    if (nameInput) nameInput.value = "";
    if (primaryInput) primaryInput.value = "";
    if (emailInput) emailInput.value = "";
    if (messageInput) messageInput.value = "";

  } catch (err) {
    alert('Oops... ' + JSON.stringify(err));
  }
}

export default function Contact() {
  return (<div>
			<div className="centered">
        <h1 className="title">Connect With Me</h1>
        <form  onSubmit={handleSumbit}>
          <div>
            <section>
              <label htmlFor="name">Name</label>
              <label htmlFor="primary">Preferred Form of Contact</label>
              <label htmlFor="email">Email</label>
              <label htmlFor="message">Message</label>
            </section>
            <section>
              <input type="text" name="name" id="name" placeholder="Name" required/>
              <input type="text" name="primary" id="primary" placeholder="Preferred Form of Contact" required/>
              <input type="text" name="email" id="email" placeholder="Email" required/>
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
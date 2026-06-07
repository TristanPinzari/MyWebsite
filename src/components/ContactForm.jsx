import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div id="contactForm" className="fadeIn">
        <p className="centerText">Message sent!</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    const form = e.target;
    const data = new URLSearchParams(new FormData(form)).toString();
    e.preventDefault();
    fetch(form.action, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data,
    }).then((r) => r.json()).then((r) => setSubmitted(r.success));
  };

  return (
    <form
      id="contactForm"
      className="fadeIn"
      action={["https://api.web", "3forms.com/submit"].join("")}
      onSubmit={handleSubmit}
    >
      <p className="centerText">Ready to connect and chat anytime!</p>
      <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />
      <input type="text" name="name" placeholder="NAME" required />
      <input type="email" name="email" required placeholder="EMAIL" />
      <textarea name="message" placeholder="MESSAGE" required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

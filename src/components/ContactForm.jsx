import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("Ready to connect and chat anytime!");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(["https://api.web", "3forms.com/submit"].join(""), {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((r) => r.json())
      .then((r) => setResult(r.success ? "Message sent!" : r.message))
      .catch(() =>
        setResult(
          "Something went wrong with the free API. Please try again later or email me at tristanpinzari@gmail.com.",
        ),
      );
  };

  return (
    <form id="contactForm" className="fadeIn" onSubmit={handleSubmit}>
      <p className="centerText">{result}</p>
      <input
        type="hidden"
        name="access_key"
        value={import.meta.env.VITE_WEB3FORMS_KEY}
      />
      <input type="text" name="name" placeholder="NAME" required />
      <input type="email" name="email" required placeholder="EMAIL" />
      <textarea name="message" placeholder="MESSAGE" required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

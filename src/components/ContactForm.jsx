import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("Ready to connect and chat anytime!");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setResult(data.success ? "Message sent!" : data.message);
  };

  return (
    <form id="contactForm" onSubmit={onSubmit} className="fadeIn">
      <p className="centerText">{result}</p>
      <input type="text" name="name" placeholder="NAME" required />
      <input type="email" name="email" required placeholder="EMAIL" />
      <textarea name="message" placeholder="MESSAGE" required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("Ready to connect and chat anytime!");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f59554ff-cd1f-45e6-932b-5701f3f396c6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    console.log(formData);

    const data = await response.json();
    setResult(
      data.success
        ? "Message sent!"
        : "Seems like the API broke. You can directly email me with tristanpinzari@gmail.com"
    );
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

"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    setNotice("Your email app should open with a draft. If it doesn't, email me directly at the address alongside this form.");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Your name
          <input autoComplete="name" name="name" placeholder="Jane Smith" required />
        </label>
        <label>
          Your email
          <input
            autoComplete="email"
            name="email"
            placeholder="jane@example.com"
            required
            type="email"
          />
        </label>
      </div>
      <label>
        How can I help?
        <textarea
          name="message"
          placeholder="Tell me a little about your project or opportunity…"
          required
          rows={4}
        />
      </label>
      <div className="form-bottom">
        <button className="button button-primary" type="submit">
          Create email draft <ArrowUpRight size={16} />
        </button>
        <p aria-live="polite" className="form-notice">{notice}</p>
      </div>
    </form>
  );
}

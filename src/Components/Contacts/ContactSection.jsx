import React, { useEffect, useState } from "react";
import styles from "./ContactSection.module.css";
import data from "../../Data/contact.json";
import emailjs from "emailjs-com";

function ContactSection() {
  const [contactData, setContactData] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setContactData(data);
  }, []);

  if (!contactData) return null;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_portfolio",   // from EmailJS dashboard
        "template_portfolio",  // from EmailJS template
        e.target,
        "sVHU1KsDRoBP_mjet"    // from EmailJS account
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send ❌ Try again later.");
        }
      );
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>{contactData.header}</h2>

      <div className={styles.grid}>
        {/* Left column: contact form */}
        <form className={styles.form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className={styles.input}
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className={styles.textarea}
            rows="5"
            required
          />
          <button type="submit" className={styles.submit}>
            Send
          </button>
          {status && <p className={styles.status}>{status}</p>}
        </form>

        {/* Right column: socials */}
        <div className={styles.socials}>
          <ul>
            {contactData.socials.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
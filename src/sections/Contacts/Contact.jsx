import React from "react";
import style from "./ContactStyle.module.css";

function Contact() {
  return (
    <section id="contact" className={style.container}>
      <h1 className="sectionTitle">Contacts</h1>
      <form action="https://formspree.io/f/xldbbawo" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          ></input>
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          ></input>
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            type="message"
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit"></input>
      </form>
    </section>
  );
}

export default Contact;

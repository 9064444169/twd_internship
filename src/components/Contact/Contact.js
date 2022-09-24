import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Send
            </button>
          </form>
        </article>
      </section>
    </>
  );
};

export default Contact;

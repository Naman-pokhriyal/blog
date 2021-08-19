import React from "react";
import emailjs from "emailjs-com";
import "../Styles/Home.css";
import link from "../Image/link-g.png";
import insta from "../Image/insta-g.png";
import git from "../Image/github.png";
import web from "../Image/click.png";

export default function Home() {
  function sendEmail(e) {
    e.preventDefault();
    const status = document.getElementById("my-form-status");
    emailjs
      .sendForm(
        "service_tyk0w0o",
        "template_jhj72s1",
        e.target,
        "user_5evtEZH2DQKgxHRWBOCU9"
      )
      .then(
        (result) => {
          status.classList.remove("hide");
          status.innerHTML = "Thank you for your message!";
          status.style.backgroundColor = "#90ee90";
          setTimeout(() => {
            status.classList.add("hide");
          }, 10000);
        },
        (error) => {
          status.classList.remove("hide");
          status.innerHTML = "Something Went Wrong";
          status.style.backgroundColor = "#ffcccb";
          setTimeout(() => {
            status.classList.add("hide");
          }, 10000);
        }
      );

    e.target.reset();
  }

  return (
    <div className="wrapper">
      <div className="welcome-wrapper">
        <p className="welcome"> Welcome</p>
        <p className="welcome-text">Hello Programmer...</p>
        <p className="welcome-text">
          This is my Blog Page for sharing my knowledge and love for programming
          and help as many people I can.
        </p>
        <p className="welcome-text">Hope you learn more and visit again.</p>
      </div>
      <p className="about">About Me</p>
      <div className="about-wrapper">
        <p className="about-text">
          My name is Naman Pokhriyal and I am pursuing my Bachelors of
          Technology Degree in Computer Science and Engineering
        </p>
        <p className="about-text">
          I am a passionate about Coding and Programming and am highly motivated
          to learn and contribute to the society and help others.
        </p>
        <p className="about-text"> Thus, this Blog.</p>
      </div>
      <p className="follow">Follow Me</p>
      <div className="follow-wrapper">
        <a
          href="https://www.linkedin.com/in/naman-pokhriyal/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={link} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/Naman-pokhriyal"
          target="_blank"
          rel="noreferrer"
        >
          <img src={git} alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/nxmxn07"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="Instagram" />
        </a>
        <a
          href="https://portfolio-naman.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={web} alt="Website" />
        </a>
      </div>
      <section id="contact-wrapper">
        <p className="contact-text">Get in touch?</p>
        <form
          id="my-form"
          action="https://formspree.io/f/xleanvoq"
          method="POST"
          onSubmit={sendEmail}
        >
          <div className="form-group">
            <label for="firstName">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              cols="20"
              required
            ></textarea>
          </div>
          <button className="sub-btn" type="submit">
            Submit
          </button>
          <div id="my-form-status"></div>
        </form>
      </section>
    </div>
  );
}

import Layout from "../Layout/Layout";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Contact.scss";
function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    let id = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <div className="contact-page container">
      <Layout />

      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["C", "o", "t", "a", "c", "t", " ", "M", "e"]}
            idx={22}
          />
        </h1>
        <p>
          I am interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to contact me using below form either.
        </p>
        <form>
          <input type={"text"} placeholder="Name" />
          <input type={"email"} placeholder="Email" />
          <input type={"text"} placeholder="subject" className="col-span-2" />
          <textarea
            rows={5}
            cols={8}
            placeholder="Message"
            className="col-span-2"
          />

          <input type={"submit"} value="send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;

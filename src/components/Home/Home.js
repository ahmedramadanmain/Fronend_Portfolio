import "./Home.scss";
import logo from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useState,useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Logo from "../Logo/Logo";
function Home() {
    const [letterClass,setLetterClass]=useState('text-animate');
    const nameArray=['A','h','m','e','d',' ','R','a','m','a','d','a','n'];
    const jobArray=['W','e','b',' ','D','e','v','e','l','o','p','e','r'];


    useEffect(() => {
        
         let id= setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000)
        return () => {
           clearTimeout(id)
        };
    }, []);
  return (
    <>
    <div className="container home-page">
    <Layout/>

      <div className="text-zone">
        <h1>
          <span className={`${letterClass}`}>H</span>
          <span className={`${letterClass} _12`}>i,</span>

          <br />
          
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <img src={logo} alt="logo" />
         <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
         <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
          
        </h1>
        <h2>Frontend React Developer</h2>
        <Link to="/contact" className="btn">
          Contact Me
        </Link>
      </div>
      <Logo />
    </div>
    </>
  );
}

export default Home;

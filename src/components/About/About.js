import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useState,useEffect } from "react";
import Layout from "../Layout/Layout";
import './About.scss'
function About() {
    const [letterClass,setLetterClass]=useState('text-animate');
    useEffect(() => {
        
        let id= setTimeout(()=>{
           setLetterClass('text-animate-hover')
       },4000)
       return () => {
          clearTimeout(id)
       };
   }, []);
  return(
    <>
    <div className="container about-page">
    <Layout/>

      <div className="text-zone">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','M','e']} idx={22} />
          
        </h1>
        <div className="info">
            <p>
            I’m very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
            </p>
            <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.  
            </p>
            <p>
            If I need to define myself in one sentence that would be a family
            person,a sports fanatic,
            photography enthusiast.
            </p>
        </div>
      
      </div>
    </div>
    </>
  );
}

export default About;

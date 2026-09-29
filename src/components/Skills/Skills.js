import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Layout from "../Layout/Layout";
import {useState,useEffect} from 'react';
import './Skills.scss'
function Skills() {
    const [letterClass,setLetterClass]=useState('text-animate');
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
    <div className="container skills-page">
    <Layout/>

      <div className="text-zone">
        <h1>
        <AnimatedLetters letterClass={letterClass} strArray={['S','k','i','l','l','s',' ' ,'&']} idx={20} />
        <br/>
        <AnimatedLetters letterClass={letterClass} strArray={['E','x','p','e','r','i','e ' ,'n','c','e']} idx={23} />

        </h1>
       <div className="info">
        <p>
        Expert in front-end development including technologies like 
            <span class="tech-tag">HTML5</span>,
            <span class="tech-tag">CSS3</span>,
            <span class="tech-tag">JavaScript</span>,
            <span class="tech-tag">React</span>,
            <span class="tech-tag">React Router Dom</span>,
            <span class="tech-tag">Redux&Redux Toolkit</span>,
            <span class="tech-tag">Tanstack Query</span>,
            <span class="tech-tag">Bootstrap</span>,
            <span class="tech-tag">Sass</span>, 
            <span class="tech-tag">Git</span>, etc.
        </p>
        <p>
        I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
        </p>
       </div>
      </div>
    </div>
    </>
  )
}

export default Skills;

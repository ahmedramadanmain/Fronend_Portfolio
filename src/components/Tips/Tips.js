import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Layout from "../Layout/Layout";
import {useState,useEffect} from 'react';
import Javascriptimg from '../../assets/images/javascript.png'
import Angularimg from '../../assets/images/angular.png'
import Css from '../../assets/images/css.png'
import reactImg from '../../assets/images/react.png'
import typescriptImg from '../../assets/images/typescript.svg'

import './Tips.scss'

function Tips() {
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
    <div className="container tips-page">
    <Layout/>

      <div className="text-zone">
        <h1>
        <AnimatedLetters letterClass={letterClass} strArray={['F','r','o','n','t','e','n ' ,'d',' ','T','i','p','s']} idx={20} />

        </h1>
       
      </div>
      <div className='images'>
            <img src={Javascriptimg} alt="javascript" />
            <img src={Angularimg} alt="Angular" />
            <img src={Css} alt="CSS" />
            <img src={reactImg} alt="React" />
            <img src={typescriptImg} alt="Typescript" />



      

        </div>
    </div>
    </>
  )
}

export default Tips
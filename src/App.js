import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Tips from './components/Tips/Tips';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
function App() {
  return (
   <>
      <Sidebar />
      <Routes>

        <Route path='/' element={<Layout/>} />
        <Route index  element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/tips' element={<Tips/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>}/>





      </Routes>
   </>
  );
}

export default App;

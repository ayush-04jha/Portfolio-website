
import './App.css'
import About from './components/About';
import Home from './components/Home';
import MyProjects from './components/MyProjects';
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom';
import Skills from './components/Skills';
import FormSection from './components/FormSection';
import Footer from './components/Footer';

function App() {
  

  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
     <Home/>    
     <BrowserRouter>
     <About/>
     </BrowserRouter>
     <Skills/>
     <BrowserRouter>
     <MyProjects/>
     </BrowserRouter>
     <FormSection/>
     <Footer/>
    
     
     
     
    </div>
    
    
    
  
  )
}

export default App

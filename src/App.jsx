
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
    <div className='bg-black'>
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
    <div className='flex flex-col container overflow-x-hidden  mx-auto min-h-screen'>
    <Home />  
    <BrowserRouter>
     <About/>
     </BrowserRouter>
     <Skills/>
     <BrowserRouter>
     <MyProjects/>
     </BrowserRouter>
     <FormSection/>
    </div>
      
      
     
     <Footer/>
    
     
     
     
    </div>
    
    
    
  
  )
}

export default App

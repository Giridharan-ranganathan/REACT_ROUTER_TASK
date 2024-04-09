import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import All from "./pages/All";
import CyberSecurity from './pages/Cyber_Security';
import DataScience from './pages/Data_Science';
import FUllstackDeveloper from './pages/Full_stack_Developer';
import Testing from './pages/Testing';
import { useRef } from 'react';

function App() {  
  return (
    <>
    <div className='container'>
      <div className='allTag'> 
      <Link to={"/"} className='textSty'>All</Link>
      </div>
      <div className='cyberTag'>
      <Link to={"/Cyber_Security"} className='textSty'> Cyber Security</Link>
      </div>
      <div className='dataScienceTag'>
      <Link to={"/Data_Science"} className='textSty'> Data Science</Link>
      </div>
      <div className='fullStackTag'>
      <Link to={"/Full_stack_Developer"} className='textSty'>Full stack Developer </Link>
      </div>
      <div className='testingTag'>
      <Link to={"/Testing"} className='textSty'> Testing</Link>
      </div>
    </div>
    <div>
      <hr />
    </div>
       <div>
         <Routes>
          <Route Component={All} path='/' />
          <Route Component={CyberSecurity} path='/Cyber_Security' />
          <Route Component={DataScience} path='/Data_Science' />
          <Route Component={FUllstackDeveloper} path='/Full_stack_Developer' />
          <Route Component={Testing} path='/Testing' />
         </Routes>
       </div>
    </>
  )
}

export default App

import React,{useEffect} from 'react';
import Header from '../src/components/Header';
import MainContent from '../src/components/MainContent';
import Experience from './components/Experience';
import Project from './components/Project';
import Technologies from './components/Technologies';
import './App.css';



function App() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
   <div className='App'>
    <Header/>
    <MainContent/>
    <Experience/>
    <Project/>
    <Technologies/>
   </div>
  );
}

export default App;

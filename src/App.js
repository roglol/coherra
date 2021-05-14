import './App.css';
import Landing from './components/Landing';
import About from './components/About/About';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Scholarship from './components/Scholarship/Scholarship';
import Carousel from './components/Carousel';
import StickyHeader from './components/StickyHeader';
import FAQ from './components/FAQ';

function App() {
   const [scholarShip, setScholarship] = useState({});

  useEffect(() => {
    axios.get(`https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab`).then(res =>{
      let {data} = res;
      let {scholarship} = data;
      document.title = data.meta.title
      console.log(data,'data')
      setScholarship(scholarship);

    }).catch(err =>{
      throw new Error(err);
    })
  },[])

  return (
    <div >

      <header className="header">
      <div className='left-header'>
      <span>HARBOUR.SPACE</span>
      <span>/Interaction Design</span>
      </div>
      <div className='right-header'>
        <div className='apply-btn-container'>
          <div className='apply-btn'>
          APPLY <br />
          NOW
          </div>
        </div>
        <div>
          <span></span>
        </div>
      </div>
      </header>
    <Landing />
    <About />

    <Scholarship data={scholarShip} />

    <Carousel />
    <FAQ data={scholarShip.faqs}/>
    <StickyHeader data={scholarShip}/>
    </div>
  );
}

export default App;

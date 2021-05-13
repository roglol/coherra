import React from 'react';


const Landing = () => {
    return (
        <main className='landing-wrapper'>
            <div className='landing-description-container'>
            <img alt='landing' src={'landing-icon.svg'}/>
            <h1 className='title'>Interaction Design Apprenticeship</h1>
            <h3 className='description'>
            A fully funded work-study program to launch your tech career 
            </h3>
            <p className='info'>
            Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship. 
            </p>

            <div className='position-description'>
                <span>
                Position: 
                </span>
                <span>Marketing Performance</span>
            </div>
            <button className='apply-btn'>Apply Now</button>
            </div>
            <div className='landing-info-container'>
                <div className='logo-container'>

                    <img alt='logo' src={'Logo.svg'}/>
                    <div className='powered-by'>
                        <span>Powered by:</span>
                        <span >Zeptolab</span>
                    </div>
                </div>
                <div className='application-close-info'>
                    <span className='title'>Application closes in</span>
                    <span className='time'>6 Day  :  22 Hrs  :  56 Min  :  13 Seg </span>
                </div>

                <div className='location-info'>
                    <div >
                       <span>Location</span>
                       <span>Bangkok</span>
                   </div>
                   <div >
                       <span>Duration</span>
                       <span>1 Year</span>
                       <span>Full-Time</span>
                   </div>
                   <div >
                       <span>Start date</span>
                       <span>30 June 2020</span>
                   </div>
                   <div >
                       <span>End date</span>
                       <span>3 Aug 2020</span>
                   </div>
                </div>
            </div>
        </main>
    )
}

export default Landing
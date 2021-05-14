import React from 'react';
import {formatDate} from '../../helpers';

const StickyHeader = ({data}) => {
    const {duration, location, company, application_end_date, scholarship_start_date} = data;
    return(
    <footer className='bottom-sticky'>
        <div>
        <span className='title'>{company? company.name : 'No Info'}</span>
        <span className='value'>{company? company.type : "No Info"}</span>
        </div>
        <div>
        <span className='title'>Location</span>
        <span className='value'>{location ? location.name : "No Info"}</span>
        </div>
        <div>
        <span className='title'>Duration</span>
        <span className='value'>{duration ? duration : 0} Year Full Time</span>
        </div>
        <div>
        <span className='title'>Start Date</span>
        <span className='value'> {scholarship_start_date ? formatDate(scholarship_start_date): "No Date"}</span>
        </div>
        <div>
        <span className='title'>Application Deadline</span>
        <span className='value'>{application_end_date ? formatDate(application_end_date): "No Date"} </span>
        </div>
        <div>
        <span className='title'>Application closes in</span>
        <span className='value'>6 Day   :   22 Hrs   :   56 Min</span>
        </div>
        
    </footer>)
}

export default StickyHeader;
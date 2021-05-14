import React, { useState} from 'react';
import FAQStyles from "./FAQ.module.css";


const FAQ = ({data}) => {
const [activeTab, setActiveTab] = useState(null);
const [activeCat, setActiveCat] = useState('');


const handleTab = (idx) =>{
    activeTab === idx ? setActiveTab(null) : setActiveTab(idx);
}

const handleSelect = (e) => {
    const { value,} = e.target;
    setActiveCat(value);
}

    return (
    <div className={FAQStyles.container}>
        <div className={FAQStyles.header}>
            <span className={FAQStyles.title}>Frequently asked questions</span>
            <div className={[FAQStyles['filter-container']]}>
                <span>Filter by:</span>
                <div className={FAQStyles.select}>

                <select onChange={handleSelect}>
                    <option value=''>Program conditions</option>
                    {!!data && !!data.categories && data.categories.map(cat => 
                        <option value={cat}>{cat}</option>
                        )}
                </select>
                </div>

            </div>
        </div>
        <ul className={FAQStyles.list}> 
        {!!data && !!data.items && data.items.filter(cat => activeCat ? cat.type  === activeCat : true).map((question, idx) => <li key={question.question} className={FAQStyles.question}>
            <div>
            <p className={FAQStyles.type}>
                {question.type}
            </p>
            <div>

            <p >{question.question}</p>
            {activeTab === idx && <div className={FAQStyles.answer}>{question.answer.map(answ => {
                return <p>{answ.data}</p>
            })}</div> }
            </div>
           
            </div>
            <button className={activeTab === idx ? FAQStyles.active : 'active'} onClick={() => handleTab(idx)}>
            {activeTab === idx ? '-' : '+'}

            </button>
            
        </li>)}

        </ul>
    </div>
)
}

export default FAQ;
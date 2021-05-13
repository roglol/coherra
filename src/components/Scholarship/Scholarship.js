import React from 'react';
import ScholarshipStyle from "./Scholarship.module.css";

const Scholarship = ({data}) => {
    console.log(data,'data')
    return (
        <main className={ScholarshipStyle.wrapper}>
        <div className={[ScholarshipStyle['scolarship-wrapper']]}>
            <span className={ScholarshipStyle.title}>Scholarship value</span>
            <span className={[ScholarshipStyle['scolarship-value']]}>€{data.total_value ? data.total_value : 0}</span>
            <div className={[ScholarshipStyle['scholarship-info']]}>
            <div className=''>
                <span className={ScholarshipStyle.title}>Tuition covered</span>
                <span> €{data.tuition ? data.tuition : 0}</span>
            </div>
            <div className=''>
                    <span className={ScholarshipStyle.title}>Remaining</span>
                <span> €20,900</span>
            </div>
            <div className=''>
                <span className={ScholarshipStyle.title}>Living Stipend</span>
                <span> €{data.stipend_per_year ? data.stipend_per_year : 0}</span>
            </div>

            </div>
        </div>
        <div className={ScholarshipStyle.right}>

        <div className={ScholarshipStyle.commitment}>
            <div className={ScholarshipStyle.study}>
            <span className={ScholarshipStyle.title}>Study Commitment</span>
            <span className={[ScholarshipStyle['meta-title']]}>{data.study_commitment ? data.study_commitment : 0} hours / day</span>
            <span className={ScholarshipStyle.divider}/>
            <span className={ScholarshipStyle.description}>{data.study_commitment_text ? data.study_commitment_text : "No Info"}</span>
            </div>
            <div className={ScholarshipStyle.work}>
            <span className={ScholarshipStyle.title}>Work commitment</span>
            <span className={[ScholarshipStyle['meta-title']]}> {data.work_commitment ? data.work_commitment : 0} hours / day</span>
            <span className={ScholarshipStyle.divider}/>
            <span className={ScholarshipStyle.description}>{data.work_commitment_text ? data.work_commitment_text : "No Info"} </span>
            </div>
        </div>
        <div className={ScholarshipStyle.graduation}>
        <span>Graduation</span>

        </div>
        <div className={[ScholarshipStyle['full-time']]}>
        <span className={ScholarshipStyle.title}>A full-time contract</span>
        <span className={[ScholarshipStyle['meta-title']]}> 1 Year / Full-Time</span>
        <span className={ScholarshipStyle.divider}/>
        <span className={ScholarshipStyle.description}>You’ll be guaranteed a 1 year contract with SCG upon graduation.  </span>

        </div>
        </div>
        </main>
    )
}

export default Scholarship;
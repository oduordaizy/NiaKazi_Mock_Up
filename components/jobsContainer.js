import { Btns } from '@/app/recruiter/dashboard/page'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faCircleUser, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button"


function JobsContainer() {
  return (
    <div className='jobs-container'>
        <FontAwesomeIcon icon={faEllipsisVertical} className="ellipsis"/>
        <h1>Senior Quality Assurance (QA) Analyst</h1>

        <p>Our Company Premier Technology is looking fore a senior quality Assurance Analyst<br></br> to lead testing and analysis of software to take over 2025</p>

        <h2>Requirements</h2>
        <p>--5 years Experience</p>
        <p>--Team Leader</p>

        <h2>Skills - </h2>
        <div className='skillsButtons'>
        <Button>Selenium</Button>
         <Button>Postman</Button>
         <Button>Katalon</Button>
         <Button>Cypress</Button>
        </div>


    </div>
  )
}

export default JobsContainer
import RecruiterDashboard from '@/app/recruiter/dashboard/page'
import JobsContainer from '@/components/jobsContainer'
import React from 'react'

function ActiveJobs() {
  return (
    

    <div className="jobs">
        <RecruiterDashboard />
        <JobsContainer />  
        <JobsContainer />       
        <JobsContainer />
        
    </div>
  )
}

export default ActiveJobs
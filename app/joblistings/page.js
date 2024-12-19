import JobsContainer from "@/components/jobsContainer";
import CompleteNavbar from "@/components/Navigation";

const Joblistings = () => {
    return(
    <>
        <CompleteNavbar />
        <h1 className="title">Job Listings</h1>

        <h1>Here you will see the list of some of the jobs available</h1>

        <JobsContainer />
    
    </>
    )
  
    
}

export default Joblistings;
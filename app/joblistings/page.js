import JobsContainer from "@/components/jobsContainer";
import CompleteNavbar from "@/components/Navigation";

const Joblistings = () => {
    return(
    <>
        <CompleteNavbar />
        <div textContainer>
        <h1 className="title">Job Listings</h1>

        <p>Here you will see the list of some of the jobs available</p>

        <JobsContainer />
        </div>
    
    </>
    )
  
    
}

export default Joblistings;
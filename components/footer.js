import React from 'react'
import Link from "next/link"


function PageFooter() {
  return (
    <>
    <div className='footerContainer'>
    <div className='footerClasses'>
        <h1>COMPANY</h1>
        <Link href="./about"><p>About Us</p></Link>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Accessibility</p>
        <p>Disclaimer</p>

    </div>
    <div className='footerClasses'>
        <h1>BROWSE</h1>
        <p>Search</p>
        <p>Jobs by location</p>
        <p>Jobs Title</p>
        <p>Jobs By Company</p>
        <p>Jobs By Category</p>

    </div>
    <div className='footerClasses'>
        <div>
        <h1>Resources</h1>
        <p>Customer Support</p>
        <p>Company Reviews</p>
        <p>Companies We Serve</p>
        <p>Testimonials</p>
        <p>Share NiaKazi</p>
        </div>
        <div className="social-media">
            
        </div>
    </div>
    
    </div>
    <div className='copyright'>
        <p>© 2025 NiaKazi.</p>
    </div>

    </>
    
  )
}

export default PageFooter;
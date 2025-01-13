import React from 'react'
import Link from "next/link"


function PageFooter() {
  return (
    <>
    <div className='footerContainer'>
    <div className='footerClasses'>
        <h1>COMPANY</h1>
        <Link href="./about"><p>About Us</p></Link>
        <Link href="#"><p>Terms</p></Link>
        <Link href="#"><p>Privacy</p></Link>
        <Link href="#"><p>Accessibility</p></Link>
        <Link href="#"><p>Disclaimer</p></Link>

    </div>
    <div className='footerClasses'>
        <h1>BROWSE</h1>
        <Link href="#"><p>Search</p></Link>
        <Link href="#"><p>Jobs by location</p></Link>
        <Link href="#"><p>Jobs Title</p></Link>
        <Link href="#"><p>Jobs By Company</p></Link>
        <Link href="#"><p>Jobs By Category</p></Link>

    </div>
    <div className='footerClasses'>
        <div>
        <h1>RESOURCES</h1>
        <Link href="#"><p>Customer Support</p></Link>
        <Link href="#"><p>Company Reviews</p></Link>
        <Link href="#"><p>Companies We Serve</p></Link>
        <Link href="#"><p>Testimonials</p></Link>
        <Link href="#"><p>Share NiaKazi</p></Link>
        </div>
        <div className="social-media">
            
        </div>
    </div>
    
    </div>
    <div className='copyright'>
        <p>©2025 NiaKazi.</p>
    </div>

    </>
    
  )
}

export default PageFooter;
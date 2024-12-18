"use client"
import React from "react";
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faCircleUser } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import Profile from "@/components/profile";



export function Btns() {
    return (
        <ul className="navList">
            <li className="navItem"><Link className="navLink" href="#">Active jobs</Link></li>
            <li className="navItem"><Link className="navLink" href="#">Archived</Link></li>
           <li className="navItem"><Link className="navLink" href="#">Saved Candidates</Link></li>
          <li className="navItem"><Link className="navLink" href="#">Interviews</Link></li>
           <li className="navItem"><Link className="navLink" href="#">Messages</Link></li>
           <li className="navItem"><Link className="navLink" href="#">Advanced Search</Link></li>
      </ul>
    )
  }

const RecruiterDashboard = () => {
    return(
        <div className="parent">
            <div className="logo-like">LoRem</div>
            
            <div className="dashbordContainer">
                <Btns />
            </div>

            <div className="btngroup">
                <Link href = "./recruiter/login"><Button className="btn2" >Post Job</Button></Link>
                <FontAwesomeIcon id="notification-icon" icon={faBell} size="2x" style={{ color: "#222831" }} />
                <Profile />     
            </div>
            
        </div>
    )
   
}

export default RecruiterDashboard;
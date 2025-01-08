"use client"
import * as React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from 'next/image';

import {cn} from "@/lib/utils"
import { RSC_SUFFIX } from "next/dist/lib/constants"

export default function CompleteNavbar(){
    return (
        <div className="header">
          <Link className="navLink" href="/"><div className="logo-like parent-item">NiaKazi</div></Link>
                   
            <div className="navContainer">
            <nav>
              <ul className="navList">
                <li className="navItem"><Link className="navLink" href="/">Home</Link></li>
                <li className="navItem"><Link className="navLink" href="/howWeWork">How We Work</Link></li>
                <li className="navItem"><Link className="navLink" href="./about">About us</Link></li>
                <li className="navItem"><Link className="navLink" href="/joblistings">Job Listings</Link></li>
                <li className="navItem"><Link className="navLink" href="/contact">Contact us</Link></li>
              </ul>
            </nav>
            </div>

            <div className="loginbtns">
              <Link href = "./recruiter/login"><Button id="btn1">Post Job</Button></Link>
              <Link href = "./applicant/login"><Button className="btn2">Get hired</Button></Link>
            </div>

        </div>       
       
    )
    
}
  
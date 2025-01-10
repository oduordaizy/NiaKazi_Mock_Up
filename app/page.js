"use client"

import * as React from "react"
import CompleteNavbar from "@/components/Navigation";
import Image from 'next/image';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageFooter from '@/components/footer';
import Page2 from '@/components/secondPage';

export function Home() {
  return (
    <>
     
      <div>
        <CompleteNavbar />
        <div>
          <div className="homeContainers">
            <div className="homeText">
              <p>Unlock your potential, Find your path.</p>
              <h1>Connect, Work, Success</h1>

              <div className="loginbtns">
              <Link href = "./recruiter/login"><Button id="btn1">Post Job</Button></Link>
              <Link href = "./applicant/login"><Button className="btn2">Get hired</Button></Link>
              </div>
            </div>

          
          <div className="pageImageContainer"><Image id="" src="/bg3.png" width={600} height={200} alt="Background Image"/></div>
        </div>
        </div>

        
        <Page2 />
       < PageFooter />
      </div>
      
    </>
  );
}

export default Home;
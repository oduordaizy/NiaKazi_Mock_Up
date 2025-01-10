import React from 'react'
import Image from 'next/image'
import { FaBriefcase } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiPaperclipBold } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { FaHandshake } from "react-icons/fa6";

function Page2() {
  return (
    <div className='secondPageContainer'>
        <div className='moreInfo'>
        <div className='moreInfoItem'>
            
            <FaHandshake className='moreInfoIcons' style={{ color: '#00204a' }} />
            
            <h1>Connect</h1>
            <p>NiaKazi's mission is to CONNECT Employers with seekers as an efficient and easy to use path simplifying the job search nad hiring process to sides</p>
        </div>

        <div className='moreInfoItem'>
            
            <FaBriefcase className='moreInfoIcons' style={{ color: '#00204a' }}/>
            <h1>Work</h1>
            <p>Once Employers and job seekers are connected, its time to work together. Our Platform empowers both parties to collaborate effectrively, making meaningful strides towards their career goals</p>
        </div>

        <div className='moreInfoItem'>
            <TiTick className='moreInfoIcons'  style={{ color: '#00204a' }} />
            
            <h1>Success</h1>
            <p>With Succesful connections and seamless collaboration, SUCCESS becomes the ultimate outcome creating rewarding opportunities that benefit both employers and job seekers</p>
        </div>
        </div>

        <div className='videoContainer'>
        <video width="500" height="450" controls>
            <source src="/tutorialVideo.mp4" type="video/mp4" />
            Video Tutorial
        </video>
        </div>

    </div>
  )
}

export default Page2
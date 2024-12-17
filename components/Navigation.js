"use client"
import * as React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from 'next/image';

import {cn} from "@/lib/utils"
import { RSC_SUFFIX } from "next/dist/lib/constants"
//import {icons} from "@/components/icons"

/*
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuTriggerStyle,

} from "@/components/ui/navigation-menu"

export function NavigationFunction() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>How we work</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>"Staff"</NavigationMenuLink>
          </NavigationMenuContent>
          <NavigationMenuContent>
            <NavigationMenuLink>"Staff s"</NavigationMenuLink>
          </NavigationMenuContent>
          <NavigationMenuContent>
            <NavigationMenuLink>"Staff g"</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>"./about"</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Job Listings</NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
*/

export default function CompleteNavbar(){
    return (
        <div className="header">
          <div className="logoContainer">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
          </div>
            
            <div className="navContainer">
            <nav>
              <ul className="navList">
                <li className="navItem"><Link className="navLink" href="#">How We Work</Link></li>
                <li className="navItem"><Link className="navLink" href="./about">About us</Link></li>
                <li className="navItem"><Link className="navLink" href="/joblistings">Job Listings</Link></li>
                <li className="navItem"><Link className="navLink" href="/contact">Contact us</Link></li>
              </ul>
            </nav>
            </div>

            <div className="loginbtns">
              <Link href = "./recruiter/login"><Button id="btn1">Post Job</Button></Link>
              <Link href = "./applicant/login"><Button id="btn2">Get hired</Button></Link>
            </div>

        </div>       
       
    )
    
}
  
import { Geist, Geist_Mono, Inter, Arvo } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { faBell, faUser, faCircleUser, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import Profile from "@/components/profile";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "👩‍💻",
  description: "ATS, Recruiters, Job application",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body>   
          {children}
        </body>
      </html>
    
  );
}

"use strict";
"use client";

import { useGetStudentOverview } from "@/lib/queries/dashboard/useDashboard";
import { Download, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Webinar,totalEnrolledCourses } from "@/lib/queries/dashboard/types";
import './cert.css'
export default function CertificatesPage() {
    const { data, isLoading } = useGetStudentOverview();

    // Using filtered webinars or all webinars as per requirement. 
    // Since API doesn't distinguish 'completed' explicitly in types provided, 
    // we assume the list returned are the ones user has access to/completed.
    const webinars: Webinar[] = data?.webinars || [];
   const totalEnrolledCourses: number = data?.totalEnrolledCourses ?? 0;
    // Fallback/Demo Data only if API is empty and loading is done (optional, but good for visualizing the layout without data)
    // Removed to stick to real data as per "cache and use it" instruction.

    return (
    
  <div className="container pt-4">
    <h2 className="title">Your Certificates</h2>

    <div className="certificate-card">
      <div className="left">
           <span className="icon"> <Image
              src={"/images/medal.svg"}
              alt=""
              width={15}
              height={20}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            /></span>
       <span className="text">The Trending AI skills</span>
      </div>
      <button className="download-btn">Download Now</button>
    </div>

    <div className="certificate-card">
      <div className="left">
  <span className="icon"> <Image
              src={"/images/medal.svg"}
              alt=""
              width={15}
              height={20}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            /></span>        <span className="text">The Trending AI skills</span>
      </div>
      <button className="download-btn">Download Now</button>
    </div>

    <div className="certificate-card">
      <div className="left">
  <span className="icon"> <Image
              src={"/images/medal.svg"}
              alt=""
              width={15}
              height={20}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            /></span>        <span className="text">The Trending AI skills</span>
      </div>
      <button className="download-btn">Download Now</button>
    </div>

    <div className="certificate-card">
      <div className="left">
  <span className="icon"> <Image
              src={"/images/medal.svg"}
              alt=""
              width={15}
              height={20}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            /></span>        <span className="text">The Trending AI skills</span>
      </div>
      <button className="download-btn">Download Now</button>
    </div>
  </div>

    );
}

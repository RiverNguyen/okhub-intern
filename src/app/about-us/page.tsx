"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Team from "../../components/team";
import Banner from "./_components/banner";
import BreadcrumbAbout from "./_components/breadcrumb";
import Ethical from "./_components/ethical";
import Pattern from "./_components/pattern";
import BreadcrumbContainer from "@/components/breadcrumb";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  useEffect(() => {
    gsap.from(".pattern-section", {
      scrollTrigger: {
        trigger: ".pattern-section",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 3,
      ease: "power3.out",
    });

    gsap.from(".ethical-section", {
      scrollTrigger: {
        trigger: ".ethical-section",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 5,
      ease: "power3.out",
    });

    gsap.from(".team-section", {
      scrollTrigger: {
        trigger: ".team-section",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      gsap.killTweensOf(".pattern-section");
      gsap.killTweensOf(".ethical-section");
      gsap.killTweensOf(".team-section");
    };
  }, []);

  return (
    <>
      <Banner />
      <div className="breadcrumb-section">
        <BreadcrumbContainer first="About Us" />
      </div>
      <div className="pattern-section">
        <Pattern />
      </div>
      <div className="ethical-section">
        <Ethical />
      </div>
      <div className="team-section pl-[1rem] md:pl-[5rem]">
        <Team aboutPage />
      </div>
    </>
  );
};

export default AboutPage;

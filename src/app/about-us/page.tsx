"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Team from "../../components/team";
import Banner from "./_components/banner";
import BreadcrumbAbout from "./_components/breadcrumb";
import Ethical from "./_components/ethical";
import Pattern from "./_components/pattern";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  useEffect(() => {
    gsap.from(".breadcrumb-section", {
      scrollTrigger: {
        trigger: ".breadcrumb-section",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".pattern-section", {
      scrollTrigger: {
        trigger: ".pattern-section",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".ethical-section", {
      scrollTrigger: {
        trigger: ".ethical-section",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
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
  }, []);

  return (
    <>
      <Banner />
      <div className="breadcrumb-section">
        <BreadcrumbAbout />
      </div>
      <div className="pattern-section">
        <Pattern />
      </div>
      <div className="ethical-section">
        <Ethical />
      </div>
      <div className="team-section pl-[5rem]">
        <Team aboutPage />
      </div>
    </>
  );
};

export default AboutPage;

import React from "react";
import HeroContent from "../sub/HeroContent";
import { ProjectView } from "../sub/ProjectView";
import GetInTouch from "@/Component/ui/sub/GetInTouch";
import { Testimonial } from "@/Component/ui/sub/Testimonials";
import { Skill } from "@/Component/ui/main/Skill";
import Encryption from "../sub/Encryption";

const Hero = () => {
  return (
    <>
      <HeroContent />
      <Skill />
      <ProjectView />
      <Testimonial />
      <Encryption />
      <GetInTouch />
    </>
  );
};

export default Hero;

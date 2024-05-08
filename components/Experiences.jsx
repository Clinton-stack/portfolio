"use client";
import { Heading, Image } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { experiences } from "./constants";
import Experience from "./Experience";

export default function Experiences() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

 

  return (
    < >
      <Image src="/experience-icon.svg" alt="Experience Icon" w="50px" />
      <div className="timeline-container" ref={ref}>
        <motion.div
          className="timeline"
          initial={{ height: 0 }}
          animate={{
            height: inView ? "100%" : 0,
            opacity: 1,
            transition: { duration: 10.0 },
          }}
          viewport={{ once: true, amount: 0.2 }}
          
        />
      
        {experiences.map((experience, index) => (
          <Experience
            key={experience.id}
            index={index}
            experience={experience}
          />
        ))}
      </div>
    </>
  );
}

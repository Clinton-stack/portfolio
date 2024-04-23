"use client";
import { Heading, Image } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.2 // Trigger when 20% of the element is visible
  });

  const containersRef = useRef([]);

  useEffect(() => {
    if (inView) {
      document.querySelector('.timeline').classList.add('visible');
      containersRef.current.forEach((container, index) => {
        setTimeout(() => {
          container.classList.add('visible');
        }, index * 1000); // Adjust the delay as needed
      });
    }
  }, [inView]);
  return (
    <>
      <Image src="/experience-icon.svg" alt="Experience Icon" w="50px" />
      <div className="timeline"ref={ref} >
          <div className="container right-container" ref={el => containersRef.current[0] = el}>
            <FaCircle className="circle" />
            <div className="textbox">
              <Heading as="h3" size="l" className="headerText">
                TEAM SUPPORT
              </Heading>
              <p className="companyText">
                Fenix Outdoor Logistics | August 2022 – June 2023
              </p>
              <p className="regularText">
                Worked with WMS like Microsoft AX and Manhattan Scale to
                received, processed and tracked incoming and outgoing warehouse
                shipments. Troubleshot errors and maintained accuracy of
                scanners. Located and replenished missing items in stock.
              </p>
            </div>
          </div>

          <div className="container left-container" ref={el => containersRef.current[1] = el}>
            <FaCircle className="circle" />
            <div className="textbox">
              <Heading as="h3" size="l" className="headerText">
                SELF-LEARNING (ONLINE COURSES)
              </Heading>
              <p className="companyText">July 2022 – present </p>
              <p className="regularText">
                Completed advanced courses in SQL for Data Analytics and
                Business Intelligence (John Pauler on Udemy). Gained proficiency
                in the Node.js stack through courses like &#34;The Complete Node
                JS Developer&#34; (Andrew Mead on Udemy) and &#34;The MERN
                Stack&#34; (The Net Ninja on YouTube). Developed skills in web
                development using NEXT JS and Chakra UI (The Net Ninja on
                YouTube).
              </p>
            </div>
          </div>

          <div className="container right-container" ref={el => containersRef.current[2] = el}>
            <FaCircle className="circle" />
            <div className="textbox">
              <Heading as="h3" size="l" className="headerText">
                DIGITAL TRANSFORMATIVE DESIGNER
              </Heading>
              <p className="companyText">
                Digital School Society, Amsterdam | Feb 2022 - June 2022
              </p>
              <p className="regularText">
                Led a team in researching how digital twin technology could
                address night-time heat stress in urban areas. Conceptualized
                and developed a solution to educate citizens and combat
                night-time heat. Conducted user research and co-creation
                sessions with Dutch homeowners. Served as the Scrum Master for
                one of the Sprints.
              </p>
            </div>
          </div>

          <div className="container left-container" ref={el => containersRef.current[3] = el}>
            <FaCircle className="circle" />
            <div className="textbox">
              <Heading as="h3" size="l" className="headerText">
                SOFTWARE DEVELOPER (TRAINEE)
              </Heading>
              <p className="companyText">
                Bizzdesk Group Ltd, Abuja | Dec 2018 – Feb 2019
              </p>
              <p className="regularText">
                Developed front-end applications like an inventory management
                system using Angular. Learned the basics of Java with
                Spring-boot framework for developing back-end application
              </p>
            </div>
          </div>

          <div className="container right-container" ref={el => containersRef.current[4] = el}>
            <FaCircle className="circle" />
            <div className="textbox">
              <Heading as="h3" size="l" className="headerText">
                IT SUPPORT INTERN
              </Heading>
              <p className="companyText">
                Pipelines and Product Marketing Company Ltd, Abuja | June 2015 -
                Sep 2015
              </p>
              <p className="regularText">
                Provided technical assistance over the phone or email. Conducted
                hardware maintenance, software troubleshooting, and
                installations. Developed a first aid website to address
                frequently asked software and hardware issues.
              </p>
            </div>
          </div>
      </div>
    </>
  );
}

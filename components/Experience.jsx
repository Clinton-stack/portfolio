
import React from "react";
import { FaCircle } from "react-icons/fa";
import { Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";


const Experience = ({experience,index}) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{once:true,amount:1}}
      transition={{
        duration:0.9
      }}
      variants={{
        hidden:{
          opacity:0,
          y:-60
        },
        visible:{
          opacity:1,
          y:0
        }
      }}
      className={`container ${experience.id % 2 === 0 ? "left-container" : "right-container"}`}
     
    >
      <FaCircle className="circle" />
      <div className="textbox">
        <Heading as="h3" size="l" className="headerText">
          {experience.title}
        </Heading>
        <p className="companyText">
          {experience.company} | {experience.year}
        </p>
        <p className="regularText">
          {experience.description}
        </p>
      </div>
      
    </motion.div>
  );
};

export default Experience;

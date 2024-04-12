import { Box, Container, Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaCubes,FaLinkedin, FaInstagram, FaGithub  } from "react-icons/fa";
import Link from "next/link";



export default function Home() {
  return (
    <main>
      <div className='section-1' >
        <div className='nameText'>
          <Heading as='h1' size='4xl' color='#423B0B' >Clinton Emenari</Heading>
          <Text fontSize='2xl' color='#423B0B'>Software Developer</Text>
          <Text fontSize='l' color='#423B0B' mt='10px'>&#34;I am an enthusiastic software developer driven by a passion for problem-solving through innovative software solutions.&#34;</Text>
          <HStack spacing='10px' mt='20px'>

          <Link href='https://www.linkedin.com/in/clinton-emenari-8aba67108/' target='_blank'>
            <FaLinkedin className='icons'/>
          </Link> 
          <Link href='https://www.instagram.com/clinton_emenari/' target='_blank'>
            <FaInstagram className='icons'/>
          </Link> 
          <Link href='https://github.com/Clinton-stack' target='_blank'>
            <FaGithub className='icons'/>
          </Link> 
          </HStack>
        </div>
        <div><Image w='350px' maxW='100%' h='auto' borderRadius='full' src='/clinton2.jpeg' alt='Clintons Image' /></div>
      </div>
      <div className='section-2'>
        <div className='aboutmeText'>
          <Heading as='h2' size='2xl' >About Me</Heading>
          <Text fontSize='l'>With a steadfast focus on mastering the intricacies of full-stack development, I&rsquo;ve cultivated my expertise in crafting robust web applications using technologies like React, Node.js, and MongoDB, alongside delving into cloud platforms such as AWS. This journey reflects my unwavering commitment to continuous learning and growth within the dynamic realm of software development. <br /> <br /> Driven by a deep-rooted passion for software engineering and data analysis, I embody a results-oriented approach and resilience in every project I undertake. Grounded in self-directed learning and an insatiable enthusiasm for technology, I continually expand my skill set to remain abreast of industry innovations. Thriving in swiftly adapting to emerging technologies, I leverage them adeptly to realize desired outcomes and propel success across all endeavors</Text>
        </div>
        <div><Image width='100%' maxW='550px' h='auto' src='/about-me.jpeg' alt='About me Image' /></div>

      </div>
      <div className='section-3'>
        <VStack maxW='900px' p='40px' spacing='20px'>

          <Heading as='h2' size='2xl' textAlign='center' bgColor='#ffff'>Experience</Heading>

          <HStack spacing='15px'>
            <FaCubes className='expIcon' />
            <Box width='100%'>
              <Heading as='h4' size='l'>Team Support </Heading>
              <Text className='companyText'>Fenix Outdoor Logistics | August 2022 – June 2023</Text>
              <Text bgColor='#ffff'> Worked with WMS like Microsoft AX and Manhattan Scale to received, processed and tracked incoming and outgoing warehouse shipments. Troubleshot errors and maintained accuracy of scanners. Located and replenished missing items in stock.</Text>
            </Box>
          </HStack>

          <HStack spacing='15px'>
            <FaCubes className='expIcon' />
            <Box width='100%'>
              <Heading as='h4' size='l'> Digital Transformational Designer (Trainee) </Heading>
              <Text className='companyText'> Digital School Society, Amsterdam | Feb 2022 - June 2022</Text>
              <Text bgColor='#ffff'> Led a team in researching how digital twin technology could address night-time heat stress in urban areas. Conceptualized and developed a solution to educate citizens and combat night-time heat. Conducted user research and co-creation sessions with Dutch homeowners. Served as the Scrum Master for one of the Sprints.</Text>
            </Box>
          </HStack>

          <HStack spacing='15px'>
            <FaCubes className='expIcon' />
            <Box width='100%'>
              <Heading as='h4' size='l'> Software Developer (Trainee) </Heading>
              <Text className='companyText'>Bizzdesk Group Ltd, Abuja | Dec 2018 - March 2019</Text>
              <Text bgColor='#ffff'>Developed front-end applications like an inventory management system using Angular. Learned the basics of Java with Spring-boot framework for developing back-end application</Text>
            </Box>
          </HStack>


          <HStack spacing='15px'>
            <FaCubes className='expIcon' />
            <Box width='100%'>
              <Heading as='h4' size='l'>IT Helpdesk Intern</Heading>
              <Text className='companyText'> Pipelines and Product Marketing Company Ltd, Abuja | June 2015 - Sep 2015</Text>
              <Text bgColor='#ffff'> Provided technical assistance over the phone or email. Conducted hardware maintenance, software troubleshooting, and installations. Developed a first aid website to address frequently asked software and hardware issues.</Text>
            </Box>
          </HStack>

        </VStack>
      </div>
      <div className='section-4'>
        <VStack max-width='900px'>
          <Heading as='h2' size='2xl' className='projectText' mb='25px'>Some Past Projects </Heading>
          <Flex  flexWrap='wrap' justify='center' gap={6}>
            <Box className='projects' as={Link} href='https://ingenious-technology.org/' target='_blank' rel='noopener noreferrer' passHref> 
              <Box className='projectTopBox'>
                <Image src='/ingeniouswebsite.png' alt='Ingenious Website' w='100%' h='100%' />
              </Box>
              <Box className='projectBottomBox'>
                <Box className='tools'>ReactJs</Box>
                <Box className='tools'>Nextjs</Box>
                <Box className='tools'>Tailwind</Box>
                <Box className='tools'>Chakra UI</Box>
                <Box className='tools'>AWS S3</Box>
                <Box className='tools'>AWS Lambda</Box>
              </Box>
            </Box>

            <Box className='projects' as={Link} href='https://food-lovers-app.vercel.app/' target='_blank' rel='noopener noreferrer' passHref> 
              <Box className='projectTopBox'>
                <Image src='/foodlovers.png' alt='Food Lovers Website' w='100%' h='100%' />
              </Box>
              <Box className='projectBottomBox'>
                <Box className='tools'>ReactJs</Box>
                <Box className='tools'>Nextjs</Box>
                <Box className='tools'>Tailwind</Box>
                <Box className='tools'>AWS S3</Box>
              </Box>
            </Box>

            <Box className='projects' as={Link} href='https://digitalsocietyschool.org/insight/the-smart-talking-plant-pot/' target='_blank' rel='noopener noreferrer' passHref> 
              <Box className='projectTopBox'>
                <Image src='/plantpot.jpeg' alt='Smart Plant pot' w='100%' h='100%' />
              </Box>
              <Box className='projectBottomBox'>
                <Box className='tools'>C</Box>
                <Box className='tools'>Arduino</Box>
              </Box>
            </Box>

            <Box className='projects' as={Link} href='https://ingenious-ams.vercel.app/' target='_blank' rel='noopener noreferrer' passHref> 
              <Box className='projectTopBox'>
                <Image src='/ingenious-ams.png' alt='Asset Managment System' w='100%' h='100%' />
              </Box>
              <Box className='projectBottomBox'>
                <Box className='tools'>ReactJs</Box>
                <Box className='tools'>Nextjs</Box>
                <Box className='tools'>Tailwind</Box>
              </Box>
            </Box>

            <Box className='projects'>Portfolio</Box>
          </Flex>
        </VStack>
      </div>
      <div className='section-5'>
        <div>
          <Heading as='h2' size='2xl'>Contact Me</Heading>
        </div>
      </div>
    </main>
  )
}

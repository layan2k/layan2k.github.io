import styled, {css} from 'styled-components'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const Container = styled(motion.div)`
  padding: 50px 30px;
  background-color: #464646;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px 20px 5px;
  @media only screen and (max-width: 1024px) {
    padding: 40px 10px;
  }
  @media only screen and (max-width: 480px) {
    padding: 30px 10px;
  }
`
const HeadingTitle = styled(motion.h3)`
  color: #1f51ff;
  text-align: center;
  margin: 0;
`
const MainHeader = styled(motion.h1)`
  color: white;
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
`
const MainContent = styled(motion.p)`
  color: white;
  width: 50%;
  text-align: justify;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  @media only screen and (max-width: 776px) {
    width: 100%;
  }
`

const ServiceContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 40px;
  @media only screen and (max-width: 1024px) {
    gap: 15px;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 776px) {
    flex-direction: column;
  }
`

const ServicesCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  cursor: pointer;
  padding: 50px 20px;
  color: white;
  background-color: #1d1f22;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  i {
    font-size: 80px;
  }
  @media only screen and (max-width: 1024px) {
    width: 250px;
  }
`

const ServicesData = [
  { name: 'Web Development', icon: <i className='fi fi-ss-display-code'></i>, qty: 10 },
  { name: 'Digital Marketing', icon: <i className='fi fi-rs-megaphone'></i>, qty: 10 },
  { name: 'SEO Optimization', icon: <i className='fi fi-rs-globe'></i>, qty: 15 },
]

const WebSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 2.6,
          stiffness: 100,
        },
      })
    }
    if (!inView) {
      animation.start({
        x: '-100vw',
        transition: {
          type: 'spring',
          duration: 2.6,
          stiffness: 100,
        },
      })
    }
  }, [animation, inView])

  return (
    <div ref={ref}>
      <Container animate={animation}>
        <HeadingTitle>SERVICES</HeadingTitle>
        <MainHeader>WHAT I&apos;M GOOD AT</MainHeader>
        <MainContent>
          As someone with expertise in both Front-end React and SEO optimization, I take great pride
          in my ability to create stunning, user-friendly web applications that are optimized for
          search engines. I have always had a passion for web development, and my skills in React
          allow me to create dynamic and responsive websites that provide an outstanding user
          experience.
        </MainContent>
        <ServiceContainer>
          {ServicesData.map((data) => (
            <ServicesCard
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              key={data.name}
            >
              {data.icon}
              <h3>{data.name}</h3>
              <p>{data.qty}+ Projects</p>
            </ServicesCard>
          ))}
        </ServiceContainer>
      </Container>
    </div>
  )
}

export default WebSection

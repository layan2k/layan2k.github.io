import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import JS from '../../assets/js.png'
import Python from '../../assets/python.png'
import MoreItem from '../../assets/more.png'
import CMS from '../../assets/software.png'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const Container = styled(motion.div)`
  padding: 60px 30px;
  @media only screen and (max-width: 1024px) {
    padding: 40px 10px;
  }
`

const Wrapper = styled(motion.div)`
  display: flex;
  gap: 50px;
  margin: 2rem;
  align-content: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 776px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const MainHeader = styled.div`
  font-size: 24px;
  color: #1f51ff;
  text-align: center;
  margin-bottom: 60px;
`

const Card = styled(motion.div)`
  width: 250px;
  min-height: 350px;
  background-color: #464646;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

const Circle = styled.div<{TextColor : string}>`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.TextColor};
  border-radius: 50%;
  margin: 40px 0;
`

const CircleImage = styled(Image)`
  height: 70px;
  width: 70px;
`

const Header = styled.h2<{TextColor : string}>`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
  color: ${(props) => props.TextColor};
`

const Text = styled.p`
  font-size: 1rem;
  margin: 0;
  color: white;
`

const cardsData = [
  {
    id: 1,
    header: 'CMS',
    text: ['WordPress', 'Elementor', 'Woo-Commerce'],
    color: '#6181B6',
    image: CMS,
  },
  {
    id: 2,
    header: 'JavaScript',
    text: ['React', 'NextJS', 'Redux', 'ES6', 'ExpressJS', 'NodeJS'],
    color: '#f0db4f',
    image: JS,
  },
  { id: 3, header: 'Python', text: ['Django'], color: '#ffde57', image: Python },
  {
    id: 4,
    header: 'Other',
    text: ['HTML5/CSS3', 'TDD', 'Continuous integration', 'NoSQL(MongoDB)'],
    color: '#019BC6',
    image: MoreItem,
  },
]

const Skills = () => {
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
        x: window.innerWidth,
        transition: {
          type: 'spring',
          duration: 2.6,
          stiffness: 100,
        },
      })
    }
  }, [animation, inView])

  return (
    <div ref={ref} id='skills'>
      <Container animate={animation}>
        <MainHeader>Skills</MainHeader>
        <Wrapper>
          {cardsData.map((data) => (
            <Card key={data.id} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
              <Circle TextColor={data.color}>
                <CircleImage src={data.image} alt={data.header} />
              </Circle>
              <Header TextColor={data.color}>{data.header}</Header>
              {data.text.map((item, k) => (
                <Text key={k}>{item}</Text>
              ))}
            </Card>
          ))}
        </Wrapper>
      </Container>
    </div>
  )
}

export default Skills

import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import ContactForm from './Form'

const Container = styled.div`
  padding: 60px 30px;
  border-radius: 60px 45px 30px 15px/15px 30px 45px 60px;
  @media only screen and (max-width: 1024px) {
    padding: 40px 10px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const MainText = styled.h1`
  color: white;
  margin: 0;
`

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`

const Contact = () => {
  const { ref, inView }  = useInView({
    threshold: 0.5,
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 2.6,
        },
      })
    }
    if (!inView) {
      animation.start({
        x: '-100vw',
        transition: {
          type: 'spring',
          duration: 2.6,
        },
      })
    }
  }, [animation, inView])
  return (
    <Container id='contact' ref={ref}>
      <Wrapper animate={animation}>
        <TextContainer>
          <MainText> Questions?</MainText>
          <MainText>Lets Get In Touch</MainText>
        </TextContainer>
        <ContactForm />
      </Wrapper>
    </Container>
  )
}

export default Contact

import styled from 'styled-components'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const ResumeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #464646;
  padding: 60px 30px;
  border-radius: 5px 20px 5px;
  @media only screen and (max-width: 1024px) {
    padding: 40px 10px;
  }
`

const ResumeHeader = styled(motion.h1)`
  color: #1f51ff;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`

const ResumeSection = styled(motion.div)`
  margin-top: 20px;
  width: 100%;
`

const Resume = () => {
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

  const Timeline = () => (
    <VerticalTimeline>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: '#1F51FF', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #1F51FF' }}
        date='2021 - present'
        iconStyle={{ background: '#1F51FF', color: '#fff' }}
      >
        <h3 className='vertical-timeline-element-title'>Freelance Full-Stack Developer</h3>
        <h4 className='vertical-timeline-element-subtitle'>Remote, ZW</h4>
        <p>Front-end Development, User Experience, Visual Design, UI Development, Next JS</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='2021 - 2022'
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className='vertical-timeline-element-title'>Middleman-Tec</h3>
        <h4 className='vertical-timeline-element-subtitle'>Remote, ZW</h4>
        <p>Full-Stack Development, User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--education'
        date='2021 - 2022'
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        contentStyle={{ background: '#1D1F22', color: '#fff' }}
      >
        <h3 className='vertical-timeline-element-title'>Software Engineering Certificate</h3>
        <h4 className='vertical-timeline-element-subtitle'>ALX- The Room</h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} />
    </VerticalTimeline>
  )
  return (
    <div ref={ref} id='resume'>
      <ResumeContainer animate={animation}>
        <ResumeHeader initial={{ y: -50 }} animate={{ y: 0 }} transition={{ delay: 0.5 }}>
          RESUME
        </ResumeHeader>
        <ResumeSection
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Timeline />
        </ResumeSection>
      </ResumeContainer>
    </div>
  )
}

export default Resume

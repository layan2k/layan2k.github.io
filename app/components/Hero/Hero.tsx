// Hero Section Component
import React from 'react'
import styled from 'styled-components'
import Divider from '../common/Divider'
import VerticalLine from '../common/VerticalLine'
import Me from '../../assets/Me2.png'
import Blob from '../../assets/blob.svg'
import Image from 'next/image'

// CSS styled-components and framer-motion
const Container = styled.div`
  display: flex;
  padding: 60px 30px;
  @media only screen and (max-width: 1024px) {
    padding: 40px 10px;
    flex-direction: column;
  }
  @media only screen and (max-width: 767px) {
    padding: 20px 0px;
    flex-direction: column;
  }
`

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  @media only screen and (max-width: 767px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`

const NameTitle = styled.h1`
  font-size: 50px;
  font-weight: 600;
  color: white;
  span {
    color: #1f51ff;
  }
  @media only screen and (max-width: 767px) {
    text-align: center;
  }
  @media only screen and (max-width: 1024px) {
    text-align: center;
  }
`
const SocialLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 20px;
`
const SocailLinks = styled.a`
  text-decoration: none;
  color: white;
  font-size: 15px;
`
const Button = styled.a`
  padding: 15px 20px;
  margin-top: 40px;
  width: 200px;
  color: white;
  font-size: 20px;
  background-color: transparent;
  border: 1px solid #1f51ff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: teal;
    border: none;
  }
  &:active {
    background-color: lightgreen;
  }
`

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  width: 33.33%;
  @media only screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`

const HeroImage = styled(Image)`
  height: 100%;
  position: absolute;
  opacity: 1;
  z-index: 5;
  width: 100%;
  @media only screen and (max-width: 767px) {
    width: 50%;
    height: 50%;
  }
  @media only screen and (max-width: 1024px) {
    width: 50%;
    height: 75%;
  }
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  align-items: flex-end;
  @media only screen and (max-width: 767px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`

const IntroContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 300px;
  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }
`

const Intro = styled.h3`
  font-weight: 500;
  color: #1f51ff;
`

const TitleJob = styled.h1`
  font-size: 35px;
  font-weight: 600;
  color: white;
  width: 70%;
  @media only screen and (max-width: 767px) {
    text-align: center;
    width: 100%;
  }
  @media only screen and (max-width: 1024px) {
    text-align: center;
    width: 100%;
  }
`

const Bloby = styled(Image)`
  width: 100%;
  position: relative;
  z-index: 4;
  opacity: 1;
  @media only screen and (max-width: 767px) {
    width: 50%;
    height: 50%;
  }
  @media only screen and (max-width: 1024px) {
    width: 50%;
    height: 50%;
  }
`

const OtherText = styled.p`
  color: white;
  font-size: 20px;
  width: 70%;
  @media only screen and (max-width: 1024px) {
    margin: none;
  }
  @media only screen and (max-width: 767px) {
    margin: none;
    text-align: justify;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const Hero = () => {
  return (
    <Container>
      <NameContainer>
        <NameTitle>
          Leslie <br /> Shumba <span>.</span>
        </NameTitle>
        <Divider />
        <SocialLinksContainer>
          <SocailLinks href="https://www.instagram.com/layan2k/" target="_blank">
            Instagram
          </SocailLinks>
          <VerticalLine height={10} />
          <SocailLinks href="https://www.linkedin.com/in/leslieshumba" target="_blank">
            LinkedIn
          </SocailLinks>
        </SocialLinksContainer>
        <Button download href="https://firesidebackapp.s3.amazonaws.com/mypics/Leslie+Shumba+Resume+.pdf">
          Download Resume
        </Button>
      </NameContainer>
      <ImageContainer>
        <HeroImage alt="Leslie Pic" src={Me} />
        <Bloby alt="Blob" src={Blob} />
      </ImageContainer>
      <RightContainer>
        <IntroContainer>
          <Intro>INTRODUCTION</Intro>
        </IntroContainer>
        <TitleJob>React Developer</TitleJob>
        <OtherText>
          Crafting exceptional websites and driving traffic through SEO expertise - I am a full-stack developer and SEO
          specialist dedicated to achieving your digital goals.
        </OtherText>
      </RightContainer>
    </Container>
  )
}

export default Hero

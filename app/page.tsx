'use client' // this is a client component 👈🏽
// Home Component  entry
import styled from 'styled-components'
import './page.module.css'
import Navbar from './components/NavBar/Navbar'
import HamMenu from './assets/menu-burger2.svg'
import MobileMenu from './components/NavBar/MobileMenu'
import Hero from './components/Hero/Hero'
import WebSection from './components/Web/WebSection'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume'
import Skills from './components/Skill/Skills'
import Contact from './components/Contact/Contact'
import BackToTop from './components/common/BackToTop'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

// CSS Styled Components
const RootContainer = styled.div`
  overflow-x: hidden;
  position: relative;
`
const Container = styled.div`
  width: 100%;
  height: 100vh;
  @media only screen and (max-width: 1024px) {
    min-height: 100vh;
    height: auto;
  }
`

const Menu = styled.div`
  @media only screen and (max-width: 776px) {
    display: none;
  }
`

const Mobile = styled.div`
  display: none;
  @media only screen and (max-width: 776px) {
    display: flex;
    justify-content: space-between;
    height: 44px;
    padding: 20px 10px;
    background-color: #2b2d42;
  }
`
const Left = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  font-size: 30px;
  span {
    color: #1f51ff;
  }
`
const MenuIcon = styled(Image)`
  height: 40px;
  width: 30px;
`

export default function Home() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const handleMenuOpen = () => {
    setMenuOpen(true)
  }

  const handleMenuClose = () => {
    setMenuOpen(false)
  }
  return (
    <>
      <Head>
        <title>Leslie Shumba</title>
      </Head>
      <RootContainer>
        <Container>
          {/* NavBar */}
          <Menu>
            <Navbar />
          </Menu>
          <Mobile>
            <Left>
              LS<span>.</span>
            </Left>
            {/* <button onClick={handleMenuOpen}>ClickMe</button> */}
            <MenuIcon src={HamMenu} alt="MenuButton" onClick={handleMenuOpen} />
            <MobileMenu isOpen={menuOpen} onClose={handleMenuClose} />
          </Mobile>
          {/* Hero Section */}
          <Hero />
        </Container>
        {/* Services */}
        <WebSection />
        {/* Projects */}
        <Projects />
        {/* Resume */}
        <Resume />
        {/* Skills */}
        <Skills />
        {/* Contact */}
        <Contact />
        {/* Back To Top Button */}
        <BackToTop />
        {/* Footer */}
        <Footer />
      </RootContainer>
    </>
  )
}

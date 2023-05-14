// Main Navbar Desktop
import React from 'react'
import styled from 'styled-components'
import { SocialMediaIconsData } from '../../data/social'
import SocialMediaIcon from '../common/SocialMediaIcon'
import VerticalLine from '../common/VerticalLine'

// CSS Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  padding: 0 30px;
  @media only screen and (max-width: 1024px) {
    padding: 0 10px;
  }
`

const Logo = styled.h1`
  color: white;
  font-size: 30px;
  span {
    color: #1f51ff;
  }
`
const RightContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`
const Links = styled.div``

const ListLink = styled.ul`
  display: flex;
  gap: 20px;
`

const LinkItem = styled.li`
  list-style: none;
  color: white;
  font-size: 20x;
`

const LinkItemAdd = styled.a`
  text-decoration: none;
  color: white;
`

const SocialMedia = styled.div`
  display: flex;
  gap: 5px;
`

const Navbar = () => {
  return (
    <Container>
      <Logo>
        LS<span>.</span>
      </Logo>
      <RightContainer>
        <Links>
          <ListLink>
            <LinkItem>
              <LinkItemAdd href="#projects">Projects</LinkItemAdd>
            </LinkItem>
            <LinkItem>
              <LinkItemAdd href="#skills">Skills</LinkItemAdd>
            </LinkItem>
            <LinkItem>
              <LinkItemAdd href="#resume">Resume</LinkItemAdd>
            </LinkItem>
            <LinkItem>
              <LinkItemAdd href="#contact">Contact</LinkItemAdd>
            </LinkItem>
          </ListLink>
        </Links>
        <VerticalLine height={35} />
        <SocialMedia>
          {SocialMediaIconsData.map((data, k) => (
            <SocialMediaIcon data={data} key={k} />
          ))}
        </SocialMedia>
      </RightContainer>
    </Container>
  )
}

export default Navbar

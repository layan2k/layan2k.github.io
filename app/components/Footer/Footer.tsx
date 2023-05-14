// Footer Component
import React from 'react'
import styled from 'styled-components'
import { SocialMediaIconsData } from '../../data/social'
import SocialMediaIcon from '../common/SocialMediaIcon'

// CSS styled-components
const Container = styled.div`
  display: flex;
  height: 100px;
  border-top: 1px solid #1f51ff;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  @media only screen and (max-width: 1024px) {
    padding: 0 10px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0;
    justify-content: center;
    gap: 5px;
  }
`

const Logo = styled.h1`
  color: white;
  span {
    color: #1f51ff;
  }
`

const SocialMedia = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`

const CopyRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 15px;
  gap: 10px;
`

const Footer = () => {
  const currentDate = new Date()
  return (
    <Container>
      <Logo>
        LS<span>.</span>
      </Logo>
      <CopyRight>
        &copy; {currentDate.getFullYear()} IntraSpark. All rights reserved.
        <SocialMedia>
          {SocialMediaIconsData.map((data, k) => (
            <SocialMediaIcon data={data} key={k} />
          ))}
        </SocialMedia>
      </CopyRight>
    </Container>
  )
}

export default Footer

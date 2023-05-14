// Mobile navbar
// import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

// CSS styled-components
const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MenuItem = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  text-decoration: none;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  color: #333;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

interface MainProp {
  isOpen: boolean
  onClose: any
}
const MobileMenu: React.FC<MainProp> = ({ isOpen, onClose }) => {
  const handleClick = () => {
    // Handleclick to close the Navbar
    onClose()
  }

  return isOpen ? (
    <MenuContainer>
      <CloseButton onClick={handleClick}>X</CloseButton>
      <MenuItem onClick={handleClick} href="/#projects">
        Project
      </MenuItem>
      <MenuItem onClick={handleClick} href="/#skills">
        Skills
      </MenuItem>
      <MenuItem onClick={handleClick} href="/#resume">
        Resume
      </MenuItem>
      <MenuItem onClick={handleClick} href="/#contact">
        Contact
      </MenuItem>
    </MenuContainer>
  ) : null
}

export default MobileMenu

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Up from '../../assets/up.svg'
import Image from 'next/image'
const BackToTopButton = styled.button`
  display: none;
  position: fixed;
  bottom: 100px;
  right: 20px;
  padding: 10px;
  background-color: royalblue;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  &.visible {
    display: block;
    opacity: 1;
  }
  &:hover {
    background-color: blue;
  }
`

const ButtonImage = styled(Image)`
  height: 10px;
  width: 30px;
`

function BackToTop() {
  const [isBottom, setIsBottom] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = document.documentElement.scrollTop
      const scrollBottom = scrollTop + windowHeight

      if (scrollBottom >= documentHeight) {
        setIsBottom(true)
      } else {
        setIsBottom(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleButtonClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <BackToTopButton
      className={isBottom ? 'visible' : ''}
      onClick={handleButtonClick}
      title='BackToTop'
    >
      <ButtonImage src={Up} alt='Back To Top' />
    </BackToTopButton>
  )
}

export default BackToTop

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
const ImageItem  = styled(Image)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`
const LinkIcon = styled(motion.a)`
  text-decoration: none;
`

interface MainProp {
  data: any
}

const  SocialMediaIcon: React.FC<MainProp> = ({ data }) => {
  const Icon = data
  return (
    <>
      <LinkIcon
        href={Icon.link}
        target='_blank'
        rel='noopener noreferrer'
        whileHover={{ scale: 1.2 }}
      >
        <ImageItem alt={Icon.name} src={Icon.logo} />
      </LinkIcon>
    </>
  )
}

export default SocialMediaIcon

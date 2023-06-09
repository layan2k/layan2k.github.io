// Vertical Line Component
import React from 'react'
import styled from 'styled-components'

// CSS styled-components
const Container = styled.div<{ height: number }>`
  border-left: 2px solid darkgrey;
  height: ${props => (props.height ? props.height : '35px')};
`

interface MainProps {
  height: number
}

const VerticalLine: React.FC<MainProps> = ({ height }) => {
  return <Container height={height}></Container>
}

export default VerticalLine

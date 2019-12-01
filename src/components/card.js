import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 500px;
  background-color: purple;
`
const Card = () => (
  <Container>
    <p>hellow world</p>
  </Container>
)

export default Card;
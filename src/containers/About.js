
import React from 'react'
import styled from 'styled-components'
//
const Tester = styled.div`
  {
  width: 350px;
  border-radius: 2px;
  border: 1px solid #efefef;
  padding: 1em;
  }
 
  h1 {
    font-size: 2rem;
  }


`
export default () => (
  <Tester>
    <h1>This is what we're all about.</h1>
    <p>React, static sites, performance, speed. It's the stuff that makes us tick.</p>
  </Tester>
)

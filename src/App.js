import React from 'react'
import { Router, Route, Switch, Redirect, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
//
import Home from 'containers/Home'
import About from 'containers/About'
import Work from 'containers/Work'

injectGlobal`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: hsl(0,0%,97%);
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const AppStyles = styled.div`
  {
    height: 100%;
    margin: 0 auto;
    max-width: 415px;
  }

  nav {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  
  .navLink {
    color: hsla(0,0%,0%,87);
    font-size: 1.25rem;
    font-weight: 800;
    text-transform: uppercase;
    padding: .5em 1em;
  }    
  .content {
    padding: 1rem;
  }
`

export default () => (
  <Router>
    <AppStyles>
      <nav>
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/blog">Work</Link>
        <Link className="navLink" to="/about">About</Link>
      </nav>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Work} />
          <Redirect to="/" />
        </Switch>
      </div>
    </AppStyles>
  </Router>
)

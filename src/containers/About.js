/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
//
const About = styled.div`
  max-height: 100%;
  display: grid;
  grid-template-rows:
  minmax(150px, auto)
  minmax(auto, auto)
  minmax(100px, auto)
  minmax(200px, auto)
  grid-template-columns: 
  2fr 1fr  
  minmax(200px, auto) ;
  grid-template-areas:
    'a a a e e d'
    'a a a e e d'
    'c c c e e d'
    'c c c e e d';
`

const Summary = styled.section`
  padding: 1em;
  grid-area: a;
  h1 {
    font-size: 1.75rem;
    margin: 0;
  }  
  p {
    font-size: 1.25rem;
    margin: 0;
  }
`

const SketchPlugins = styled.section`
  grid-area: d;
  padding: 1em;
  h2 {
    font-size: 1.5rem;
    margin: 0;
    padding-bottom: 0;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 1.25rem;
    padding: .5em 0;
    width: 100%;
    margin-top: .5em;
  }
  .runner {
    background-color: dodgerblue;
    background-image: url('http://sketchrunner.com/img/logo-big.svg');
    height: calc(336px /2);
    width: calc(935px /2);
    background-size: contain;
    repeat: no-repeat;
    border-radius: 5px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.23);
  }
  .distributor {
    background-color: dodgerblue;
    background-image: url('https://github.com/PEZ/SketchDistributor/blob/master/distribution.png?raw=true');
    height: calc(336px /2);
    width: calc(935px /2);
    background-size: cover;
    border-radius: 5px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.23);
  }
  .comma {
    background-color: dodgerblue;
    background-image: url('https://camo.githubusercontent.com/67da0b3e26fd563f6c9548e5fb759b8a3771dc23/687474703a2f2f756f2e65652f636f6d6d612f636f6d6d612d76312e342e706e67');
    height: calc(336px /2);
    width: calc(935px /2);
    background-size: cover;
    border-radius: 5px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.23);
  }
`
const AboutMe = styled.section`
  grid-area: c;
  padding: 1em;
  h1 {
    color: rgba(0,0,0,.65);
    font-size: 20px;
  }
`
export default () => (
  <About>
    <Summary>
      <h1>Hi, I'm Kelsy</h1>
      <p>UX Designer at <a href="https://www.overstock.com/">OVERSTOCK</a></p>
    </Summary>

    <SketchPlugins>
      <h2>Top 5 Sketch Plugins</h2>
      <ul>
        <li><div className="runner"><a href="http://sketchrunner.com">runner</a></div></li>
        <li><div className="distributor"><a href="https://github.com/PEZ/SketchDistributor">sketch distributor</a></div></li>
        <li><div className="comma"><a href="https://github.com/margusholland/Comma">comma</a></div>
        </li>
        <li><a href="https://github.com/fuggfuggfugg/sketch-dynamic-button-3.5">dynamic button</a></li>
        <li><a href="https://websiddu.github.io/sketch-material/">sketch material</a></li>
      </ul>
    </SketchPlugins>
    <AboutMe>
      <h1>hello world</h1>
    </AboutMe>

  </About>
)

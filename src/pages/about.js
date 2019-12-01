import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"

import self from "../images/self.jpg"


/*

Background
#16161a
Headline
white
Paragraph
#94a1b2
Button
#7f5af0
Button text
white
Illy stroke
#16161a
Illy main
white
Illy highlight
#7f5af0
Illy secondary
#72757e
Illy tertiary
#2cb67d


Background
#f8f5f2
Headline
#232323
Paragraph
#222525
Button
#078080
Button text
#232323
Illy stroke
#232323
Illy main
white
Illy highlight
#078080
Illy secondary
#f45d48
Illy tertiary
#f8f5f2


*/


export const PageWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 624px;
  margin: 0 auto;
  padding: 18px 8px;
  max-height: 100vh;
  a {
    color: hsl(255, 80%, 50%, 1);
    transition: color 300ms ease-in-out;
  }
  a:hover {
    color: hsl(255, 100%, 20%, 0.5);
  }

  aside {
    margin-bottom: 2.5rem;
  }
  header {
    text-align: right;
  }

  .sticky-footer {
    height: 32px;
    position: sticky;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    padding-right: 16px;
  }
`
export const PageTitle = styled.h1`
  font-weight: 900;
  font-size: 6rem;
  text-transform: uppercase;
  color: rgba(6, 6, 6, 0.666);
  text-shadow: #6995ff 2px 5px;
  transition: all 300ms ease-in-out;
`

const ContentWrapper = styled.div`
  padding: 16px 16px 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fit, minmax(80px, 150px));
  .self__title {
    font-size: 2.25rem;
    grid-column: 1 / span 4;
    grid-row: 1;
    align-self: center;
    margin-bottom: 0;

    font-weight: 900;
  }
  .self__description {
    grid-row: 2;
    align-self: center;
    margin-bottom: 0;
  }
  .self__img {
    background: #fbfbfb;
    border-radius: 12px;
    min-width: 200px;
    max-width: 250px;
    grid-column: 2 / span 3;
    align-self: center;
    padding: 24px 24px 0;
    justify-self: center;
    box-shadow: 0px 8px 16px rgba(8, 35, 48, 0.2);
    transition: all 300ms ease-in-out;
    :hover {
      transform: scale(0.99);
      box-shadow: 0px 8px 16px rgba(8, 35, 48, 0);
    }
  }
  .self__blurb {
    grid-column: 2 / span 3;
    grid-row: 3;
    font-size: 1.16rem;
    line-height: 1.5;
    @media (max-width: 375px) {
      font-size: 1.24rem;
      grid-column: 1 / span 4;
    }
  }

  .self__links {
    list-style: none;
    margin-left: 0;
    font-size: 1rem;
  }

  li {
    display: inline;
  }

  li ~ li {
    margin-left: 40px;
  }

  .link {
    text-transform: uppercase;
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: 700;
  }
`

const PageLinks = styled.footer`
  display: flex;
  flex-flow: column wrap;
  border-top: 2px solid black;
  margin-top: 24px;
  ul {
    list-style-type: none;
    margin-left: 0;
  }

  a {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 16px;
  }
`

const AboutPage = () => (
  <PageWrapper>
    <SEO title="About" />
    <PageTitle>About</PageTitle>
    <ContentWrapper>
      <img
        className="self__img"
        src={self}
        alt="kelsy gagnebin holding a phone to indicate he's obviously a serious product designer"
      />
      <h2 className="self__title">Kelsy Michael Gagnebin</h2>
      <h3 className="self__description">
        Product Designer <span className="">@SLC, UT</span>
      </h3>
      <div className="self__blurb">
        <p>
          Hi, my name is Kelsy. I'm a product designer currently living in Salt
          Lake City and working with brilliant & talented people at{" "}
          <a href="https://www.mediciland.com/">Medici Land Governance</a>.
        </p>
        <p>
          I created and coded everything on this site. Doodles made in{" "}
          <a href="https://paper.bywetransfer.com/">Paper</a> on an old iPadPro
          with a cracked screen.
        </p>
        <p>
          While a{" "}
          <a href="https://uxdesign.cc/what-id-rather-talk-about-when-you-ask-me-about-design-tools-de9540c27460">
            few
          </a>{" "}
          people would rather talk about things other than design tools, I enjoy
          them.
        </p>

        <p>
          <span className="link">Linked & Github</span>
          <ul className="self__links">
            <li>
              <a href="https://www.linkedin.com/in/kelsygagnebin/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/kelsymichael">GitHub</a>
            </li>
          </ul>
        </p>
      </div>
    </ContentWrapper>

    <PageLinks>
      <h3>Other things</h3>
      <ul>
        <li>
          <Link to="/shortcuts/">keyboard shortcuts</Link>
        </li>
        <li>
          <Link to="/">Go back to the homepage</Link>
        </li>
      </ul>
    </PageLinks>
  </PageWrapper>
)

export default AboutPage

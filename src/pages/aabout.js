import React from "react"
import styled from "styled-components"

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

const Wrapper = styled.div`
  padding: 32px 16px;
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  overflow: auto;
  /* background-color: #fafafa; */
  background-color: #f8f9fa;
`

// const Title = styled.h1`
//   font-size: 32px;
//   padding: 32px 24px;
// `

const ResumeWrapper = styled.section`
  line-height: 1.6;
  padding: 12px 24px;
  max-width: 45ch;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  margin: 16px;
  border-radius: 15px;
`

const Likes = styled.section`
  line-height: 1.6;
  max-width: 320px;
  padding: 32px 24px 12px;
  box-shadow: 0px 4px 8px rgba(8, 35, 48, 0.24);
  margin: 16px;
  border-radius: 12px;

  li {
    list-style-type: disc;
  }
`

const About = () => (
  <Wrapper>
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores alias
      itaque, voluptatibus ea.
    </p>

    <h2>Resume</h2>

    <h3>United States Air Force</h3>
    <b>2011–2013</b>
    <em>System Administrator</em>

    <ul>
      <li>over 400 personnel</li>
      <li>
        5 Clinics - Eventually 2 Clinic closures and the overseeing of the IT
        Move to the new premier Dental School
      </li>
      <li>
        <code>power-cycle</code> and check the cables
      </li>
    </ul>

    <b>2008–2011</b>
    <em>Dental Technician</em>

    <ul>
      <li>Residency Program -- Prosthedontics</li>
      <li>
        5 Clinics - Eventually 2 Clinic closures and the overseeing of the IT
        Move to the new premier Dental School
      </li>
      <li>
        <code>power-cycle</code> and check the cables
      </li>
    </ul>

    <ResumeWrapper>
      I like thinking about how people work.
    </ResumeWrapper>
    <Likes>
      <h3>Things I like</h3>
      <ul>
        <li>Figma</li>
        <li>Sketch</li>
        <li>Adobe XD</li>
        <li />
        <li />
        <li />
      </ul>
    </Likes>
  </Wrapper>
)

export default About

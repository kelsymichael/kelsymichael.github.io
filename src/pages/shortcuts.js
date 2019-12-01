import React from "react"
import styled from "styled-components"

const PageWrapper = styled.div`
  box-sizing: border-box;
  max-width: 320px;
`

const Shortcuts = () => (
  <PageWrapper>
    <h1>Reducing Complexity</h1>
    <div className="intro">
      <h2>Reducing Complexity</h2>

      <h4 className="">
        tl;dr - an Application's menu item can be assigned to a keyboard
        shortcut, do it for speed & consistency
      </h4>

      <p className="col01">
        The bulk of my tasks in design tools generally involve moving an object
        around the screen and aligning that object to others. By keeping those
        ~80% of actions consistent across apps, it reduces the cognitive load
        and makes bouncing between apps less painful.
      </p>

      <p className="col02">
        System Preferences / Keyboard / Shortcuts / App Shortcuts / Add new
        shortcut
      </p>

      <h4>quick start</h4>
      <p>
        Copy the menu <em>exactly</em> as shown; Sub-menus are listed with an
        arrow <span className="toNote">-></span> ('-' + '>'). This will have{" "}
        <em>no</em> spaces between items
      </p>

      <h5>Getting to Keyboard preferences</h5>
    </div>
  </PageWrapper>
)

export default Shortcuts

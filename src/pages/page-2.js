import React from "react"
import { Link } from "gatsby"
import Card from "../components/card"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Details = styled.div`

  max-width: 320px;
  margin: 0 auto;

  details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: .5em .5em 0;
}

  summary:hover{
    cursor: pointer;
  }

summary {
    font-weight: bold;
    margin: -.5em -.5em 0;
    padding: .5em;
}

details[open] {
    padding: .5em;
}

details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: .5em;
}
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Coupon Confusion</h1>
    <p>The problem with research - and people forgetting</p>

    <h2>Artifacts</h2>

    <h2>Why does anyone care?</h2>
    <p>
      There's a <em>lot</em> of value in watching user tests. The truth is that
      nobody cares about your user-tests more than you do. Even when results
      depend on the outcome, it's the end-result people want -- not the hours of
      slogging through videos and taking notes.
    </p>

    <h2>It's a slow process</h2>
    <p>10 User Tests</p>
    <p>Each test ~ 15mins</p>
    <p>
      Healthy estimate and watching videos at 1.5speed -- stopping, going back
      and annotating ends up evening a lot of that part out.
    </p>
    <p>
      total time = ~ 150mins of <em>just listening</em>
    </p>

    <h3>Checklist</h3>
    <p>these things take time - some research checklists & resources</p>

    <h3>Tools Used</h3>
    <p>Dropbox Paper</p>


    <div>
      <input type="checkbox" name="research plan" id="" />
      <label htmlFor="research plan">shit</label>
    </div>
    <div>
      <input type="checkbox" name="peer review" id="" />

      <label htmlFor="peer review">peer-review</label>
    </div>

    <ul>
      <li>making research plan</li>
      <li>peer review</li>
      <li>making research plan</li>
      <li>making research plan</li>
    </ul>

    <ul>
      <li>annotations</li>
      <li>editing</li>
      <li>sending out findings</li>
      <li>synthesizing</li>
    </ul>
    <p>
      extra time - annotations, editing, writing up the report, sending out
      findings, scheduling meetings to go over findings, gathering feedback,
      updating, etc.,
    </p>

    <Details>
    <details>
      <summary>Details</summary>
      Something small enough to escape casual notice.
    </details>
    </Details>
    <Link to="/">Go back to the homepage</Link>
    <Card />
  </Layout>
)

export default SecondPage

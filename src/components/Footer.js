import React from "react"
import { Container, Icon, Segment } from "semantic-ui-react"

const Footer = props => {
  return (
    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Container textAlign="center">
        <p>
          LastFm Analyzer. Made by{" "}
          <a href="https://github.com/pavelgar">Pavel Garmuyev </a>
          <Icon name="github" size="large" />
        </p>
      </Container>
    </Segment>
  )
}

export default Footer

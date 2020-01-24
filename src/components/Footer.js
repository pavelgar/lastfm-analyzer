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
        <Icon name="github" size="large" />
        <p>
          Made by <a href="https://github.com/pavelgar">Pavel Garmuyev</a>
          <br />
          Submit suggestions and issues{" "}
          <a href="https://github.com/pavelgar/lastfm-analyzer/issues">
            here <Icon name="external" />
          </a>
        </p>
      </Container>
    </Segment>
  )
}

export default Footer

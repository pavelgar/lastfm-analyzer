import React from "react"
import { Container, Header, Card } from "semantic-ui-react"
import ColorLine from "./ColorLine"
import PreviewCard from "./PreviewCard"

const Home = props => {
  return (
    <>
      <Container style={{ paddingBottom: "4rem" }}>
        <Header as="h1">
          Visualizations
          <Header.Subheader>
            Collection of currently available scrobble data visualizations.
          </Header.Subheader>
        </Header>
      </Container>
      <ColorLine />
      <Container style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <Header dividing as="h2">
          Listening statistics
        </Header>
        <Card.Group stackable itemsPerRow={3}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
            <PreviewCard key={i} />
          ))}
        </Card.Group>
      </Container>
    </>
  )
}

export default Home

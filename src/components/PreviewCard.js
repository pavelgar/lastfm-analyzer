import React from "react"
import { Card, Image, Button } from "semantic-ui-react"

const PreviewCard = props => {
  return (
    <Card>
      <Image wrapped ui={false} src="http://placekitten.com/500/500" />
      <Card.Content>
        <Card.Header>Listening Heatmap</Card.Header>
        <Card.Meta>Listening counts</Card.Meta>
        <Card.Description>
          Visualize your daily listening behaviour with this interactive heatmap.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group fluid>
          <Button content="View" icon="eye" />
          <Button content="Share" icon="share alternate" />
        </Button.Group>
      </Card.Content>
    </Card>
  )
}

export default PreviewCard

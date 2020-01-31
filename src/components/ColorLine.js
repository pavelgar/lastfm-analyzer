import React from "react"
import { Grid } from "semantic-ui-react"

const colors = ["red", "orange", "yellow", "green", "teal", "blue", "purple"]

const Home = props => {
  return (
    <Grid padded columns={colors.length}>
      {colors.map((color, i) => (
        <Grid.Column
          key={i}
          color={color}
          style={{ paddingTop: 1, paddingBottom: 1 }}
        ></Grid.Column>
      ))}
    </Grid>
  )
}

export default Home

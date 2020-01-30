import React, { useEffect, useRef } from "react"
import userService from "../services/user"
import * as d3 from "d3"

const ActivityChart = ({ user }) => {
  const canvas = useRef(null)

  useEffect(() => {
    if (user) {
      userService.getScrobbles(user.id).then(data => {
        if (data) {
          const dateCounts = d3
            .nest()
            .key(d => new Date(d.date * 1000).toISOString().split("T")[0])
            .rollup(v => v.length)
            .entries(data)
            .reverse()

          console.log(dateCounts)
          draw(dateCounts)
        }
      })
    }
  }, [user])

  const draw = data => {
    const width = 700
    const height = 500
    const svg = d3
      .select(canvas.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "lightgray")
  }

  return <div ref={canvas} />
}

export default ActivityChart

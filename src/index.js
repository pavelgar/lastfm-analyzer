import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import store from "./store"
import App from "./components/App"
import "semantic-ui-less/semantic.less"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)

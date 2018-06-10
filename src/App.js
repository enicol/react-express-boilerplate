import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {

  state = {
    error: false, // always handle error and laoding state for complexe apps
    loading: false
  }

  async componentDidMount () {
    try {
      const response = await axios.get('/healthcheck')
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    return (
      <div>
        Hello0o0
      </div>
    )
  }
}

export default App

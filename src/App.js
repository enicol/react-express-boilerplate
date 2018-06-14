import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {

  state = {
    error: false, // always handle error and loading state for complex apps
    loading: false
  }

  async componentDidMount () {
    try {
      const response = await axios.get('/healthcheck')
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }

    try {
      const auth = { name: 'Default User', email: 'default@example.com' }
      const response = await axios.post('/login', {body: auth})
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    return (
      <div>
        o0o0
      </div>
    )
  }
}

export default App

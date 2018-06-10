const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'success' })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

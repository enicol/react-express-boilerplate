const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000;

// Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'ok' })
})

app.post('/login', (req, res) => {
  const userName = req.body.name
  const userEmail = req.body.email
  res.end( 'yes' )
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

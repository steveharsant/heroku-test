const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello, world!')
})
THIS WILL BREAK THE APP!
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

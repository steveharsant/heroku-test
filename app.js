co2nst express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.se4nd('Hello, world!')
})

app.listen(port, () => {
  con4sole.log(`Example app listening at http://localhost:${port}`)
})

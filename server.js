let express = require('express')

let app = express()

app.use(express.json())

app.use(express.static(`${__dirname}/public`))

app.listen(4000, () => {
  console.log('server running on port 4000')
})
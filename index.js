let express = require('express')

let app = express()

app.use(express.json())



app.listen(4000, () => {
  console.log('server running on port 4000')
})
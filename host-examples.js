const express = require('express')
const app = express()
const port = 80

app.use('/examples', express.static('examples'))
app.use('/dist', express.static('dist'))

app.listen(port, () => console.log(`App listening on port ${port}.`))

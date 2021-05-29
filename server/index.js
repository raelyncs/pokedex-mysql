// TODO: Create an express server

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router.js')
const path = require('path')
const app = express()
const port = 3000

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/api', router)

app.listen(port, () => {
  console.log(`listening on localhost:${port}`)
})
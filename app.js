const express = require('express');
const { dirname } = require('path');
const app = express()
const path = require('path'); 
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/index.html'))
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.static(__dirname + '/public'));
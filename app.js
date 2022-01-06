const express = require('express');
const fetch = require('cross-fetch');
const app = express()
const port = process.env.PORT || 3000
const backend_url = 'https://mobilny-backend.herokuapp.com'

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.status(404).send("Sorry this domain isn't ready yet!")

  /*
  (async () => {
    try {
      let data = await fetch(backend_url+'/phones');
      
      if (data.status >= 400) {
        throw new Error("Bad response from the server");
      }
      
      let phones = await data.json();
    
      res.render('index',{phones: phones })
    } catch (err) {
      console.error(err);
    }
  })();
  */
})


app.get('/:phone/models', (req, res) => {
  res.status(404).send("Sorry this domain isn't ready yet!")
  /*
  (async () => {
    try {
      let data = await fetch(backend_url+'/phones/'+req.params.phone + '/models');
      
      if (data.status >= 400) {
        throw new Error("Bad response from server");
      }
      
      let models = await data.json();
    
      res.render('Vaelg-Model',{models: models })
    } catch (err) {
      console.error(err);
    }
  })();
  */
})


app.get('/:phone/models/:model', (req, res) => {
  res.status(404).send("Sorry this domain isn't ready yet!")
  /*
  (async () => {
    try {
      let data = await fetch(backend_url+'/phones/'+req.params.phone+ '/models/'+ req.params.model);
      
      if (data.status >= 400) {
        throw new Error("Bad response from server");
      }

      
      let model = await data.json();

    
      res.render('Produkt',{model: model })
    } catch (err) {
      console.error(err);
    }
  })();
  */
})


app.get('/kontakt', (req, res) => {
  res.status(404).send("Sorry this domain isn't ready yet!")

  //res.render('Kontakt')
})

app.get('/om', (req, res) => {
  res.statusCode = 404
  res.send('Site is not ready')
  //res.render('om')
})


app.use(express.static(__dirname + '/public'))

app.listen(process.env.PORT || port, () => {
  console.log(`app listening at Port: ${port}`)
})



const { json } = require('express');
const express = require('express');
const { Client } = require('pg');
const pg = require('pg');
const connectionString = process.env.DATABASE_URL
const port = process.env.PORT || 3000
const { dirname } = require('path');
const app = express()
const path = require('path');

Iphoneparts = [
  { "name": "backglasss", "price": "400", "img": "/images/parts/backscreen.png" },
  { "name": "frontscreen", "price": "700", "img": "/images/parts/frontscreen.png" },
  { "name": "speaker", "price": "200" },
  { "name": "microphone", "price": "200" }
]

iphonexModels = [
  { "name": "IPhone x", "img": "/images/phones/iphonex.png", "parts": Iphoneparts },
  { "name": "IPhone xs", "img": "/images/phones/iphonexs.png", "parts": Iphoneparts },
  { "name": "IPhone xs max", "img": "/images/phones/iphonexsmax.png", "parts": Iphoneparts },
  { "name": "IPhone xr", "img": "/images/phones/iphonexr.png", "parts": Iphoneparts }]

iphone11Models = [
  { "name": "IPhone 11", "img": "/images/phones/iphone11.png", "parts": Iphoneparts },
  { "name": "IPhone 11 Pro", "img": "/images/phones/iphone11pro.png", "parts": Iphoneparts },
  { "name": "IPhone 11 Pro Max", "img": "/images/phones/iphone11promax.png", "parts": Iphoneparts }]

iphone12Models = [
  { "name": "IPhone 12", "img": "/images/phones/iphone12.png", "parts": Iphoneparts },
  { "name": "IPhone 12 Pro", "img": "/images/phones/iphone12pro.png", "parts": Iphoneparts },
  { "name": "IPhone 12 Pro Max", "img": "/images/phones/iphone12promax.png", "parts": Iphoneparts },
  { "name": "IPhone 12 Mini", "img": "/images/phones/iphone12mini.png", "parts": Iphoneparts }]

phones = [
  { "name": "IPhone X", "models": iphonexModels },
  { "name": "IPhone 11", "models": iphone11Models },
  { "name": "IPhone 12", "models": iphone12Models }
]

function createConnection() {
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });

  client.connect();
  return client
}


app.get('/phones', (req, res) => {
  //res.status(404).send("Sorry this domain isn't ready yet!")
  (async () => {
    try {
      const client = createConnection();
      const result = await client.query(
        'select phones.phone_id, phones.phone_name, images.image_path from phones, images where phones.image_id = images.image_id');


      res.send(JSON.stringify(result.rows))
    } catch (error) {
      res.send({ 'error': "There was a server fault" })
    }



  })();

})

app.get('/phones/:phone/models', (req, res) => {
  //res.status(404).send("Sorry this domain isn't ready yet!")
  //res.send(req.params.model)
  (async () => {
    try {
      const client = createConnection();
      const query = {
        // give the query a unique name
        name: 'fetch-models',
        text: 'select models.model_name, images.image_path from models, images, phones WHERE models.image_id = images.image_id and models.phone_id = phones.phone_id and phones.phone_name = $1',
        values: [req.params.phone],
      }
      
      const result = await client.query(
        query );
      const rows = result.rows;
      res.send(rows)
    } catch (error) {
      console.log(error)
      res.send({ 'error': "There was a server fault" })
    }


  })();
  //let phone = phones.find(phone => phone.name == req.params.phone)

  //console.log(phone)
  //if (phone != undefined) {
  //res.send(
  //JSON.stringify(phone.models.map(model => {
  //return { "name": model.name, "img": model.img }
  //})))
  // }
  //else {
  // res.send(JSON.stringify({ "message": "Phone model is not present" }))
  // }

})


app.get('/phones/:phone/models/:model', (req, res) => {
  //res.status(404).send("Sorry this domain isn't ready yet!")
  //res.send(req.params.model)
  (async () => {
    try {
      const client = createConnection();
      const query = {
        // give the query a unique name
        name: 'fetch-models',
        text: 'SELECT images.image_path, parts.part_name, models_parts.price FROM models_parts, models, parts, images WHERE models.model_id = models_parts.model_id and parts.part_id = models_parts.part_id and models_parts.image_id = images.image_id and models.model_name = $1',
        values: [req.params.model],
      }
      
      const result = await client.query(
        query );
      const rows = result.rows;
      rows.find(part => part.part_name == "frontskaerm").part_name = "frontskærm"
      
      res.send(
        JSON.stringify({ 'model_name': req.params.model, 'parts': rows})
        )
    } catch (error) {
      console.log(error)
      res.send({ 'error': "There was a server fault" })
    }


  })();

  //let model = phones.find(phone => phone.name == req.params.phone).models.find(model => model.name == req.params.model)

  //if (model != undefined) {
  //  res.send(
  //    JSON.stringify({ 'name': model.name, 'parts': model.parts })
  //  )
 // }
 // else {
  //  res.send(JSON.stringify({ "message": "Phone model is not present" }))
 // }

})

app.get('/user', (req, res) => {
  res.send("not yet implemented route")
})

app.listen(process.env.PORT || port, () => {
  console.log(`app listening at Port: ${port}`)
})

app.use(express.static(__dirname + '/public'))
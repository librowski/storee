const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://libros:abc@127.0.0.1:5432/storee');
const models = require('./models/index');
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/characters', async (req, res, next) => {
  try {
    const entities = await models.Entity.findAll();
    res.send(entities);
  } catch (error) {
    next(error);
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established.");
    models.Entity.findAll().then(entities => {
      entities.forEach((entity) => {
        entity.getEntityType().then(type => {
          console.log(type.name);
        })
      })
    });
  })
  .catch((response) => {
    console.log(response);
    console.log("Nope.");
  });

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors')

const {
  mongoose
} = require('./db/mongoose');
const {
  Recipe
} = require('./models/recipe');

// creates a express app where i will hook my services
var app = express();

// middleware example to log the request into a file
app.use((req, res, next) => {
  var log = `${new Date()} : ${req.url} : ${req.method} : ${req.statusCode} : \n`;
  fs.appendFile('server.log', log);
  next();
});

// this is the step where we parse the body as json
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.db = mongoose;
  req.Recipe = Recipe;
  next();
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello! this is a express app!');
  // var reqObj = req;
  // res.send(reqObj);
});

app.get('/recipes', (req, res) => {
  req.Recipe.find().then(
    (recipes) => {
      res.send(recipes);
    },
    (e) => {
      res.status(400).send(e);
    })
});

app.post('/recipes', (req, res) => {
  req.body.forEach(recipe => {
    var recipeToSave = new req.Recipe({
      name: recipe.name,
      description: recipe.description,
      imagePath: recipe.imagePath,
      ingredients: recipe.ingredients
    });

    recipeToSave.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  });
});

app.listen(3000, () => {
  console.log('server is started in port 3000!');
});

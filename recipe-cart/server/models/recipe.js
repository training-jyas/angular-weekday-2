var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    description: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    imagePath: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    ingredients: [{
      name: {
        type: String,
        trim: true
      },
      amount: {
        type: Number
      }
    }]
});

var Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = {
  Recipe
};

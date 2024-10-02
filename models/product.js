const mongoose = require('mongoose');

const collectionName = "Products"  // db table

const productSchema = new mongoose.Schema({
  name : {type: String , required: true},
  price : {type: Number, required: true}
});

module.exports = mongoose.model(`${collectionName}`, productSchema);
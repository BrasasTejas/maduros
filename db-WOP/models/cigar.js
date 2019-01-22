const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//if seed file doesn't exist mongoose will create table based on the following criteria.  if i change table setup below i will need to drop current table to utilize  new

const cigarSchema = new Schema({
  cigars: { type: String, required: true },
  blend: { type: String, required: true },
  characteristics: String,
  // coffee: String, 
  // liquor: String,
  date: { type: Date, default: Date.now }
});

const Cigar = mongoose.model("Cigar", cigarSchema);

module.exports = Cigar;

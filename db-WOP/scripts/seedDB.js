const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Cigars humidor and inserts the cigars below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactsmokinglist"
  // "mongodb://localhost:27017/reactsmokinglist, {useNewUrlParser: true}"
);

//the scientific term for cigarSeed is madurosFetus - many wars have been fought for madurosFetus' rights
//referring to the flipbook images....
//cigar is the "Wrapper"
//blend is the "Binder"
//characteristics are the "finish"
//aroma is the ....mother fucking "Aroma"
//coffee is coffee, liquor is liquor
const cigarSeed = [
  {
    cigar: "Yarguera Shade",
    blend: "Honduran Criollo",
    characteristics: "Complex, Rare, Majestic"
    aroma: "Spicy, Chocolate, Coffee Beans, Earthy"
    coffee: "Caramel Macchiato",
    liquor: "Scotch Whiskey",
    date: new Date(Date.now())
  },
  {
    cigar: "San Andres Morron",
    blend: "Nicaraguan",
    characteristics: "Elegant, Clean"
    aroma: "Sweet Chocolate, Walnuts, Earthy"
    coffee: "Double Espresso",
    liquor: "Single Malt",
    date: new Date(Date.now())
  },
  {
    cigar: "",
    blend: "",
    characteristics: ""
    aroma: ""
    coffee: "",
    liquor: "",
    date: new Date(Date.now())
  },
  {
    cigar: "",
    blend: "",
    characteristics: ""
    aroma: ""
    coffee: "",
    liquor: "",
    date: new Date(Date.now())
  },
  {
    cigar: "",
    blend: "",
    characteristics: ""
    aroma: ""
    coffee: "",
    liquor: "",
    date: new Date(Date.now())
  {
    cigar: "",
    blend: "",
    characteristics: ""
    aroma: ""
    coffee: "",
    liquor: "",
    date: new Date(Date.now())
  },
  {
    cigar: "",
    blend: "",
    characteristics: ""
    aroma: ""
    coffee: "",
    liquor: "",
    date: new Date(Date.now())
  },
  {
    cigar: "",
    blend: "",
    characteristics: ""
    aroma: ""
    coffee: "",
    liquor: "",
    date: new Date(Date.now())
  },
  {
    cigar: "",
    blend: "",
    characteristics: ""
    aroma: ""
    coffee: "",
    liquor: "",
    date: new Date(Date.now())
  },
  {
    cigar: "",
    blend: "",
    characteristics: ""
    aroma: ""
    coffee: "",
    liquor: "",
    date: new Date(Date.now()))
  },
  {
    cigar: "",
    blend: "",
    characteristics: ""
    aroma: ""
    coffee: "",
    liquor: "",
    date: new Date(Date.now())
  },
  {
    cigar: "",
    blend: "",
    characteristics: ""
    aroma: ""
    coffee: "",
    liquor: "",
    date: new Date(Date.now())
  {
    cigar: "",
    blend: "",
    characteristics: ""
    aroma: ""
    coffee: "",
    liquor: "",
    date: new Date(Date.now())
  },
  {
    cigar: "",
    blend: "",
    characteristics: ""
    aroma: ""
    coffee: "",
    liquor: "",
    date: new Date(Date.now())
  },
  {
    cigar: "",
    blend: "",
    characteristics: ""
    aroma: ""
    coffee: "",
    liquor: "",
    date: new Date(Date.now())
  },
  {
    cigar: "",
    blend: "",
    characteristics: ""
    aroma: ""
    coffee: "",
    liquor: "",
    date: new Date(Date.now())
  }
];

db.Cigar.remove({})
  //a cigarSeed is a cigar from the moment of germination.. I think
  .then(() => db.Cigar.collection.insertMany(cigarSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

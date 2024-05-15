// server.js

// const fs = require('fs');
// import {fs} from "fs"
import * as fs from 'node:fs';

// Function to generate a random name
function generateRandomName() {
    const adjectives = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange', 'Pink', 'Black', 'White'];
    const nouns = ['Dog', 'Cat', 'Bird', 'Fish', 'Lion', 'Tiger', 'Elephant', 'Monkey', 'Horse'];
    
    const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const randomNounIndex = Math.floor(Math.random() * nouns.length);
    
    const randomAdjective = adjectives[randomAdjectiveIndex];
    const randomNoun = nouns[randomNounIndex];
    
    return `${randomAdjective} ${randomNoun}`;
  }
  

const landType = ["Rocky", "Plain", "Marsh","Glacier",  "Mountain"]

const pickRandomLand = () => {
    const land = Math.floor(Math.random() * landType.length)
    return land
}
// Function to generate the array
function generateArray(length) {
  const array = [];
  for (let i = 1; i <= length; i++) {
    array.push({ id: i.toString(), land: generateRandomName(), type: pickRandomLand() });
  }
  return array;
}

// Generate the array
const dataArray = generateArray(225);

// Write the array to a file
fs.writeFile('data.json', JSON.stringify(dataArray), function (err) {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('Array data has been written to data.json');
  }
});

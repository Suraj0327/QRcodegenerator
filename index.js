/* 
1. Use the inquirer npm package to get user input.*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
  { "message":"enter your URL",
  "name":"URL"}
])
.then((answers) => {
const url=answers.URL;
var qr_svg = qr.image(url);
 qr_svg.pipe(fs.createWriteStream('qr_img.png'));

fs.writeFile("URL.txt",url,(err)=>{
    if(err)throw err;
    console.log("the file have been saved");
});})
.catch((error) => {
  if (error.isTtyError) {
    " Prompt couldn't be rendered in the current environment"
  } else {
    "Something else went wrong" 
  }
});

// /*. Use the qr-image npm package to turn the user entered URL into a QR code image.*/
// 
 
// 
 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

// /*3. Create a txt file to save the user input using the native fs node module.
// */
// const fs = require("fs");



// fs.readFile("message.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

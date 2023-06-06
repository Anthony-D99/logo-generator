const inquirer = require('inquirer')
const fs = require('fs')
const shapes = require('./lib/shapes')
let svg

inquirer.prompt([
   {
      type: 'input',
      name: 'text',
      message: 'Type three letters to be included in your logo.',
   },
   {
      type: 'input',
      name: 'text_color',
      message: "Choose any color for logo's text using any color keyword or hexadecimal number.",
   },
   {
    type: 'list',
    name: 'shape',
    message: 'Select which shape you would like for your logo.',
    choices: ['Circle',' Square', 'Triangle'],

   },
   {
      type: 'input',
      name: 'shape_color',
      message: "Choose any color for your logo's background using any color keyword or hexadecimal number.",
   }
   
  
]).then(result => {
   if (result.shape === 'Square') {
      svg = shapes.circle
   } else if (result.shape === 'Circle') {
      svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill="${result.shape_color}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${result.text_color}">${result.text}</text>
    
    </svg>`
   } else {
      svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <polygon points="105,20 20,200 200,199 "
            fill="${result.shape_color}" />
     
           <text x="110" y="190" font-size="60" text-anchor="middle" fill="${result.text_color}">${result.text}</text>
     
       </svg>`
   }

   
   fs.writeFile('logo.svg', svg, error => {
      if (error) {
         console.log(error)
      } else {
         console.log('Generated logo.svg')
      }
   })

})


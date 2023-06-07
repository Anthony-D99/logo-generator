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
    choices: ['Circle','Square', 'Triangle'],

   },
   {
      type: 'input',
      name: 'shape_color',
      message: "Choose any color for your logo's background using any color keyword or hexadecimal number.",
   }
   
  
]).then(result => {
   const format = new shapes(result.text, result.text_color, result.shape, result.shape_color)

   if (result.shape === 'Circle') {
      svg = format.circle()
   } else if (result.shape === 'Square') {
      svg = format.square()
   } else {
      svg = format.triangle()
   }

   
   fs.writeFile('logo.svg', svg, error => {
      if (error) {
         console.log(error)
      } else {
         console.log('Generated logo.svg')
      }
   })

})


const inquirer = require('inquirer')
const fs = require('fs')


inquirer.prompt([
   {
      type: 'input',
      name: 'text',
      message: '',
   },
   {
      type: 'input',
      name: 'text-color',
      message: "",
   },
   {
    type: 'list',
    name: 'shape',
    message: '',
    choices: [],

   },
   {
      type: 'input',
      name: 'shape-color',
      message: '',
   }
   
  
]).then(result => {
   if (result.shape === '') {
      shape = ``
   } else if (result.shape === '') {
      badge = ``
   } else {
      badge = ``
   }

   const svg = ``
   fs.writeFile('logo.svg', svg, error => {
      if (error) {
         console.log(error)
      } else {
         console.log('Generated logo.svg')
      }
   })

})


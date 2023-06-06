const format = require('./format')
class Shapes extends format{
    constructor(text,text_color,shape,shape_color){
        super(text,text_color,shape,shape_color)
    }
circle(){
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <rect x="10" y="10" width="200" height="200"  fill="${result.shape_color}" />
    
          <text x="110" y="125" font-size="60" text-anchor="middle" fill="${result.text_color}">${result.text}</text>
    
      </svg>`
}
square(){
    
}
}
module.exports = Shapes
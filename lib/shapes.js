const format = require('./format')
class Shapes extends format{
    constructor(text,text_color,shape,shape_color){
        super(text,text_color,shape,shape_color)
    }
square(){return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="200" height="200"  fill="${this.shape_color}" /><text x="110" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`
}
circle(){return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shape_color}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`
 }
triangle(){return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="105,20 20,200 200,199 "fill="${this.shape_color}" /><text x="110" y="190" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`
}
}
module.exports = Shapes
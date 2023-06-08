const Shapes = require('./shapes')


describe('circle', ()=>{
  test('should generate a blue circle svg file', ()=>{
    const expectedCircle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">AOP</text></svg>`
    const shape = new Shapes('AOP','white','circle','blue')
    const circle = shape.circle()
      expect(expectedCircle).toEqual(circle)
  })
}) 

describe('square', ()=>{
  test('should generate a red square svg file', ()=>{
    const expectedSquare =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="200" height="200"  fill="red" /><text x="110" y="125" font-size="60" text-anchor="middle" fill="white">AOP</text></svg>`
    const shape = new Shapes('AOP','white','square','red')
    const square = shape.square()
    expect(expectedSquare).toEqual(square)
  })
}) 

describe('triangle', ()=>{
  test('should generate a green triangle svg file', ()=>{
    const expectedTriangle =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="105,20 20,200 200,199 "fill="green" /><text x="110" y="190" font-size="60" text-anchor="middle" fill="white">AOP</text></svg>`
    const shape = new Shapes('AOP','white','traingle','green')
    const triangle = shape.triangle()
    expect(expectedTriangle).toEqual(triangle)
  })
}) 
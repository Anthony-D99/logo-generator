const Shapes = require('./shapes')

text('Shapes', () => {
    it('should throw an error if the logo text is more than 3 characters', () => {
        expect(() => new Shapes('aaaa')).toThrow('Logo text must be less than 3 characters long.')
    },)

    it('throws an error when the Logo text provided does not only contain uppercase, and lowercase characters.',()=>{
        expect(()=> new Shapes('a$')).toThrow('Logo text must only contain uppercase and lowercase letters.')
      },)


      it('throws an error when the Logo text color provided is not a color keyword or a color hexcode.',()=>{
        expect(()=> new Shapes('page25')).toThrow('Logo text color must only contain a color keyword or color hexcode.')
      },)  
})
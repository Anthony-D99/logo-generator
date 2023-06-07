class  Format{
    constructor(text,text_color,shape,shape_color){
        if(text.length > 3){
            throw new error ('Logo text must be no more then three letters')
        }
        if (!/[a-z][A-Z]{2,}/i.test(text)) {
      throw new Error(`Logo text must only include letters."`);
    }
        this.text = text
        this.text_color= text_color
        this.shape =shape
        this.shape_color=shape_color
    }
}
module.exports = Format
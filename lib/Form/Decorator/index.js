var Schema= require('some-schema')

var Decorator= module.exports= Schema({
    content: Schema.Property({
        type: Schema
    })
})

Decorator.prototype.init= function (content) {
    this.content= content
    return this
}

Decorator.prototype.transform= function (callback) {
    this['Powned by Decorator']= true
    callback(null, this)
}
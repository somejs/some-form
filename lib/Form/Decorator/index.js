var Form= module.parent.exports
  , Schema= require('some-schema')

var Decorator= module.exports= Form()

Decorator.prototype.init= function (content) {
    this.content= content
    return this
}

Decorator.prototype.transform= function (callback) {
    callback(null, this)
}
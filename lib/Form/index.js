var Schema= require('some-schema')

/**
 * Интерфейс декоратора
 *
 * Наследует тип и интерфейс схемы
 */
var Decorator= require('./Decorator')

/*/
 * Форма
 *
 * Наследует тип и интерфейс декоратора
 *
 * @constructor
 * @param {Object} properties — определения свойств
 * @return {Function|Form}
 */
var Form= module.exports= Decorator({
    decorators: Array
})

/**
 * Конструктор декоратора
 *
 * @exports Decorator as Form.Decorator
 */
Form.Decorator= require('./Decorator')

/*/
 *
 *
 * Методы класса
 */

/**
 * Наследует форму
 *
 * @param {mixed} args
 */
Form.inherit= function (Extended, Parent) {
    Schema.inherit.apply(this, arguments)
}

/*/
 *
 *
 * Методы экземпляра
 */

/**
 * Инициализирует аргументы конструктора
 *
 * @param {mixed} args
 */
Form.prototype.init= function() {
    var content= this.content= arguments[0] || null
    //console.log(this.constructor.Decorator)
    this.use( // декоратор по умолчанию
        this.constructor.Decorator
    )

    return this
}

/**
 * Регистрирует декоратор
 *
 * @param {Object} match
 * @param {Function} decorator
 */
Form.prototype.use= function() {
    var match, decorator
    //console.log('a',arguments)
    if (2 === arguments.length) {
        match= arguments[0]
        decorator= arguments[1]
    } else {
        if (1 === arguments.length) {
            match= {}
            decorator= arguments[0]
        } else {
            throw new Error('bad arguments')
        }
    }
    decorator.match= match
    this.decorators.push(decorator)
    return this
}

/**
 * Трансформирует структуру формы
 *
 * @param {Function} callback
 */
Form.prototype.transform= function(callback) {
    var decorators= []
    this.decorators.map(function (decorator) {
        var match= true
        Object.keys(decorator.match).map(function (k) {
            match= (this.content[k] == decorator.match[k])
        }, this)
        match && decorators.push(
            decorator
        )
    }, this)
    var iterate= function (content) {
        var decorator= decorators.shift()
        if (decorator) {
            decorator= new decorator(content)
            decorator.transform(function (err, form) {
                if (err) return callback(err)
                return iterate(form)
            })
        } else {
            return callback(null, content)
        }
    }
    iterate(this.content)
}
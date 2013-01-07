var assert= require('chai').assert

module.exports= function (Form) {

    return function () {
        describe('Form — конструктор формы', function () {
            it('should be instance of Function', function () {
                assert.isFunction(
                    Form
                )
            })
        })
    }

}
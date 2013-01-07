var Form= require('../lib/Form')
  , Schema= require('some-schema')

var schema= new Schema({ type:'schema' })
var form= new Form(schema)
console.log(
    form instanceof Form, form instanceof Form.Decorator, form instanceof Schema
)
form
    .use(function (form) {
        console.log(
            form instanceof Form.Decorator
        )
        this.transform= function (done) {
            form.d1= true
            done(null, form)
        }
    })
    .use({ type:'schema' }, function (schema) {
        console.log(
            schema instanceof Form.Decorator
        )
        this.transform= function (done) {
            schema.d2= true
            done(null, schema)
        }
    })
    .use({ type:'model' }, function (model) {
        console.log(
            model instanceof Form.Decorator
        )
        this.transform= function (done) {
            model.d3= true
            done(null, model)
        }
    })
    .transform(function (err, form) {
        console.log(
            err === null,
            form instanceof Form.Decorator,
            form.d1, form.d2, !form.d3,
            form.content === schema
        )
    })

var SubForm= Form()

var model= new Schema({ type:'model' })
var form= new SubForm( model )
console.log(
    form instanceof SubForm, form instanceof Form, form instanceof Form.Decorator, form instanceof Schema,
    SubForm.Decorator === Form.Decorator, new SubForm.Decorator instanceof Form.Decorator
)
form
    .use(function (form) {
        console.log(
            form instanceof SubForm.Decorator
        )
        this.transform= function (done) {
            form.d1= true
            done(null, form)
        }
    })
    .use({ type:'schema' }, function (schema) {
        console.log(
            form instanceof SubForm.Decorator
        )
        this.transform= function (done) {
            schema.d2= true
            done(null, schema)
        }
    })
    .use({ type:'model' }, function (model) {
        console.log(
            form instanceof SubForm.Decorator
        )
        this.transform= function (done) {
            model.d3= true
            done(null, model)
        }
    })
    .transform(function (err, form) {
        console.log(
            err === null,
            form instanceof SubForm.Decorator,
            form.d1, !form.d2, form.d3,
            form.content === model
        )
    })
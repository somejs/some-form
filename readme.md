# [some.js](http://somejs.org/form) / form [![Build Status](https://secure.travis-ci.org/freaking-awesome/some-form.png)](http://travis-ci.org/freaking-awesome/some-form)

Язык трансформации структур

## Установка
```
npm install https://github.com/freaking-awesome/some-form/archive/master.tar.gz
npm test
```
Зависимосит от **[some-schema](https://github.com/freaking-awesome/some-schema)**.  Для тестирования необходимы **[mocha]()** и **[chai]()**.

 

## API и [документация](http://api.somejs.org)

 

# [Form](https://github.com/freaking-awesome/some-form/tree/master/lib/Form)
Конструктор экземпляра формы. Наследует тип и интерфейс декоратора **Form.Decorator**. Инкапсулирует схему и объявляет интерфейс для ее трансформации. Служит компоновщиком. Добавляет методы для регистрации декораторов, и управляет процессом трансформации инкапсулированной формы.

# [Form.Decorator](https://github.com/freaking-awesome/some-form/tree/master/lib/Form/Decorator)
Конструктор декоратора. Инкапсулирует схему и объявляет интерфейс для трансформации. В результате трансформации возвращает другую схему.

 

## Лицензия
MIT
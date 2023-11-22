// Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones  y salidas indicadas en los comentarios.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        Animal.population++;
    }
    Animal.population = 0;
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(color) {
        var _this = _super.call(this) || this;
        _this.color = color;
        return _this;
    }
    Dog.prototype.iamadog = function () {
        console.log('yes, this is a dog');
    };
    Dog.prototype.sound = function () {
        console.log('WOW');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(gender) {
        var _this = _super.call(this) || this;
        _this.gender = gender;
        return _this;
    }
    Cat.prototype.sound = function () {
        console.log('MEOW');
    };
    Cat.prototype.iamacat = function () {
        console.log('yes, this is a cat');
    };
    return Cat;
}(Animal));
var animals = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    animal.sound(); // Llama al método sound() de la clase correspondiente
    if (animal instanceof Cat) {
        animal.iamacat();
    }
    else if (animal instanceof Dog) {
        animal.iamadog();
    }
}
/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/
console.log(Animal.population); //4

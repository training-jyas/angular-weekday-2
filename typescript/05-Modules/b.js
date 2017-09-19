"use strict";
exports.__esModule = true;
var a_1 = require("./a");
var B = (function () {
    function B() {
    }
    B.prototype.greetTogether = function () {
        this.greet = 'hello from B';
        console.log(this.greet);
        // i want to use the greet method of class a here.
        var a = new a_1.A();
        a.greet();
    };
    return B;
}());
var b = new B();
b.greetTogether();

'use strict';

var print = function (text) {
    console.log(text);
};

var HelloWorld = /** @class */ (function () {
    function HelloWorld(whoami) {
        this.whoami = whoami;
    }
    HelloWorld.prototype.say = function () {
        print("Hello, I'm " + this.whoami);
    };
    return HelloWorld;
}());
new HelloWorld('demo').say();

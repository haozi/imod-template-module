const print = (text) => {
    console.log(text);
};

class HelloWorld {
    constructor(whoami) {
        this.whoami = whoami;
    }
    say() {
        print(`Hello, I'm ${this.whoami}`);
    }
}
new HelloWorld('demo').say();

import { print } from './lib/utils'

class HelloWorld {
  whoami: string
  constructor (whoami: string) {
    this.whoami = whoami
  }
  say () {
    print(`Hello, I'm ${this.whoami}`);
  }
}

new HelloWorld('demo').say()

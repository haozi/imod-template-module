import { sleep, print } from './lib/utils'

export default class HelloWorld {
  whoami: string
  constructor (whoami: string) {
    this.whoami = whoami
  }
  async say () {
    await sleep(1)
    const msg = `Hello, I'm ${this.whoami}`
    print(msg)
    return msg
  }
}

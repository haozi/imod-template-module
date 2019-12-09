const print = (text) => {
  console.log(text)
}
const sleep = (s) => new Promise(resolve => {
  setTimeout(resolve, s * 1000)
})

class HelloWorld {
  constructor (whoami) {
    this.whoami = whoami
  }

  async say () {
    await sleep(1)
    const msg = `Hello, I'm ${this.whoami}`
    print(msg)
    return msg
  }
}

export default HelloWorld

import Mod from '../src/index'

test('hello wrold', async () => {
  expect(await new Mod('demo').say()).toBe(`Hello, I'm demo`)
})

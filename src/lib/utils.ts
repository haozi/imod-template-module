export const print = (text: string) => {
  console.log(text)
}

export const sleep = (s: number): Promise<void> => new Promise((resolve => {
  setTimeout(resolve, s * 1000)
}))

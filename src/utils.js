export const createDisplay = (num) => {
  if (num >= 61) return `O-${num}`
  if (num >= 46) return `G-${num}`
  if (num >= 31) return `N-${num}`
  if (num >= 16) return `I-${num}`
  return `B-${num}`
}

export const createMarked = () => {
  const arr = new Array(25)
  for (let i = 0; i < 25; i++) {
    if (i === 12) {
      arr[i] = 1
    } else {
      arr[i] = 0
    }
  }

  return arr
}

export const createBoard = () => {
  const arr = new Array(25)

  arr[12] = "FREE"

  let i = 0
  while (i < 5) {
    const num = Math.floor(Math.random() * 15) + 1
    if (arr.indexOf(num) === -1) {
      arr[i * 5] = num
      i++
    }
  }

  i = 0
  while (i < 5) {
    const num = Math.floor(Math.random() * 15) + 16
    if (arr.indexOf(num) === -1) {
      arr[i * 5 + 1] = num
      i++
    }
  }

  i = 0
  while (i < 4) {
    const num = Math.floor(Math.random() * 15) + 31
    if (arr.indexOf(num) === -1) {
      if (i < 2) arr[i * 5 + 2] = num
      else arr[i * 5 + 7] = num
      i++
    }
  }

  i = 0
  while (i < 5) {
    const num = Math.floor(Math.random() * 15) + 46
    if (arr.indexOf(num) === -1) {
      arr[i * 5 + 3] = num
      i++
    }
  }

  i = 0
  while (i < 5) {
    const num = Math.floor(Math.random() * 15) + 61
    if (arr.indexOf(num) === -1) {
      arr[i * 5 + 4] = num
      i++
    }
  }

  return arr
}

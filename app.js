const nums = [13, 87, 2, 89, 12, 4, 90, 63]
const nums2 = nums.map((num) => {
  return num * 2
})
console.log('Exercise 1: ', nums2)

let pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']
const [firstTopping, secondTopping] = pizzaToppings

console.log('Exercise 2-first:', firstTopping)
console.log('Ex.2-second:', secondTopping)

let car = {
  make: 'Audi',
  model: 'q5'
}
const { make, model } = car

console.log('Exercise 3-make:', make)
console.log('Exercise 3-modal:', model)

const controversialPizzaToppings = [...pizzaToppings]

console.log('Ex.4 - Copied array: ', controversialPizzaToppings)

const myCar = { ...car }
myCar.model = 'q7'

console.log('Exercise 5 - car', car)
console.log('Exercise 5 - myCar', myCar)

const userProfile = {
  username: 'nay',
  age: '20',
  email: 'nayef.rind@gmail.com'
}

const propertyName = 'username'
console.log('Exercise 6 "username": ', userProfile[propertyName])

console.log('Exercise 7: -- separated files')

const nounAdjective = (noun = 'cat', adjective = 'white') => {
  console.log('Exercise 8: ', `The ${noun} is ${adjective}`)
}

nounAdjective()
nounAdjective('car', 'red')

let pizza = 'tasty'

console.log('Exercise 9: ', pizza === 'tasty' ? 'yum' : 'yuck')

const localLangConfig = null

const LANG = localLangConfig || 'en'

console.log('Exercise 10-1st: ', 'Language setting:', LANG)

const userSavedTheme = null

const USER_THEME = userSavedTheme || 'light'

console.log('Exercise 10-2nd: ', 'User theme setting:', USER_THEME)

const adventurer = {
  name: 'Alice'
}

let cat
cat = adventurer.cat?.age
console.log('Exercise 11: ', cat)

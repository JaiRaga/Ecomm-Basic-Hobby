import faker from 'faker'

let products = '',
	name = ''

for (let i = 0; i < 10; i++) {
	name = faker.commerce.productName()
	products += `<div>${name}<div>`
}

document.querySelector('#dev-products').innerHTML = products

console.log(products)

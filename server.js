const express = require('express')

const app = express()

app.use(express.json())

// stored in DB somewhere

let currentUser = {
    id: '123',
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'fishing', 'writing']
}

let users = [
    {
        id: '123',
        name: 'John Doe',
        age: 54,
        hairColor: 'brown',
        hobbies: ['swimming', 'fishing', 'writing']
    },
    {
        id: '234',
        name: 'Jane Doe',
        age: 45,
        hairColor: 'red',
        hobbies: ['painting', 'gardening', 'reading']
    },
    {
        id: '345',
        name: 'Brenda Snow',
        age: 35,
        hairColor: 'gray',
        hobbies: ['music', 'swimming', 'sports']
    },
]

const products = [
    {
        id: '1234',
        name: "LG Flat Screen TV",
        price: '$300',
        desc: 'This is gonna change your life',
        rating: 3.5
    },
    {
        id: '2345',
        name: "Apple iPhone 16 4353GB",
        price: '$3400',
        desc: 'What is even the point',
        rating: 3.1
    },
    {
        id: '3456',
        name: "Sony Walkman",
        price: '$40',
        desc: 'Now we\'re talking',
        rating: 7.6
    },
]


//endpoints

app.get('/current-user', (req, res) => {
    res.json(currentUser)
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    const { id } = req.params

    res.json(users.find(user => user.id === id))
})

app.post('/users/:id', (req, res) => {
    const { id } = req.params
    const { user: updatedUser } = req.body

    users = users.map(user => user.id ? updatedUser : user)

    res.json(users.find(user => user.id === id))
})

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params

    res.json(products.find(product => product.id === id))
})

app.listen(8080, () => {
    console.log("Server is listening on port 8080 :)");
})

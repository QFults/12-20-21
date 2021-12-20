const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('.hbs', require('express-handlebars').engine({ extname: '.hbs' }))
app.set('view engine', '.hbs');
app.set('views', './views');

const dog = {
  name: 'Beef',
  breed: 'Chihuahua'
}

app.get('/', (req, res) => {
  res.render('index', dog)
})

const nums = [1, 2, 3, 4, 5]

app.get('/contact', (req, res) => {
  res.render('contact', { nums })
})

const users = [
  {
    name: 'John Doe',
    isAdmin: false
  },
  {
    name: 'Jane Doe',
    isAdmin: true
  },
  {
    name: 'Jack Doe',
    isAdmin: false
  },
  {
    name: 'Jenny Doe',
    isAdmin: true
  }
]

app.get('/example', (req, res) => {
  res.render('example', { users })
})

app.listen(3000)

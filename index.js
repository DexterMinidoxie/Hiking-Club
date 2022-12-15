const express = require('express')
const app = express();

const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const nimed = ['Neti', 'Pepi', 'Aadam', 'Klaabu'];

const matk1 = {
  nimetus: 'Rabamatk Saaremaal',
  osalejaid: 12,
  kuupaev: '2023-05-15',
  registreerunud: 5,
  kirjeldus: 'Rabas matkamine bla bla',
  piltUrl: "./Canvas/backpack2.jpg"
}
const matk2 = {
  nimetus: 'Rattamatk Virumaal',
  osalejaid: 12,
  kuupaev: '2023-12-02',
  registreerunud: 4,
  kirjeldus: 'Rattaga matkamine bla bla',
  piltUrl: "./Canvas/backpack1.jpg"
}
const matk3 = {
  nimetus: 'Jalgsimatk Tartumaal',
  osalejaid: 20,
  kuupaev: '2023-08-01',
  registreerunud: 2,
  kirjeldus: 'Jalgsi matkamine bla bla',
  piltUrl: "./Canvas/Image.png"
}

const matk4 = {
  nimetus: 'Matk Norras',
  osalejaid: 4,
  kuupaev: '2023-08-01',
  registreerunud: 1,
  kirjeldus: 'Matkamine matkamine bla bla',
  piltUrl: "./Canvas/backpack4.jpg"
}

const matkad = [matk1, matk2, matk3, matk4]


app.get('/test', naitaTest)
app.get('/', naitaEsilehte)
app.get('/News', naitaNews)
app.get('/Contact', naitaContact)


function naitaTest(req, res) {
  res.render('test', {nimed: nimed})
}

function naitaEsilehte(req, res) {
  res.render('Esileht', {matkad: matkad})
}

function naitaNews(req, res) {
  res.render('News')
}

function naitaContact(req, res) {
  res.render('Contact')
}

app.listen(80)
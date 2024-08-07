const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const app = express()
app.set('port', process.env.PORT || 8000)

const conection = {
	host:'mysql-ismael-tupa.alwaysdata.net',
	user:'369656_',
	password:'10646367',
	database:'ismael-tupa_maps'
}
app.use(myconn(mysql, conection, 'single'), cors())
app.use(express.json())
//rutas  ('/') es la principal
app.get('/', (req, res)=>{
	res.send('welcomen tasta')
})
app.use('/api', require('./routes/users'))
app.use('/mar', require('./routes/marc'))

//server runmig----
app.listen(app.get('port'), ()=>{
	console.log('sevidor run port: ', app.get('port'))
})
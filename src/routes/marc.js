const express = require('express')
const routes = express.Router()

routes.get('/:fecha', (req, res)=>{
	req.getConnection((err, conn)=>{
		if (err) return res.send(err)

		conn.query('SELECT * FROM marcadores WHERE fecha = ?', [req.params.fecha],(err, rows)=>{
			if (err) return res.send(err)

			res.json(rows)
		})
	})
})
routes.get('/', (req, res)=>{
	req.getConnection((err, conn)=>{
		if (err) return res.send(err)

		conn.query('SELECT * FROM marcadores',(err, rows)=>{
			if (err) return res.send(err)

			res.json(rows)
		})
	})
})
routes.post('/', (req, res)=>{
	req.getConnection((err, conn)=>{
		if (err) return res.send(err)
		conn.query('INSERT INTO marcadores set ?', [req.body],(err, rows)=>{
			if (err) return res.send(err)

			res.send("listo")
		})
	})
})
routes.delete('/:id', (req, res)=>{
	req.getConnection((err, conn)=>{
		if (err) return res.send(err)
		conn.query('DELETE FROM marcadores WHERE id = ?', [req.params.id],(err, rows)=>{
			if (err) return res.send(err)

			res.send("dato eliminado")
		})
	})
})
routes.post('/:id', (req, res)=>{
	req.getConnection((err, conn)=>{
		if (err) return res.send(err)
		conn.query('UPDATE marcadores set ? WHERE id=?', [req.body, req.params.id],(err, rows)=>{
			if (err) return res.send(err)

			res.send("listo actulizados")
		})
	})
})

module.exports = routes
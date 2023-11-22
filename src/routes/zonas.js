const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
	req.getConnection((err, conn)=>{
		if (err) return res.send(err)

		conn.query('SELECT * FROM zonas',(err, rows)=>{
			if (err) return res.send(err)

			res.json(rows)
		})
	})
})
routes.post('/', (req, res)=>{
	req.getConnection((err, conn)=>{
		if (err) return res.send(err)
		conn.query('INSERT INTO zonas set ?', [req.body],(err, rows)=>{
			if (err) return res.send(err)

			res.send("listo")
		})
	})
})
routes.delete('/:id', (req, res)=>{
	req.getConnection((err, conn)=>{
		if (err) return res.send(err)
		conn.query('DELETE FROM zonas WHERE id = ?', [req.params.id],(err, rows)=>{
			if (err) return res.send(err)

			res.send("dato eliminado")
		})
	})
})
routes.post('/:id', (req, res)=>{
	req.getConnection((err, conn)=>{
		if (err) return res.send(err)
		conn.query('UPDATE zonas set ? WHERE id=?', [req.body, req.params.id],(err, rows)=>{
			if (err) return res.send(err)

			res.send("listo actulizados")
		})
	})
})

module.exports = routes
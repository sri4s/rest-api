const pool = require("../database/index")
const postsController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from posts")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from posts where id = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    create: async (req, res) => {
        try {
            const {Product_name, location, specialization, contact_number, description} = req.body
            const sql = "insert into posts (Product_name, location, specialization, contact_number, description) values (?, ?, ?, ?, ?)"
            const [rows, fields] = await pool.query(sql, [Product_name, location, specialization, contact_number, description])
            res.json({
                status: "success",
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    update: async (req, res) => {
        try {
            const { Product_name, location, specialization, contact_number, description } = req.body
            const { id } = req.params
            const sql = "update posts set Product_name = ?, location = ?, specialization = ?, contact_number = ?, description= ? where id = ?"
            const [rows, fields] = await pool.query(sql, [Product_name, location, specialization, contact_number, description, id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }, 
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("delete from posts where id = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }

}

module.exports = postsController
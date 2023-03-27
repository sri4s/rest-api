const express = require("express")
const app = express();
const cors = require("cors");

require('dotenv').config()
cors.use({origin:"*"})
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const postsRouter = require('./routes/posts.router')
const authRouter = require('./routes/auth.router')

app.use("/api/v1/posts", postsRouter)
app.use("/api/v1/auth", authRouter)

const PORT = process.env.PORT || 3300

app.listen(PORT, () => { 
    console.log("Server is running....")
}) 
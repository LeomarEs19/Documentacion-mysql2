import express from "express";
import body_parser from "body-parser"
import rutaUsuarios from "./src/Routes/usuarios.routes.js";


const servidor = express()

const port = 3000

servidor.use(body_parser.json());
servidor.use(body_parser.urlencoded({extended:false}))

servidor.set('views engine', 'ejs')
servidor.set('views', './views')

servidor.get("/document", (req, res) => {
    res.render('document.ejs')
})
servidor.use(express.static('./public'))

servidor.listen(port, ()=> {
    console.log(`Servidor Funcionando en Puerto: http://localhost:${port}`)
})

servidor.get("/", (req, res)=> {
    res.status(200).send("Servidor Funcionando Correctamente")
})

servidor.use(rutaUsuarios)
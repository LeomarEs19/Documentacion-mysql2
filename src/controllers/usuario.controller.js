import { pool } from "../database/conexion.js"

export const showUser = async (req, res) => {
    try {
        const [ resultado ] = await pool.query("select * from usuarios")

        if (resultado.length > 0) {
            res.status(200).json(resultado)
        }else{
            res.status(404).json({
                "Mensaje": "No Se Encontro Ningun Usuarios"
            })
        }
    } catch (error) {
        res.status(500).json({
            "Mensaje": error
        })
    }
}

export const createUser = async (req, res) => {
    try {
        const [ resultado ] = await pool.query(
        "insert into usuarios(nombres,direccion,telefono,correo,password) value(?,?,?,?,?)",
        [nombre,direccion,telefono,correo,password])
         
        if (resultado.length > 0) {
            res.status(200).json({
                "Mensaje": "Se Creo Correctamente El Usuario"
            })
        } else {
            res.status(400).json({
                "Mensaje": "No Se Pudo Crear El Usuario"
            })
        }
    } catch (error) {
        res.status(500).json({
            "Mensaje": "error"        
        })
    }
}
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

require('./models/comentario')
const comentario = mongoose.model('comentarios')


const app = express()
//Conexão db

require('./database/connect')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', cors(), async (req, res)=>{
    res.header("")
    const comentariosResponse = await comentario.find()
    const comentariosJson = await comentariosResponse

    comentario.nome = undefined
    return res.json(comentariosJson)
    res.send('Ok')
})

app.post('/', async (req, res) => {
   
    const novoComentario = new comentario({
        nome: req.body.nome,
        msg: req.body.msg
    })
    
    novoComentario.save();
    res.redirect('http://localhost:3000/contato')
})

app.listen(3001)
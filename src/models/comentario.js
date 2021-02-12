const mongoose = require('mongoose')

const comentario = new mongoose.Schema({

    nome:{
        type: String,
        require: true,
    },

    msg:{
        type: String,
        require: true
    },

    dataenvio:{
        type: Date,
        default: Date.now,
    }
})

mongoose.model('comentarios', comentario)
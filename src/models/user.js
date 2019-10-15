const mongoose = require('mongoose')
const { Schema } = mongoose


const User = new Schema({ //Creación de usuarios
    name: { type: String },
    mail: { type: String },
    password: { type: String },
   
})


module.exports = mongoose.model('User', User)
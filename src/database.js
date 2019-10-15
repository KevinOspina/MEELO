const mongoose =  require('mongoose')

const {database} = require('./keys')

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb+srv://kevin:nacional3@cluster0-yrw8e.mongodb.net/test?retryWrites=true&w=majority')
    .then(db=> console.log('db connected'))
    .catch(err => console.error(err))

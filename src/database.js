const mongoose =  require('mongoose')

const {database} = require('./keys')

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(database.URI)
    .then(db=> console.log('db connected'))
    .catch(err => console.error(err))


    


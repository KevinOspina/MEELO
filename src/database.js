const mongoose =  require('mongoose')

const {database} = require('./keys')

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

//const uri = "mongodb+srv://kevin:<password>@cluster0-yrw8e.mongodb.net/test?retryWrites=true&w=majority";

/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kevin:<password>@cluster0-yrw8e.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/



mongoose.connect('mongodb://kevin:nacional3@cluster0-yrw8e.mongodb.net/test?retryWrites=true&w=majority')
//mongoose.connect(database.URI)
    .then(db=> console.log('db connected'))
    .catch(err => console.error(err))


    


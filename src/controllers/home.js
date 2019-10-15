const { Image } = require('../models')
const controlador = {}
const sidebar = require('../helpers/sidebar')

controlador.index = async (req, res) => {
    const images = await Image.find().sort({timestamp: -1})
    let viewModel = {images: []}
    viewModel.images = images
    viewModel = await sidebar(viewModel)
    res.render('index', viewModel)
    
}

controlador.login = (req,res) =>{
 res.render('login');
}


module.exports = controlador
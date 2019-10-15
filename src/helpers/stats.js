const { Comment, Image } = require('../models')

async function imageCounter() {
    return await Image.countDocuments()

}

async function commentCounter() {
    return await Comment.countDocuments()

}

async function imageTotalViewCounter() {
   /* const result = await Image.aggregate([{
        $group: {
            _id: '1',
            viewsTotal: { $sum: '$views' }
        }
    }])
    
    return result[0].viewsTotal //columna 0*/

}

async function likesTotalCounter() {
    /*const result = await Image.aggregate([{
        $group: {
            _id: '1',
            likesTotal: { $sum: '$likes' }
        }
    }])
    
    return result[0].likesTotal //columna 0*/

}

module.exports = async() => {
    //Arreglo con resulado de cada función [10,50,30,1]
    const result = await Promise.all([
        imageCounter(),
        commentCounter(),
        imageTotalViewCounter(),
        likesTotalCounter()
    ])

    return {
        images: result[0],
        comments: result[1],
        views: result[2],
        likes: result[3]
    }
}
//Funciones para reutilizar en el resto de la aplicación 

const helpers = {}


helpers.randomNumber = () => {
    const possible = 'abcdefghijklmnopqrstuvxyz1023456789'
    let randomNumber = 0
    for (let i = 0; i < 6; i++) {

        randomNumber += possible.charAt(Math.floor(Math.random() * possible.length))//Selecciona un caracter de el ciclo de tamaño 6
    
    }
    return randomNumber

}

module.exports = helpers
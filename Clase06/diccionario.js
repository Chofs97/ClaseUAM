let frutas = {
    manzana:{
    color: 'roja',
    sabor: 'dulce',
    caracteristica: 'pay'},

    mango: {
    color: 'amarillo',
    sabor: 'dulce',
    caracteristica: 'helado'},

    mandarina:{
    color: 'anaranjada',
    sabor: 'dulce',
    caracteristica: 'DiaDeMuertos'},
    
    plátano: {
    color: 'amarillo',
    sabor: 'dulce',
    caracteristica: 'potasio'},

    mamey: {
    color: 'anaranjado',
    sabor: 'dulce',
    caracteristica: 'licuado'},
};

let frutas2 = document.getElementsById('frutas');
let keys = Object.keys(frutas)
console.log(keys)

for (let i=0; i < keys.length; i++){
    let hijo= document.createElement ('div')
    hijo.innerText = keys[i] + JSON.stringify(frutas[keys[i]])
    identificadorFrutas.appendChild = (hijo) 
}
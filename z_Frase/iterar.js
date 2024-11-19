//EJERCICIO #1
// let vln = 'POPOCATÉPETL'

// for (i=0; i < vln.length; i++){
//     console.log(vln[i])
// }

//EJERCICIO #2
// let cosa = ['o','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|']
// for (i=0; i < cosa.length; i++){
//     if (cosa[i]==='O'){
//         console.log(cosa)
//     } else{
        
//         cosa[i]='o';
//         cosa[i - 1]= '|';
//         console.log(cosa);

//     }
//     let canva= document.getElementById('canva');
//     let nuevodiv = document.createElement('div');
//     nuevodiv.append(cosa);
//     console.log(nuevodiv); 
//     canva.appendChild(nuevodiv);

// }

//EJERCICIO 4
//¿Cuántas veces aparece la letra "t" en la palabra Popocatépetl

let vln = 'POPOCATÉPETL'
function cuentaT(palabra){
    let resultado=0;
    for (i=0; i < vln.length; i++){
        if(vln[i] == 'T'){
            resultado++;        
        }
    }
    return resultado
    }
console.log(cuentaT(vln))
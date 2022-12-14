String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 

const palabras = ['casa', 'perro', 'gato', 'elefante'];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones = palabra.replace(/./g,"_ ");
let contadorFallos = 0;

document.querySelector('#output').innerHTML = palabraConGuiones;
document.querySelector('#calcular').addEventListener('click', ()=>
{
    const letra = document.querySelector('#letra').value;
    let hafallado =  true;

    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2,letra);
            hafallado =  false;

        }
    }
    if(hafallado){
        contadorFallos++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(200*contadorFallos) +'px 0';
        if(contadorFallos == 4){
            document.querySelector('#perdedor').style.display='flex'
            setInterval("location.reload('#perdedor')",800);
        }
        
    }else{
        if (palabraConGuiones.indexOf('_') <0){
            document.querySelector('#ganador').style.display='flex'
            setInterval("location.reload('#ganador')",1000);
        }
    }
    document.querySelector('#output').innerHTML = palabraConGuiones;

    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();

});
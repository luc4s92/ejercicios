
const arreglo =[ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const isPar= (arreglo)=>{
    let i = 0
    let resultado =[]
    while(i< arreglo.length ){
        if(arreglo[i] %2 === 0){
            resultado.push( arreglo[i])
        }
        i++
    }
    return resultado;
}

console.log(isPar(arreglo))




const isPalindromo = (palabra) =>{
    console.log(palabra.length)
    let i = 0
    let j = palabra.length -1
    console.log(i,j)
    while(i <= j){
        if(palabra[i] !== palabra[j]){
            return false
        }
        i++
        j--
    }
    return true
}

console.log(isPalindromo("oso"))


class Auto {
    constructor(marca,modelo,encendido,cilindrada,anio){
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = encendido;
        this.cilindrada = cilindrada;
        this.anio = anio;
    }

    get isEncendido(){
        return this.encendido;
    }

    encender(){
        this.encendido = true;
    }

    apagar(){
        this.encendido = false
    }

    get toString(){
        return  console.log("Marca: "+ this.marca +" "+ "Modelo: "+ this.modelo+ " " + "Año: "+ this.anio + " "+ "Cilindrada: "+ this.cilindrada  )
    }
}

const bm = new Auto('BMW','R8',false,200,2021)

console.log(bm)
bm.encender()
console.log(bm.isEncendido)
bm.apagar()
console.log(bm.isEncendido)
bm.toString
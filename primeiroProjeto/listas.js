const listaDestinos = new Array(
    `Salvador`,
    `Belo Horizonte`,
    `Montes Claros`
);

listaDestinos.push(`Curitiba`); //adiciona um item na lista após ela ser delcarada
listaDestinos.splice(1,1); //retira um item na lista após ser declarada, nesse caso o 2 é a posição de início e 
//o 1 é a quantidade a ser deletada

console.log(listaDestinos);
console.log(listaDestinos[0]); //mostra o item na posição 0

const idadeComprador = 15;
if(idadeComprador < 18){
    console.log("Comprador menor de idade");
}

console.log(idadeComprador > 13);
console.log("Destino: ", listaDestinos[2]);
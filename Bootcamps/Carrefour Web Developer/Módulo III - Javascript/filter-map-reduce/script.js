const array = [1,2,3,4,5];
function mapSemThis(arr){
    return array.map((arr) => arr * 2);    
}

console.log(mapSemThis(array));

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log(mapComThis(nums, maca));

console.log(mapComThis(nums, laranja));

function numPares(arr){
    return arr.filter(function(valor){
            return valor % 2 === 0;
    });
}

const numeros = [1,3154,1,7,8,9,112,13,43];

console.log(numPares(numeros));

function somaTudo(arr){
    return arr.reduce(function (prev, current){
        return prev + current;
    })
}


const saldoDisponivel = 100;
const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function (prev,current){
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));

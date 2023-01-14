/*
        Crear una función que devuelva el número de vocales 
        que tiene el string que le pasemos como parámetro.

        Consideramos que el string solo tiene letras minúsculas y espacios.
*/


let contVoc = (str) => {
    let sum = 0;
    for (let index = 0; index < str.length; index++) {
        if(str[index] === 'a' || str[index] === 'e' || str[index] === 'i' || str[index] === 'o' || str[index] === 'u'){
            sum += 1;
        }
    }
    return sum;
}
console.log(contVoc("hola que tal"));

/*
        Si enumerásemos todos los números naturales por debajo de 10 que 
        fuesen múltiplos de 3 y de 5 tendríamos el siguiente listado (3, 5, 6 y 9). 
        La suma de estos múltiplos sería 23.

        Crea un función que devuelva la suma de todos los múltiplos de 3 y 5 del 
        número que le pasemos.

        En caso de que el número sea múltiplo de ambos solo habrá que contarlo 
        un vez.
*/

let multiplos = (num) => {
	let a = 3;
	let b = 5;
	let sum = 0;
	for (let index = num - 1; index > 1; index--) {
		if (index % a === 0) {
			sum += index;
		} else if (index % b === 0) {
			sum += index;
		}
	}
	return sum;
};
console.log(multiplos(25));

/*
        Si enumerásemos todos los números naturales por debajo de 10 que 
        fuesen múltiplos de 3 y de 5 tendríamos el siguiente listado (3, 5, 6 y 9). 
        La suma de estos múltiplos sería 23.

        Crea un función que devuelva la suma de todos los múltiplos de 3 y 5 del 
        número que le pasemos.

        En caso de que el número sea múltiplo de ambos solo habrá que contarlo 
        un vez.
*/

/* [1,3,2,3,2,2,1]

[1,1,2,2,2,3,3]

*/

let contImpar = (array) => {
	let array2 = array;
	array2.sort();
	let sum = 1;
	//array2.sort();
	for (let i = 0; i < array2.length; i++) {
		if (array2[i] === array2[i + 1]) {
			sum++;
		}
		if (sum % 2 !== 0) {
			return array2[i];
		}
	}
};
console.log(contImpar([1, 1, 2, 2, 2, 3, 3]));

/*
        Crea una función que reciba como parámetro un string y devuelva otro, 
        remplazando las letras por su posición en el alfabeto.

        Si algún caracter no se encuentra, simplemente lo ignoramos.
*/

let posLetra = (str) => {
	let letras = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'ñ',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	let array = [];
	let str2 = str.toLowerCase();
	str2 = str2.split('');
	for (let i = 0; i < str2.length; i++) {
		for (let j = 0; j < letras.length; j++) {
			if (str2[i] === letras[j]) {
				array[i] = j + 1;
			}
		}
	}
	return array.toString();
};
console.log(posLetra('toca me los huevos'));

/*
    Crea una función que reciba una serie de arrays como argumentos 
    y devuelva uno único ordenado.

    Ejemplo: 
        Recibe: 
            ([['Cristiano', 'Messi'], ['Neymar', 'Mbappe', Benzema'], 
            ['Vinicius', 'Kane'])  
        Devuelve: 
            ['Benzema', 'Cristiano', 'Kane', 'Mbappe', 'Messi', 
            'Neymar', 'Vinicius']
*/

let organizedArray = (array) => {
	let merged = [];
	for (let i = 0; i < array.length; i++) {
		merged = merged.concat(array[i]);
	}
	return merged.sort();
};

console.log(
	organizedArray([
		['Cristiano', 'Messi'],
		['Neymar', 'Mbappe', 'Benzema'],
		['Vinicius', 'Kane'],
	])
);

/* 
        Crea una función que reciba un array de números, la posición inicial 
        y final del nuevo array (opcional), y devuelva el nuevo array.

        Ejemplo 1: ([1, 2, 3], 0, 1) // => [1]
        Ejemplo 2: ([1, 2, 3], 1) // => [2,3]
*/

let corteArray = (array, posIni, posFin = array.length) => array.slice(posIni, posFin);
console.log(corteArray([1, 2, 3], 0, 1));

/* 
    Crea una función que  reciba un array de números y 
    devuelva los números que coinciden con su posición en el array.

    Ejemplos:
        [1,2,5,3] → Devuelve [3] que se encuentra en la posición 3 del array
        [1,5,20,4,16,8,6] → Devuelve [6] que se encuentra en la posición 6 del array
        [10,1,20,3,16,8,10] → Devuelve [1,3] ya que ambos coinciden.
*/

function comparar(array) {
	let resultado = [];
	for (let i = 0; i < array.length; i++) {
		console.log(array[i]);

		if (i === array[i]) {
			resultado.push(array[i]);
		}
	}
	return resultado;
}

console.log(comparar([10,1,20,3,16,8,10]));

/* 
        Tenemos una flota de vehículos y con las nuevas restricciones de 
        movilidad en Madrid, nos piden que todos tengan etiqueta de contaminación.

        Crea una función que reciba un array de objetos-coche y devuelva un 
        nuevo array con los objetos-coche. Cada coche tendrá un nueva propiedad 
        que sea etiqueta ( con valor ‘ECO’ en caso de que el coche sea híbrido y 
        ‘C’ en caso de que sea gasolina). 

        Dentro de la flota de coches solo tenemos esas 2 opciones así que no hay 
        que preocuparse por ninguna otra.

        Ejemplo:
            Entrada: 
                [{id: 1, modelo: ‘híbrido’, matricula:’4565HLM’ },
                {id: 2, modelo: ‘gasolina’, matricula:’5678MNL’ },
                {id: 3, modelo: ‘híbrido’, matricula:’1111LLL’ }] 

            Salida:
            [{id: 1, modelo: ‘híbrido’, matricula:’4565HLM’, etiqueta:’ECO’},
            {id: 2, modelo: ‘gasolina’, matricula:’5678MNL’, etiqueta:’C’},
            {id: 3, modelo: ‘híbrido’, matricula:’1111LLL’, etiqueta:’ECO’ }].
*/

function coches(array) {
	let newArray =[];
    for (let i = 0; i < array.length; i++) {
		if (array[i].modelo === 'híbrido') {
			array[i].etiqueta = 'ECO';
		} else {
			array[i].modelo === 'gasolina';
			array[i].etiqueta = 'C';
        }
        newArray.push(array[i])
	}
	return newArray;
}

console.log(
	coches([
		{ id: 1, modelo: 'híbrido', matricula: '4565HLM' },
		{ id: 2, modelo: 'gasolina', matricula: '5678MNL' },
		{ id: 3, modelo: 'híbrido', matricula: '1111LLL' },
	])
);

/* 
Crea una función que reciba la lista de regalos de los reyes magos 
y la ordene según la propiedad elegida.

Ejemplo:        
Entrada: 
([{nombre: 'Barbie’, categoria: ‘muñecas’ },
{nombre: ‘Lego’, categoria:’construcción’ },
{nombre: ‘Fifa2023’, categoria:’videojuego’ }], ‘nombre’);

Salida:
[{nombre: ‘Barbie’, categoria: ‘muñecas’ },
{nombre: ‘Fifa2023’, categoria:’videojuego’ }
{nombre: ‘Lego’, categoria:’construcción’ }]
*/


function listaReyes (array) {



}

console.log(listaReyes([{nombre: 'Barbie', categoria: 'muñecas' },
                    {nombre: 'Lego', categoria:'construcción' },
                    {nombre: 'Fifa2023', categoria:'videojuego' }], 'nombre'));


/* 
Crea una función que reciba un listado de jugadores con el número de 
billetes de cada cantidad que tienen y devuelva el jugador con más dinero. 

No habrá más de un jugador que tenga el mayor número de billetes

Ejemplo:
Entrada:
[{nombre: ‘Pedro’, billetesDe5: 10, billetesDe10: 3, billetestDe50: 1 },
{nombre: ‘Luis’, billetesDe5: 10, billetesDe10: 1, billetestDe50: 2 },
{nombre: ‘Gon’, , billetesDe5: 5, billetesDe10: 5, billetestDe50: 5 },];

Salida:
Gon
*/ 

function playerMoney (array) {}

console.log([{nombre: 'Pedro', billetesDe5: 10, billetesDe10: 3, billetestDe50: 1},
{nombre: 'Luis', billetesDe5: 10, billetesDe10: 1, billetestDe50: 2 },
{nombre: 'Gon', billetesDe5: 5, billetesDe10: 5, billetestDe50: 5 }]);


/* 
Crea una función que reciba un listado y mueva todos los 0 al final, 
manteniendo el orden del resto de elementos.

Ejemplo:
Entrada: [1,0,true,0,’hola’, 5, 30, ‘a’]
Salida: [1,true,’hola’, 5, 30, ‘a’,0,0]
*/ 
// 1. Funciones flecha
// Convierte la siguiente función en una función flecha:
// function saludar() {
//   return "Hola";
// }
const saludar = () => 'Hola'
console.log(saludar())
// Convierte la siguiente función en una función flecha en línea:
// function division(a,b) {
//   return a / b;
// }
const division = (a,b) => a/b
console.log(division(4,2))
// Convierte la siguiente función en una función flecha:
// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }
const miNombre = (nombre) => `Mi nombre es ${nombre}`
console.log(miNombre('carlos'))
// Convierte las siguientes funciones en funciones flecha:
// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
const test2  = () => "Función test 2 ejecutada."
console.log(test2())
// function test1(callback) {
//   callback();
// }	
const test1 = (test2=>test2())
console.log(test1(test2))
//preguntar las dos de arriba a sofia
// 2. Foreach
// Utiliza la siguiente array para resolver los próximos ejercicios: 
      
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];
    

// Crea un array con la gente mayor de 25 años y muéstralo por consola. 
// foreach solo recorre para este necesito un array para empujarle dentro y creo con map o algo de los siguientes te lo creo auto ahora vere,si el map hace en un paso un array nuevo con lo que quieras sustituye al push mas menos
let mayores25 =[]
gente.forEach(persona => {
    if (persona.edad > 25 ) {
        mayores25.push(persona)
    }
})
console.log(mayores25)
// Crea un array con la gente que empieza por J. 
let genteJ = []
gente.forEach(persona=>{
    if (persona.nombre[0]==='J') {
        genteJ.push(persona)
    }
})

console.log(genteJ)
// 3. Map
// map mantiene la longitud si la condicion no la cumple el indice lo reconoce pero como que no tiene valor sale undefined
// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
const mas25 = gente.map(persona => {
    if (persona.edad>25) {
        return persona
    }
})
console.log(mas25);
// Crea un array con la gente que empieza por J. 
const genJ = gente.map(persona => {
    if (persona.nombre[0]==='J') {
        return persona
    }
})
console.log(genJ)
// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numberoos = [ 4, 5, 6, 7, 8, 9, 10];
const elevarAlNumero = numberoos.map(numero => numero**numero)
console.log(elevarAlNumero)
// // Resultado esperado
// // [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

// 4. Filter
// Crea un segundo array que devuelva los impares
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const imparesOfnumbers = numbers.filter(numero => numero%2 !== 0)
 console.log(imparesOfnumbers);
// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
 const foodList = [
        {
          name: 'Tempeh',
          isVeggie: true
        },
        {
          name: 'Cheesbacon burguer',
          isVeggie: false
        },
        {
          name: 'Tofu burguer',
          isVeggie: true
        },
        {
          name: 'Entrecot',
          isVeggie: false
        }
      ];
      const veganos = foodList.filter(plato => plato.isVeggie === true)
      console.log(veganos)
      const sentencia = veganos.map(frase => `Que rico ${frase.name}me voy a comer!`)
      console.log(sentencia)
//       /* [
//           'Que rico Tempeh me voy a comer!',
//           'Que rica Tofu burguer me voy a comer!'
//          ]
//       */


// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
const multi = numeros.reduce((a,b)=>a*b)
console.log(multi);
// // Salida--> 483600


// Extras
// Map
// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];
const frases = staff.map(persona=>`${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`)
console.log(frases);

// // Resultado esperado
// /*
//     [
//       'Pepe es TheBoss y le gusta leer y ver pelis',
//       'Ana es becaria y le gusta nadar y bailar',
//       'Luis es programador y le gusta dormir y comprar',
//       'Ana es becaria y le gusta nadar y bailar',
//       'Carlos es secretario y le gusta fútbol y queso'
//     ]
//  */
// Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];
const frase = foodList2.map(comida=>{
    if (comida === 'Pizza') {
        return `Como soy de Italia,amo comer ${comida}`
    }else if (comida === 'Ramen') {
        return `Como soy de Japón,amo comer ${comida}`
    }else if (comida==='Paella') {
        return `Como soy de Valencia,amo comer ${comida}`
    }else if (comida === 'Entrecot') {
        return `Aunque no como carne,el ${comida} es sabroso`
    }
})
console.log(frase);
// //Resultado esperado
// /* [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
//    ]
// */
// Filter
// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
        {
          name: 'Mobile phone',
          price: 199
        },
        {
          name: 'TV Samsung',
          price: 459
        },
        {
          name: 'Viaje a cancún',
          price: 600
        },
        {
          name: 'Mascarilla',
          price: 1
        }
      ];
//       /*
//         [
//           'TV Samsung',
//           'Viaje a Cancún'
//         ]
//       */
const masde300item = inventory.filter(item => item.price>300)
console.log(masde300item);
const nombreItem = masde300item.map(item => item.name)
console.log(nombreItem);
// Reduce
// Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
    'Me',
    'llamo',
    'Adrián',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];
   
// // Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
const hacerFrase = sentenceElements.reduce((a,b)=>`${a} ${b}`)
console.log(hacerFrase);

// reduce es para trabajar sobre el anterior,
// map es como un bucle que te lo mete todo en un Array auto es mas o menos una forma de hacer ppush automatica mas o menos
// foreach es otro bucle que recorre un array
// estos dos ultimos si quiero escribir algun tipo de condicion tengo que abrir llaves tras la flecha de la funcion solo se pone arriba para el filter
// el filter lo que hace es filtrar en un array dandole tu la condicion por lo que veo se usa de la mano con map para meter los objetos en un array
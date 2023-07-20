const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];



//Ejercicio A - id pares
const idpares = pizzas.filter((pizza) => {
  return pizza.id % 2 === 0; 

});  
idpares.forEach((pizza) => {
  return console.log (`Las pizzas con Id par son: ${pizza.nombre} `);

});  


// ejercicio B - alguna pizza menos de 600

const pizzaMenor = pizzas.filter((pizza) => {
  return pizza.precio < 600 ; 
});  
pizzaMenor.forEach((pizza) => {
  return console.log (`Las pizzas menores a 600 son: ${pizza.nombre} y sale ${pizza.precio}`);

}); 


//ejercicio C -  El nombre de cada pizza con su respectivo precio.

const pizzaNomPrecio = pizzas.forEach((pizza) => {
  return console.log (`La  ${pizza.nombre} tiene un precio de: ${pizza.precio} `); 
});  

// Ejercicio D  - imprimir todos los ingredientes de cada pizza

const pizzaingredientes = pizzas.forEach((pizza) => {
  return console.log (`La  ${pizza.nombre} tiene los siguientes ingredientes: ${pizza.ingredientes} `); 
});  

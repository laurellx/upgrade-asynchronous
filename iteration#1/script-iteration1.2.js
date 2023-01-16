// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
// fetch() para hacer una consulta a la api cuando se haga click en el botón,
// pasando como parametro de la api, el valor del input.
// const baseUrl = "https://api.nationalize.io";

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <input type="text">
//     <button>Consultar</button>
// </body>
// </html>

// const button = document
//   .querySelector("button")
//   .addEventListener("click", (showInput) => {
//     const textInput = document.querySelector("input").value;
//     fetch(`https://api.nationalize.io?name=${textInput}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((response) => {
//         console.log("Something went wrong");
//         console.log(error);
//       });
//   });

/* 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ*/

// const button = document
//   .querySelector("button")
//   .addEventListener("click", (showInput) => {
//     const textInput = document.querySelector("input").value;
//     const newParagraph = document.createElement("p");
//     document.body.append(newParagraph);
//     fetch(`https://api.nationalize.io?name=${textInput}`)
//       .then((response) => response.json())
//       .then((data) => {
//         const newElement = (document.createElement(
//           "li"
//         ).innerHTML = `El nombre ${data.name} tiene un ${data.country[0].probability} porciento de ser de ${data.country[0].country_id} y un ${data.country[1].probability} porciento de ser de ${data.country[1].country_id}`);
//         newParagraph.innerText = newElement;
//         console.log(newElement);
//       })
//       .catch((response) => {
//         console.log("Something went wrong");
//         console.log(response);
//       });
//   });

/*2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */

const button = document
  .querySelector("button")
  .addEventListener("click", (showInput) => {
    const textInput = document.querySelector("input").value;
    const newP = document.createElement("p");
    document.body.append(newP);

    fetch(`https://api.nationalize.io?name=${textInput}`)
      .then((response) => response.json())
      .then((data) => {
        const newItem = (document.createElement("li").innerHTML = `El nombre ${
          data.name
        } tiene un ${data.country[0].probability * 100} porciento de ser de ${
          data.country[0].country_id
        } y un ${data.country[1].probability * 100} porciento de ser de ${
          data.country[1].country_id
        }`);
        newP.innerText = newItem;
        console.log(newItem);
        const newButton = document.createElement("button");
        newButton.innerHTML = "Delete";
        document.body.append(newButton);
        newButton.addEventListener("click", (deleteItem) => {
          newP.remove();
          newButton.remove();
        });
      })
      .then(() => {})
      .catch((response) => {
        console.log("Something went wrong");
        console.log(response);
      });
  });

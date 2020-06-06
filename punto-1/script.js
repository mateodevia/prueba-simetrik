const ul = document.querySelector('ul');

//Se modificó para que devuelva una promesa la cual se resuelve cuando se cumple el setTimeout
const setColumn = (column) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(column);
        }, Math.random() * 5000);
    });

const columns = [
    'Columna SKT_ID',
    'Columna Amount',
    'Columna Getway',
    'Columna Date',
    'Columna Issuer',
    'Columna User_id',
];

function showColumns() {
    let promises = [];
    for (let col = 0; col < columns.length; col++) {
        //Se guarda la promesa que devuelve serColumn en el arreglo de promesas
        promises.push(setColumn(columns[col]));
    }
    //Cuando todas las promesas se resuelven, es decir todos los setTimeouts se acaban, se puntan los resultados de cada promesa
    Promise.all(promises).then((values) => {
        for (let i in values) {
            ul.innerHTML += `<li>${values[i]}</li>`;
        }
    });
}

showColumns();

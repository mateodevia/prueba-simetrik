const ul = document.querySelector('ul');

const setColumn = (column) => {
    let resp = setTimeout(() => {
        ul.innerHTML += `<li>${column}<li>`;
    }, Math.random() * 5000);
    console.log(resp);
};

const columns = [
    'Columna SKT_ID',
    'Columna Amount',
    'Columna Getway',
    'Columna Date',
    'Columna Issuer',
    'Columna User_id',
];

function showColumns() {
    for (let col = 0; col < columns.length; col++) {
        setColumn(columns[col]);
    }
}

showColumns();

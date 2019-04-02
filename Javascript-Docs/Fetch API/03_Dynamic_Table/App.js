let content = document.querySelector('#content');
let table_content = document.querySelector('#table-content');

function fetchData() {
    fetch('data.json').then(res => res.json())
        .then(function (res) {
            printTemplate(res);
        });
}

function printTemplate(data) {
    let template = '';
    data.forEach(data => {
        table_content.innerHTML += `
        <tr>
            <th scope="row">${data.ID}</th>
            <td>${data.Name}</td>
            <td>${data.Email}</td>
            <td>${data.Status ? "Active" : "Disable"}</td>
        </tr>
    `;
    });

}
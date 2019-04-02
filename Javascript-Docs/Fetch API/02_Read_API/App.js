let content = document.querySelector('#content');

function getData() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            content.innerHTML =
                `
            <img src="${data.results[0].picture.medium}" width="100px" class="img-fluid rounded-circle">
            <p>Nombre: ${data.results[0].name.first}</p>
        `;
        });
}
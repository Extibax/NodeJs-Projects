var content = document.querySelector('#content');

function getData()
{
    fetch('text.txt')
    .then(data => data.text())
    .then(data => {
        content.innerHTML = `<p>${data}</p>`
    });
}
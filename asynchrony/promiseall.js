const users = [{
        id: 1,
        name: 'Juan',
        profesion_id: 1
    },
    {
        id: 2,
        name: 'Sebastian',
        profesion_id: 1
    },
    {
        id: 3,
        name: 'Mozart',
        profesion_id: 2
    }
]

const profesions = {
    1: 'Programmer',
    2: 'Desing'
}

function getUsers() {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(users)
        }, 200);
    });
}

function getUser(id) {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(users.filter((user) => user.id === id)[0])
        }, 200);
    });
}

function getProfesion(id) {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(profesions[id])
        }, 200);
    });
}

/* getProfesion(1) // 200 ms
    .then((profesion) => console.log(profesion))
    .then(() => getProfesion(2)) // 200 ms
    .then((profesion) => console.log(profesion)); */

Promise.all([
    getProfesion(1),
    getProfesion(2)
]).then((respuesta) => console.log(respuesta))
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

getUsers()
    .then((users) => getUser(users[1].id))
    .then((user) => getProfesion(user.profesion_id))
    .then((profesion) => console.log('The profesion of Sebastian is:', profesion))
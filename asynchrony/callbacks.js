const myUsers = [{
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

const myProfesions = {
    1: 'Programmer',
    2: 'Desing'
}

function getUsers(callback) {
    setTimeout(() => {
        callback(null, myUsers)
    }, 200)
}

function getUser(id, callback) {
    setTimeout(() => {
        callback(null, myUsers.filter((user) => user.id === id)[0])
    }, 200)
}

function getProfesion(id, callback) {
    setTimeout(() => {
        callback(null, myProfesions[id])
    }, 200)
}

getUsers((err, users) => {
    const sebastianId = users[1].id;

    getUser(sebastianId, (err, user) => {
        const profesionId = user.profesion_id;

        getProfesion(profesionId, (err, profesion) => {
            console.log('The profesion of Sebastian is:', profesion)
        })
    })
})
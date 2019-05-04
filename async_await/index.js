const fetch = require('node-fetch');

async function getName(username) {
    const url = `https://api.github.com/users/${username}`
    const res = await fetch(url)
    const json = await res.json()

    if (res.status !== 200)
        throw Error('The user not exists')

    return json.name
}

(async function () {
    try {
        const name = await getName('Extibax')
        console.log(name)
    } catch (error) {
        console.log(`Oh no: ${error}`)
    }
})()
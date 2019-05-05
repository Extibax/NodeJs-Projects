import '@babel/polyfill'
import colors from 'colors'

import server from './server'

async function main() {
    await server.listen(server.get('port'))
    console.log('Server on port:'.rainbow, server.get('port'));
}

main()
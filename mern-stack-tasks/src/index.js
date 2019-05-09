import '@babel/polyfill';
import 'colors';

import server from './server';

const port = server.get('port');

function main() {

    /* Starting Server */
    server.listen(port, () => {
        console.log('Server Port:'.rainbow, port);
    });
}

main();
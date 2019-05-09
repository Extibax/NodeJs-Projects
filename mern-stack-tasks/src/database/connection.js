import mongoose from 'mongoose';

const URI = 'mongodb://localhost/mern-tasks';

(
    async function () {
        try {
            if (await mongoose.connect(URI, {
                    useNewUrlParser: true
                })) {

                console.log('DB is OK');
            }
        } catch (error) {
            console.log(error)
        }
    }
)()

/* mongoose.connect(URI, {
        useNewUrlParser: true
    })
    .then(db => console.log('DB is OK'))
    .catch(err => console.error(err)); */

export default mongoose;
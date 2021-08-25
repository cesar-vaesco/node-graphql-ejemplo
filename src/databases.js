import mongoose from 'mongoose';


export async function connect() {


    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser: true,
        })

        console.log('>>>> La base de datos esta conectada');

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
    }

}

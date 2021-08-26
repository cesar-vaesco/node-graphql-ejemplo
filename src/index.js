import express from 'express';
import { graphqlHTTP } from 'express-graphql';


import schema from './schema'
import { connect } from './databases';

const app = express();
connect();

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello World'
    })
});

/* const schema = {}; */

// http://localhost:3000/graphql
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}));


app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});



// https://www.youtube.com/watch?v=Wl8O6wW4FJU&t=3s

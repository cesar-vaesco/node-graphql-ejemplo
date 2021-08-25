import express from 'express';
import { graphqlHTTP } from 'express-graphql';


const app = express();


app.get('/', (req, res) => {
    res.json({
        msg: 'Hello World'
    })
});

const schema = {};

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));


app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});



// https://www.youtube.com/watch?v=Wl8O6wW4FJU&t=3s

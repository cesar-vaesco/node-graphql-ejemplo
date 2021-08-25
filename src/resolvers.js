

export const resolvers = {

    Query: {
        hello: () => {
            return 'Hello World with Graphql'
        },
        /* greet(root, args) { */
        greet(root, {name}) {
            console.log(name);
            return `Hello ${name}!`
        }
    }
};

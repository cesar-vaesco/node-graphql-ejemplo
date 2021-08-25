

export const resolvers = {

    Query: {
        hello: () => {
            return 'Hello World with Graphql'
        },
        greet() {
            return 2;
        }
    }
};

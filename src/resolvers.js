
import { tasks } from "./sample";

import User from "./models/User";

export const resolvers = {

    Query: {
        hello: () => {
            return 'Hello World with Graphql'
        },
        /* greet(root, args) { */
        greet(root, { name }, ctx) {
            console.log(ctx);
            return `Hello ${name}!`
        }, tasks() {
            return tasks;
        }, async Users(){
            return await User.find();
        }
    },
    Mutation: {
        createTask(_, { input }) {
            /* console.log(input); */
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        async createUser(_, { input }) {
            const newUser = new User(input)
            await newUser.save();
            return newUser;
        }
    }
};


/*

Consulta en graphql

query{
  tasks{
    _id
    title
    description
    number
  }

  query{
  greet(name: "César")
}

query{
 hello
}

mutation{
  createTask(input:{
    title: "Break"
    description:"Over Time"
    number:200
  })
  {
    _id
    title
    description
    number
  }
}


mutation{
  createUser(input: {
    firstname: "Varonica"
    lastname: "Cortez"
    age: 41
  })
  {
    _id
    firstname
    lastname
    age
  }
}

query{
  Users{
    firstname
    lastname
    age
    _id
  }
}

}*/

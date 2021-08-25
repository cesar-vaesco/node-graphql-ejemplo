
import { tasks } from "./sample";

export const resolvers = {

    Query: {
        hello: () => {
            return 'Hello World with Graphql'
        },
        /* greet(root, args) { */
        greet(root, {name}) {
            console.log(name);
            return `Hello ${name}!`
        }, tasks(){
            return tasks;
        }
    },
    Mutation:{
        createTask(_, { input }){
            /* console.log(input); */
            input._id = tasks.length;
            tasks.push(input);
            return input;
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

}*/

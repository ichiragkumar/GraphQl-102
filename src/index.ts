import dotenv from "dotenv";
dotenv.config();

connectToDB();
const port = Number(process.env.PORT) || 4000;
import {ApolloServer} from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphql/schema.js";
import { connectToDB } from "./config/db.js";
import { getAllUsers } from "./controllers/user.js";


const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {
      Query: {
        hello: () => "Hello World",
        wow: () => "wow",
        users: getAllUsers
      },
    },
  });
  

startStandaloneServer(server,  {
    listen :{
        port,
        host: "localhost",

    }

}).then(({url}) => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
});

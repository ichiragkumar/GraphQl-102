import dotenv from "dotenv";
dotenv.config();

connectToDB();
const port = Number(process.env.PORT) || 4000;
import {ApolloServer} from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphql/schema.js";
import { connectToDB } from "./config/db.js";
import { getAllUsers, getUserById } from "./controllers/user.js";
import { getAllCourses, getCourseById } from "./controllers/course.js";
import { getAllProducts } from "./controllers/product.js";
import { getAllSections } from "./controllers/section.js";
import { getAllLectures } from "./controllers/lecture.js";
import { Course } from "./models/course.model.js";


const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {
      Query: {
        hello: () => "Hello World",
        wow: () => "wow",
        users: getAllUsers,
        courses: getAllCourses,
        products: getAllProducts,
        sections: getAllSections,
        lectures: getAllLectures,
        course : getCourseById
      },

      Course: {
        instructor :async ( course ) =>{
          await getUserById(course.instructor)
        }
      }
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

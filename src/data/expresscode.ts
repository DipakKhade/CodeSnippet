export const expresscode = [
  {
    heading: "Initialize a Node.js project: ",
    desc: "First, make sure you have Node.js installed on your machine. Then, create a new directory for your project and navigate into it in your terminal. Run the following command to initialize a new Node.js project: This command will create a package.json file with default values.",
    code: `npm init -y`,
  },
  {
    heading: "Install Express.js: ",
    desc: "Install the Express.js framework as a dependency for your project. Run the following command in your terminal:",
    code: `
      npm install express`,
  },
  {
    heading: "Create your Express application: ",
    desc: "Create a new JavaScript file (e.g., app.js) in your project directory. This file will contain the code for your Express application.",
    code: `// app.js

      // Import the express module
      const express = require('express');
      
      // Create an instance of the Express application
      const app = express();
      
      // Define routes
      app.get('/', (req, res) => {
          res.send('Hello, World!');
      });
      
      // Start the server
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
          console.log('Server is running ...');
      });
      `,
  },
  {
    heading: "Run your Express application ",
    desc: " In your terminal, run the following command to start your Express server",
    code: `node app.js`,
  },
  {
    heading: "To use the tatic files in express",
    desc: "",
    code: `app.use(express.static('/static'))              // /static is the path of static files`,
  },

  {
    heading: "avoding cors error in express",
    desc: "CORS errors happen when a webpage makes a request to a different domain than the one that served the page, and the server responds with an HTTP error because the “Origin” header in the request is not allowed by the server's CORS configuration.",
    code: `import express from "express";
import cors from "cors";
const app = express();
app.use(cors({
  origin:'http://localhost:5173'
}));
app.listen(process.env.PORT, () => console.log("backend is listing"));`,
  },

  {
    heading:"parsing a json data in express backend server",
    desc:"for parsing the data coming from the frontend in the req.body we hav to use a express middleware called express.json",
    code:`
    import express from "express"; 
    const app = express();

    app.use(express.josn());
    
    app.listen(process.env.PORT, () => console.log("backend is listing"));`
  },

  {
    heading:"Making a request to datbase in express server",
    desc:"understand to make a req to db in express , fro this lets consider we are buling a simple todo application",
    code:`
// server.js
import express from "express";
import cors from "cors";
import { createTodoValidator } from "./types/index.js";
import { Todo } from "./models/todo.js";
import connectToMongo from "./models/todo.js";

const app = express();

app.use(cors())
app.use(express.json());

//get all todos
app.get("/todos", async function (req, res) {
  connectToMongo();
  const allTodos = await Todo.find({});
  res.json(allTodos);
});

//add todo
app.post("/settodo", async function (req, res) {
  const userBody = req.body;
  const title = req.body.title;
  const description = req.body.description;
  const validate = createTodoValidator.safeParse(userBody);
  if (!validate.success) {
    return res.json("enter valid todo");
  } else {
    connectToMongo();
    const newtodo = await Todo.create({ title, description });
    if (!newtodo.success) {
      return res.json({ message: " added to db" });
    } else {
      return res.json({ message: "some error is occured .." });
    }
  }
});

//completed todos
app.get("/completed", async function (req, res) {
  const userCompletedBody = req.body;
  console.log(userCompletedBody);
  try {
    connectToMongo();
    const completedTodos = await Todo.find({
      isCompleted: true,
    });
    console.log(completedTodos);
  } catch (error) {
    console.log(error);
  }
});

//update todo
app.post("/update", async function (req, res) {
  connectToMongo();
  await Todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      isCompleted: true,
    },
  );

  res.json({
    message: "todo is updated",
  });
});

app.listen(3001, () => console.log("backend is listing at port 3001"));


    `
  }

];



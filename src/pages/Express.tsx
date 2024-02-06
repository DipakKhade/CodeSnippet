import {  useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const Express = () => {
    const codes = [
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
     
    ];
  
    
    const [copiedStates, setCopiedStates] = useState(
      Array(codes.length).fill("copy")
    );
  
    const copyTo = async (texttocopy: string, index: number) => {
      const newCopiedStates = [...copiedStates];
      newCopiedStates[index] = "copied";
      setCopiedStates(newCopiedStates);
      await navigator.clipboard.writeText(texttocopy);
    };
  
  return (
    
    <MaxWidthWrapper>
      <div className="pt-16">
      <h2 id="createreactapp" className="text-3xl p-2">Express</h2>
          <p>
          Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It is designed to make the process of building server-side applications with Node.js easier and more efficient by providing a simple and intuitive API for handling HTTP requests, defining routes, and implementing middleware.

Express.js is built on top of Node.js's HTTP module, which allows it to take advantage of Node.js's event-driven, non-blocking I/O model. It provides a thin layer of fundamental web application features, allowing developers to build scalable and high-performance web servers and APIs quickly and easily.

<p>
Routing: Express allows you to define routes for handling different HTTP methods (GET, POST, PUT, DELETE, etc.) and URLs. You can define route handlers to execute specific code when a request matches a particular route.
</p>
<p>

Middleware: Middleware functions in Express are functions that have access to the request, response, and next middleware function in the application's request-response cycle. They can perform tasks such as logging, authentication, authorization, error handling, and more.
</p>
<p>

Template engines: Express allows you to use various template engines (such as Pug, EJS, Handlebars, etc.) to dynamically generate HTML content for rendering web pages.
</p>

<p>


Static files: Express provides built-in middleware for serving static files (such as HTML, CSS, images, etc.) from a directory on the server.
</p>
<p>

Error handling: Express provides mechanisms for handling errors that occur during the request-response cycle, allowing you to customize error handling logic and provide appropriate error responses to clients.
</p>

          </p>
        {codes.map((i, index) => (
          <div key={index}>
            <h3 className="text-2xl p-2">{i.heading}</h3>
            <p>{i?.desc}</p>
            <div className="bg-[#282C34] rounded-t-sm pl-[65vw] text-white pt-1">
              <button onClick={() => copyTo(i.code, index)}>
                {copiedStates[index]}
              </button>
            </div>

            <SyntaxHighlighter
              language="html"
              style={atomOneDark}
              customStyle={{
                padding: "0px",
              }}
            >
              {i.code.trim()}
            </SyntaxHighlighter>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  )
}

export default Express

import { useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CreateReactApp = () => {
    const [copied, setcopied] = useState("copy");
    const copytext = useRef("copy");
    const codes = [
      {
        heading: "Install Node.js: ",
        desc: "If you haven t already, download and install Node.js from the official website: Node.js. To varify node is installed or not",
        code: "node -v",
      },
      {
        heading: "Install Vite: ",
        desc: "Vite is a build tool for modern web development. You can install Vite globally using npm:",
        code: "npm install -g create-vite",
      },
      {
        heading: "Create a new React project: ",
        desc: "Use the create-vite command to scaffold a new React project. Navigate to the directory where you want to create your project and run: Replace my-react-app with the name of your project.",
        code: "create-vite my-react-app --template react",
      },
      {
        heading: "Navigate to the project directory:",
        desc: " Change your current directory to the newly created project directory:",
        code: "cd my-react-app",
      },
      {
        heading: "Install dependencies: ",
        desc: "Install project dependencies using npm or yarn:",
        code: "npm install",
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
    <div id="createreactapp">
      <div className="w-full max-w-screen-xl px-2.5 ">
            <h2 className="text-3xl p-2">React</h2>
            <p>
              React is an open-source JavaScript library that is used for
              building user interfaces (UIs) for web applications. It is
              maintained by Facebook and a community of individual developers
              and companies. React is known for its declarative and
              component-based approach to building UIs, which makes it
              efficient, flexible, and easy to maintain.
              Here is how you can create a react app :
            </p>
            {codes.map((i, index) => (
              <div key={index}>
                <h3 className="text-2xl p-2">{i.heading}</h3>
                <p>{i?.desc}</p>
                <div className="bg-[#282C34] rounded-t-sm pl-[70vw] text-white pt-1">
                  <button onClick={() => copyTo(i.code, index)}>
                    {copiedStates[index]}
                  </button>
                </div>

                <SyntaxHighlighter
                  language="react"
                  style={atomOneDark}
                  customStyle={{
                    padding: "6px",
                   
                  }}
                >
                  {i?.code}
                </SyntaxHighlighter>
              </div>
            ))}
          </div>
    </div>
  )
}

export default CreateReactApp

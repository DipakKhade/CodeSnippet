import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { reactCode } from "../../data/reactcode";
const CreateReactApp = () => {

  const [copiedStates, setCopiedStates] = useState(
    Array(reactCode.length).fill("copy"),
  );

  const copyTo = async (texttocopy: string, index: number) => {
    const newCopiedStates = [...copiedStates];
    newCopiedStates[index] = "copied";
    setCopiedStates(newCopiedStates);
    await navigator.clipboard.writeText(texttocopy);
  };

  return (
    <MaxWidthWrapper>
      <div className="pt-12">
        <h2 id="createreactapp" className="text-3xl p-2">
          React
        </h2>
        <p>
          React is an open-source JavaScript library that is used for building
          user interfaces (UIs) for web applications. It is maintained by
          Facebook and a community of individual developers and companies. React
          is known for its declarative and component-based approach to building
          UIs, which makes it efficient, flexible, and easy to maintain. Here is
          how you can create a react app :
        </p>
        {reactCode.map((i, index) => (
          <div key={index}>
            <h3 className="text-2xl p-2">{i.heading}</h3>
            <p>{i?.desc}</p>
            <div className="bg-zinc-800  rounded-t-sm pl-[65vw] text-white pt-1">
              <button onClick={() => copyTo(i.code, index)}>
                {copiedStates[index]}
              </button>
            </div>

            <SyntaxHighlighter
              language="html"
              style={tomorrowNight}
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
  );
};

export default CreateReactApp;

import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { expresscode } from "../data/expresscode";
const Express = () => {
  const [copiedStates, setCopiedStates] = useState(
    Array(expresscode.length).fill("copy"),
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
        <h2 id="createreactapp" className="text-3xl p-2">
          Express
        </h2>

        {expresscode.map((i, index) => (
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
                padding: "8px",
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

export default Express;

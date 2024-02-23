import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { htmlcode } from "../data/htmlcode";

const Html = () => {
  const [copiedStates, setCopiedStates] = useState(
    Array(htmlcode.length).fill("copy"),
  );

  const copyTo = async (texttocopy: string, index: number) => {
    const newCopiedStates = [...copiedStates];
    newCopiedStates[index] = "copied";
    setCopiedStates(newCopiedStates);
    await navigator.clipboard.writeText(texttocopy);
  };

  return (
    <MaxWidthWrapper>
      <div className="pt-24">
        <h2 className="text-3xl p-2">HTML</h2>
        {htmlcode.map((i, index) => (
          <div key={index}>
            <h3 className="text-2xl p-2">{i.heading}</h3>
            <p>{i?.desc}</p>
            <div className="bg-zinc-800  rounded-t-sm pl-[70vw] text-white pt-1">
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

export default Html;

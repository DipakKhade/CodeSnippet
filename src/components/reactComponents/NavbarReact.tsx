import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MaxWidthWrapper from "../MaxWidthWrapper";

const NavbarReact = () => {
    const codes = [
      {
        heading: "Simple Navbar in react",
        desc: "copy and paste this code to /components/Navbar.tsx   ",
        code: `const Header = () => {
          const navItems = [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Github", href: "https://github.com" }
          ];
        
          return (
            <div className="border w-full h-16 fixed bg-slate-100 dark:bg-slate-900 z-50">
              <ul className="flex gap-7 justify-center cursor-pointer">
                {navItems.map((item, index) => (
                  <li key={index} className="pt-5">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        };
        
        export default Header;
        `
       
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
      <div id="navbar" className="pt-12">
      
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

export default NavbarReact;

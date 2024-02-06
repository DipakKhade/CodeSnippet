import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ThemeProvider = () => {
    const codes = [
      {
        heading: "theme provider for react app",
        desc: "copy and paste this code to /components/ThemeProvider.tsx to use themes in react ",
        code: `import { createContext, useContext, useEffect, useState } from "react"

        type Theme = "dark" | "light" | "system"
        
        type ThemeProviderProps = {
          children: React.ReactNode
          defaultTheme?: Theme
          storageKey?: string
        }
        
        type ThemeProviderState = {
          theme: Theme
          setTheme: (theme: Theme) => void
        }
        
        const initialState: ThemeProviderState = {
          theme: "system",
          setTheme: () => null,
        }
        
        const ThemeProviderContext = createContext<ThemeProviderState>(initialState)
        
        export function ThemeProvider({
          children,
          defaultTheme = "system",
          storageKey = "vite-ui-theme",
          ...props
        }: ThemeProviderProps) {
          const [theme, setTheme] = useState<Theme>(
            () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
          )
        
          useEffect(() => {
            const root = window.document.documentElement
        
            root.classList.remove("light", "dark")
        
            if (theme === "system") {
              const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light"
        
              root.classList.add(systemTheme)
              return
            }
        
            root.classList.add(theme)
          }, [theme])
        
          const value = {
            theme,
            setTheme: (theme: Theme) => {
              localStorage.setItem(storageKey, theme)
              setTheme(theme)
            },
          }
        
          return (
            <ThemeProviderContext.Provider {...props} value={value}>
              {children}
            </ThemeProviderContext.Provider>
          )
        }
        
        export const useTheme = () => {
          const context = useContext(ThemeProviderContext)
        
          if (context === undefined)
            throw new Error("useTheme must be used within a ThemeProvider")
        
          return context
        }
        `,
      },
{
  
heading:"toggle theme",
desc:'use this code where you want to use the theme button',
code :`
import { useTheme } from "@/components/theme-provider"
export function themeToggle() {
  const { setTheme } = useTheme()

  return (    
      <div>
        <button onClick={() => setTheme("light")}>
          Light
        </button>
        <button onClick={() => setTheme("dark")}>
          Dark
        </button>
        <button onClick={() => setTheme("system")}>
          System
        </button>
      </div>
  )
}
`
}
      
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
    <div id="themeprovider">
      <div className="w-full max-w-screen-xl px-2.5 ">
            
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
                  language="javascript"
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

export default ThemeProvider;

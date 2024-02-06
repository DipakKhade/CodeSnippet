import MaxWidthWrapper from "../components/MaxWidthWrapper";
import PreCode from "../components/PreCode";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Redux = () => {
  const filsStructure = [
    {
      code: `Redux
      /hooks
      /slices
      store.ts`,
    },
  ];
  const codes = [
    {
      heading: "make a store",
      desc: "every component have a access to this store",
      code: `import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
`,
    },
    {
      heading: "",
      desc: "Wrap your main app inside the store and give above store as a prop",
      code: `//main.tsx
    import React from 'react'
    import ReactDOM from 'react-dom'
    import './index.css'
    import App from './App'
    import store from './app/store'
    import { Provider } from 'react-redux'
    
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )`,
    },

    {
      heading:'slices',
      desc:'make slices which contains for various actions e.g a slice which add or sub a number count',
      code:`//slices/counter/index.ts

      import { createSlice } from "@reduxjs/toolkit";
      const counterSlice=createSlice({
          initialState:0,
          name:'counter',
      reducers:{
          increment:(state)=>state+1,
          decrement:(state)=>state-1
      }
      })
      
      export const {increment,decrement} =counterSlice.actions
      export default counterSlice.reducer`
    },
    {
      heading:'Hooks',
      desc:'hooks attach to a component intract with store va dispact or selector of a event',
      code:`//hooks/index.ts
      import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
      import type { RootState, AppDispatch } from '../store'
      
      // Use throughout your app instead of plain useDispatch and useSelector
      export const useAppDispatch: () => AppDispatch = useDispatch
      export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector`
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
      <div className="pt-24">
        <h2>Redux</h2>
        <p>
          Redux is a predictable state container for JavaScript apps, primarily
          used with React for building user interfaces. It serves as a
          centralized store for managing the state of your application and
          allows you to manage state changes in a predictable and deterministic
          way.
        </p>
        <div>file structure</div>
      </div>
      <div>
        <PreCode>{filsStructure[0].code}</PreCode>

        <div>
          {codes.map((i, index) => (
            <div key={index}>
              <h3 className="text-2xl p-2">{i?.heading}</h3>
              <p>{i?.desc}</p>
              <div className="bg-[#282C34] rounded-t-sm pl-[70vw] text-white pt-1">
                <button onClick={() => copyTo(i?.code, index)}>
                  {copiedStates[index]}
                </button>
              </div>

              <SyntaxHighlighter
                language="javascript"
              style={atomOneDark}
              >
                {i.code}
              </SyntaxHighlighter>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Redux;

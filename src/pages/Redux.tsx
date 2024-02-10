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

    {
      heading:'API calls and data fetching with redux',
      desc:'considera example of fetching a data of todos , make a slice for todoes and with the following code',
      code:`import { createSlice } from "@reduxjs/toolkit";
      import { createAsyncThunk } from "@reduxjs/toolkit";
      
      
      //action
      export const fetchData=createAsyncThunk('fetchData',async()=>{
          const res=await fetch('https://jsonplaceholder.typicode.com/todos')
          return res.json()
      })
      
      
      const TodoSlice=createSlice({
         name:'todo',
         initialState:{
      isLoading:false,
      isError:false,
      data:null
         },
      reducers:{},
      extraReducers:(builder)=>{
          builder.addCase(fetchData.pending,(state,action)=>{
              state.isLoading=true
          });
          builder.addCase(fetchData.fulfilled,(state,action)=>{
              state.isLoading=false
              state.data=action.payload
          })
          builder.addCase(fetchData.rejected,(state,action)=>{
              state.isError=true
          })
      }
      })
      
      export default TodoSlice.reducer;
      `
    },
    {
heading: 'rendering the fecthed data',
desc:'',
code:`
import './App.css'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import todo, { fetchData } from './Redux/slices/todo'
import { RootState } from '@reduxjs/toolkit/query'
function App() {
const dispatch=useDispatch()
const state=useSelector((state:RootState)=>state)

//open console to see the state changes
console.log(state)

if(state.isLoading==true){
  return <h2>Loding ...</h2>
}
  return (
  <>
  <div>
   <h3> fetching data using redux</h3>
    <div>
      <button onClick={(e)=>dispatch(fetchData())}>fetch data</button>
      <div>
        {
          state.todo.data &&  state.todo.data.map((t:object,index:number)=>(
            <ul key={index}>
              <li>{t.title}</li>
            </ul>
          ))
        }
      </div>
    </div>
  </div>
  </>
  )
}

export default App
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
              <h3 className="text-2xl p-2 pt-8">{i?.heading}</h3>
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

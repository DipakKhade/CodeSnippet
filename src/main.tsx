import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { ThemeProvider } from './components/ui/theme-provider.tsx'
import MaxWidthWrapper from './components/MaxWidthWrapper.tsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Html from './pages/Html.tsx'
import NotFound from './pages/NotFound.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<NotFound/>
  },
  {
    path:'/Html',
    element:<Html/>
  }

])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Provider store={store}>
      <Header/>
    <MaxWidthWrapper>
    <RouterProvider router={router}/>
    </MaxWidthWrapper>
    <Footer/>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Home from './componenets/Home/Home'
import About from './componenets/About/About'
import Contact from './componenets/Contact/Contact'
import User from './componenets/User/User'
import GitHub, { githubInfo } from './componenets/GitHub/GitHub'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// const router=createBrowserRouter([{
//   path : '/',
//   element : <Layout/>,
//   children: [
//     {
//       path: "",
//       element: <Home/>
//     },
//     {
//       path: "about",
//       element: <About/>
//     },
//     {
//       path: "contact",
//       element: <Contact/>
//     }
//   ]}
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route loader={githubInfo} path='github' element={<GitHub />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

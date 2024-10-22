import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './component/home'
import Login from './component/Login'
import Signup from './component/Signup'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} >
      <Route path="login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />
    </Route>

  )
)

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App

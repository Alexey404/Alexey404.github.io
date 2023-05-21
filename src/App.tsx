import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Components/Layout'
import { AboutMe } from './Pages/AboutMe/AboutMe'
import { HomePage } from './Pages/Home/HomePage'
import { Profile } from './Pages/Profile/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout Component={HomePage} />,
  },
  {
    path: '/profile/:id',
    element: <Layout Component={Profile} />,
  },
  {
    path: '/AboutMe',
    element: <Layout Component={AboutMe} />,
  },
])

export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

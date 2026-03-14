import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {RouterProvider, RouterContextProvider} from 'react-router';
import router from './routes/router';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      <Analytics/>
    </>
  )
}

export default App

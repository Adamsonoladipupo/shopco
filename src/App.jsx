import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {RouterProvider, RouterContextProvider} from 'react-router';
import router from './routes/router';


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

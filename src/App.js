import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import FreightForwadingPage from './pages/FreightForwadingPage';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<FreightForwadingPage/>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

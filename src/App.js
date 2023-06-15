import './App.css';
import Home from './Home/Home';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFound from './NotFound/NotFound';
import About from './About/About';


function App() {
  let routers = createHashRouter ([
  {path : '/' , element : <Layout/> , children:[
    {index:true , element:<Home/>},
    {path : 'about' , element:<About/>},
    {path : '*' , element:<NotFound/>},


  ]}
])
 
  return <RouterProvider router={routers}/>
}

export default App;

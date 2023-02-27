import "./App.css";
import axios from "axios";
import SEATS from './constants/SeatOptions'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import SelectSeat from "./pages/selectSeat/SelectSeat";
import Home from "./pages/home/Home";
import { useEffect, useState,createContext,useReducer } from "react";
import {intialState,updateReducer} from './reducer/reducer';
import LoginPage from "./pages/login/LoginPage";

const router = createBrowserRouter([
  { path: "/", element: <Layout /> ,
    children:[
      {path:"/", element:<Home/>},
      {path:"/seat/:id", element:<SelectSeat/>},
      {path:"/login", element:<LoginPage/>}
    ]
  }
]);

function App() {

  const [collection,setCollection]=useState(null)
  const [state,dispatch] = useReducer(updateReducer,intialState)

  useEffect(()=>{
    if (localStorage.getItem('data') === null){
        localStorage.setItem('data', JSON.stringify(SEATS))
        
    }
    
    // https://api.themoviedb.org/3/movie/upcoming?api_key=94a60dee9b20ab636f60c1a777cdab56&language=en-US&page=1
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=94a60dee9b20ab636f60c1a777cdab56&language=en-US&page=1`).then((response)=>{
      console.log(response)
      setCollection(response.data.results)
      dispatch({type:"list",payload:response.data.results})
    }).catch((error)=> console.log(error));
  
},[])
  console.log(collection)

  return (
    <wraperContext.Provider value={{state,dispatch}}>
        <RouterProvider router={router}/>
    </wraperContext.Provider>
    
  )
}
export const wraperContext= createContext()
export default App;

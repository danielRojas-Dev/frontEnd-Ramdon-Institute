import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import  Login from "../pages/auth/Login";






export const Browser = ()=>{

    // const dispatch = useDispatch()
    // const token = useSelector((state)=> state.authentication.token)
    // const dataUser = useSelector((state)=> state.) 


 
        return (
         <>
           <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Login />} />
          </Routes>
         </>
        );
      


    // useEffect(()=>{
    //     if (token === null) {
    //         ruturn;
    //     }
    //     dispatch()
    // })


}

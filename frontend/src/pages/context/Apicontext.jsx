import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Apicontext=createContext()


export const Apidatacontext=({children})=>{
    const[data,setdata]=useState([])
        const apidatafetched=async()=>{
            await axios.get("http://localhost:3010/shoesdata").then((res)=>{
                setdata(res.data.data)
            }).catch((error)=>{
                console.log(error)
            })
        }

    useEffect(()=>{
        apidatafetched()
    },[])

    return(
    <Apicontext.Provider value={{data,setdata,apidatafetched}}>
         {children}
    </Apicontext.Provider>

    )

}
// HomePage
import { useState, useEffect, useRef} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

// TODO: check how to impor fs in react app
// import {fs} from 'fs'





function HomePage() {
    const params = useParams();

    const [petsList, setPetsList] =useState([]);

    // look at different piece of state for dependency array
    useEffect(()=>{
        axios
        .post("https://api.petfinder.com/v2/oauth2/token", {
            grant_type: "client_credentials",
            client_id: "4DGlwJeQ8YkWauujvdtUvUgDNnD1fbpB649Cl0Yfgzill95yid",
            client_secret: "Xvj1Zmdgc6yZgLBLZMXNt3s5vkLORgBjCvaJZjHp",
            headers: { "Content-Type": "application/json" },
        })
        .then( res => { 
            // console.log(res.data.access_token)   
            return res.data.access_token
        }
        )
        .then( res => {
            console.log("===>",res)
            axios.get("https://api.petfinder.com/v2/animals", {
            headers: {
                Authorization:
                `Bearer ${res}`,
            }})
            .then(res => {
                console.log("after get--->",res.data)
                return res.data
            })
            .then( res=> {
                console.log("-->next chain  ",res)
                setPetsList(res.animals)
            })
        }
        )
        .catch(err => console.log(err))
            

    }
    ,[]);

  
  

    return (
        <h1>Home Page</h1>
    )
}


export default HomePage;
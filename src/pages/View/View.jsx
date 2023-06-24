import React from 'react';
import {useState, useEffect} from 'react'
import { db } from '../../config/firebase';
import {collection, getDocs} from "firebase/firestore"
import './View.css'

export default function View(){

    const [users,setUsers] = useState([])
    const usersCollectionRef = collection(db,"bookings")
    
    useEffect(() =>{

        const getUsers = async() => {
            const data = await getDocs(usersCollectionRef)
            setUsers(data.docs.map((doc)=>({...doc.data(), id : doc.id})))
        }

        getUsers();

    },[])

    return(
        <>
        <div className="container-user">
            {
                users.map((user)=>{
                    return( 
                    <div className='listUser'>
                        {""}
                        Name : {user.Name}
                        <br/>
                        Age : {user.age}
                        <br/>
                        Mobile : {user.mobile}
                        <br/>
                        Address : {user.address}
                        <br/>
                        Dose : {user.dose}
                        <br/>
                        Location : {user.location}
                    </div>
                    )
                })
            }

            </div>
        </>
    )
}
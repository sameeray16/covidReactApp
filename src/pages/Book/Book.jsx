import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection, getDocs, query, where , doc, onSnapshot} from "firebase/firestore";
import { db } from "../../config/firebase";
import './Book.css'

export default function Book(){

    const [newName, setNewName] = useState("")
    const [newAge, setNewAge] = useState("")
    const [newMobile, setNewMobile] = useState("")
    const [newAddress, setNewAddress] = useState("")
    const [newDose, setNewDose] = useState("")
    const [newLocation, setNewLocation] = useState("")

    const usersCollectionRef = collection(db,"bookings")

    const [centres,setCentres] = useState([])
     
    const locCollectionRef = collection(db,"locations")

    

    const bookUser = async() => {
        await addDoc(usersCollectionRef,{
            Name: newName, 
            age: newAge,
            mobile: newMobile,
            address: newAddress,
            dose: newDose,
            location: newLocation
        })

        alert("Vaccination slot booked successfully")
        window.location.reload()

    }

    

    // const locCollectionRef = collection(db,"locations")
    // const q = query(locCollectionRef,where("slots","<",10))


    useEffect(() =>{

        const getCentres = async() => {
            const q = query(locCollectionRef,where("slots","<",10))
            const data = await getDocs(q)
            setCentres(data.docs.map((doc)=>({...doc.data(), id : doc.id})))
        }

        getCentres();
        

    },[])


    

    return(
        <>
         <h2 className="heading">Book your vaccination</h2>

         <form action="">
            NAME   : <input type="text" placeholder="enter your name" onChange={(e)=>{setNewName(e.target.value)}}/>
            <br />
            age : <input type="text" placeholder="enter your age" onChange={(e)=>{setNewAge(e.target.value)}}/>
            <br />
            Mobile : <input type="text" placeholder="enter you mobile number" onChange={(e)=>{setNewMobile(e.target.value)}} />
            <br />
            address : <input type="text" placeholder="enter your address" onChange={(e)=>{setNewAddress(e.target.value)}}/>
            <br />
            Select dose : <select name="dose" id="dose" onChange={(e)=>{setNewDose(e.target.value)}}>
                            <option value="first-dose" selected>1st dose</option>
                            <option value="second-dose">2nd dose</option>
                        </select>
            <br />
            Select centre : <select name="location" id="location" onChange={(e)=>{setNewLocation(e.target.value)}}>
                            {centres.map((centre)=>{
                                return(
                                    <option value={centre.location} selected>{centre.location}</option>
                                )
                            })  
                            }
                            
                        </select>
                        
            <br />
            

            <br />
            <button onClick={bookUser} type="button" id="btn">register</button>
            <br />
    
         </form>
            
        </>
    )
}


import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import './Location.css'

export default function Location(){

    const [centres,setCentres] = useState([])

    const [newLocation, setNewLocation] = useState("")
    const [newSlots, setNewSlots] = useState("")

    const locCollectionRef = collection(db,"locations")

    useEffect(() =>{

        const getCentres = async() => {
            const data = await getDocs(locCollectionRef)
            setCentres(data.docs.map((doc)=>({...doc.data(), id : doc.id})))
        }

        getCentres();

    },[])

    const addLoc = async() => {
        await addDoc(locCollectionRef,{
            location : newLocation, 
            slots : newSlots
        })
        alert("centre added!")
        window.location.reload(false);

    }

    const deleteCentre = async(id) =>{
        const centreDoc = doc(db,"locations",id)
        await deleteDoc(centreDoc)
        alert("centre deleted!")
        window.location.reload(false);
    }


    return(
        <>
            <div className="loc-div">
                <form action="">
                centre   : <input type="text" placeholder="enter the centre" onChange={(e)=>{setNewLocation(e.target.value)}}/>
                <br />
                Slots filled : <input type="number" placeholder="enter slots filled" onChange={(e)=>{setNewSlots(e.target.value)}}/>
                <br />
                <button onClick={addLoc} type="button" className="btn-add">submit</button>
                </form>
            </div>
            <div className="centres-list">
                <h2 className="heading">Centres Available</h2>
            {
                centres.map((centre)=>{
                    return( 
                    <div className='listcentre'>
                        {""}
                        Centre : {centre.location}
                        <br/>
                        Slots filled : {centre.slots}
                        <button onClick={()=>{deleteCentre(centre.id)}} type="button" className="delBtn">delete centre</button>
                    </div>
                    )
                })
            }

            </div>
        </>
    )
}
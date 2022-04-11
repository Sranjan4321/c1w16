import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
import {v4 as uuid} from "uuid"

const GroceryDetails = ()=>{
console.log(data)
// console.log(uuid())
    return(
        <>
        <h1 style={{border:"2px solid black",borderRadius:"10px"}}>Groceries</h1>
        <div className="container" style={{
            display:"grid",
            gridTemplateColumns:`repeat(4,1fr)`,
            gridTemplateRows:"350px",
            gap:"20px",
            justifyContent:"space-between"
        }}>
            {/* map through the data and display the cards */}
            {data.map((elem)=>{
                return (<>
                <GroceryItem key={uuid()} elem={elem}/>
                </>)
            })}
        </div>
        </>
    )
}
export default GroceryDetails
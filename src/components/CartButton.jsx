
// keep the add to cart component here
import React from "react";
import { useState } from "react";

const CartButton = () => {
    //manage state of the count 
    let [count,setCount]=useState(1)
    let [show,setShow]=useState(true)
    
    const handleShow=()=>{
      setShow(false)
    }
    const handlecount=(num)=>{
      if(count<=0){
        setShow(true)
        setCount(1)
      }else{
        setCount(count+num)
      }
     
    }
  return <>
  {/* add to cart button */}
   {/* count with - and  + button */
  // count<=0?setShow(false):setShow(true)
}
  {show?<button onClick={handleShow} style={{width:'100%'}}>Add to Cart</button>:<div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
      <button onClick={()=>handlecount(-1)}style={{height:'20px'}}>-</button>
      <p className="count-item" style={{height:'10px',width:'20px'}}>{count}</p>
      <button  onClick={()=>handlecount(1)} style={{height:'20px'}}>+</button>
  </div>}
 
  
  </>;
};
export default CartButton

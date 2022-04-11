import CartButton from "./CartButton";
import {v4 as uuid} from "uuid"
// reusable card component
const GroceryItem = (props) => {
  console.log(props)
  return <>
  <div className="item" key={uuid()}>
    <p className="discount" >23%</p>
    <img src={props.elem.imgURL} alt="img" style={{height:"150px"}}/>
    <h3>{props.elem.title}</h3>
    <CartButton />
  </div>
  </>;
};
export default GroceryItem;

import CartButton from "./CartButton";

// reusable card component
const GroceryItem = (props) => {
  console.log(props)
  return <>
  <div className="item" >
    <p className="discount" >23%</p>
    <img src={props.elem.imgURL} alt="" />
    <h3>{props.elem.title}</h3>
    <CartButton />
  </div>
  </>;
};
export default GroceryItem;

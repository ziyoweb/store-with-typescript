import Button from "@material-ui/core/Button"

//Types 
import { CartItemType } from "../App"

//Styles
import {Wrapper} from "./CartItem.styles"

type Props={
  item:CartItemType;
  addToCart:(clickedItem:CartItemType)=>void;
  removeFromCart:(id:number)=>void;
}


const CartItem:React.FC<Props>=({item,addToCart,removeFromCart})=><Wrapper>
  <div className="content">
      <div className="title">{item.title}</div>
      <div className="information">
        <p>Price: <span>${item.price}</span></p>
        <p>Total: <span>${(item.amount*item.price).toFixed(2)}</span></p>
      </div>
      <div className="buttons">
        <Button
         size="small"
         disableElevation
         variant="contained"
         onClick={()=>removeFromCart(item.id)}
        >-</Button>
       <p><span className="amount">{item.amount}</span></p>
       <Button
         size="small"
         disableElevation
         variant="contained"
         onClick={()=>addToCart(item)}
        >+</Button> 
      </div>
  </div>
  <img src={item.image} alt={item.title} />
</Wrapper>

export default CartItem;
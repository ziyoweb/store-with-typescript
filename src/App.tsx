import {useState} from "react"
import {useQuery} from "react-query"

//Components
import {Drawer,LinearProgress,Badge} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Item from "./Item/Item"
import Cart from "./Cart/Cart"

//Styles
import {Wrapper,StyledButton,Grid} from "./App.styles"

//Types
export type CartItemType={
  id:number;
  category:string;
  description:string;
  image:string;
  price:number;
  title:string;
  amount:number
}

const getProducts=async ():Promise<CartItemType[]>=>
  await (await fetch("https://fakestoreapi.com/products")).json();

const  App=()=> {
  const [cartOpen,setCartOpen]=useState(false);
  const [cartItems,setCartItems]=useState([] as CartItemType[]);

  const {data,isLoading,error} = useQuery<CartItemType[]>("products",getProducts)
  console.log(data)


  const getTotalItems=(items:CartItemType[])=>
  items.reduce((ack:number,item)=>ack+item.amount,0);

  const handleAddToCart=(clickedItem:CartItemType)=>{
    //1. Is the item already added in the cart?
    setCartItems(prev=>{
      const isItemInCart=prev.find(item=>item.id===clickedItem.id);

      if(isItemInCart){
        return prev.map(item=>
          item.id===clickedItem.id?{...item,amount:item.amount+1}:item)
      }

      //First time the item is added
      return [...prev,{...clickedItem,amount:1}]
    })
  };

  const handleRemoveFromCart=(id:number)=>{
    setCartItems(prev=>
      prev.reduce((ack,item)=>{
        if(item.id===id){
          if(item.amount===1) return ack;
          return [...ack,{...item,amount:item.amount-1}];
        }else{
          return [...ack,item];
        }
      },[] as CartItemType[])
      );
  };

  if(isLoading) return <LinearProgress/>
  if(error) return <h3>Something went wrong...</h3>

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={()=>setCartOpen(false)}>
       <Cart
        cartItems={cartItems}
        addToCart={handleAddToCart}
        removeFromCart={handleRemoveFromCart}
       />
      </Drawer>
      <StyledButton onClick={()=>setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon/>
        </Badge>
      </StyledButton>
     <Grid>
       {
        data?.map(item=>(
         
             <Item  item={item} handleAddToCart={handleAddToCart} />
        ))
       }
     </Grid>
    </Wrapper>
  );
}

export default App;

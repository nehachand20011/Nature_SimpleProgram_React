import React,{useState,useEffect,Fragment} from 'react'
import{FaTrash} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
    const[data1,setData1]=useState([])

    useEffect(()=>{
        const cartData=JSON.parse(localStorage.getItem('cartItems'))
        setData1(cartData)

    },[])
    //increment Qty
    const incrementQty=(id)=>{
        const updateData=data1.map(item=>{
            if(item.id===id){
                return{...item,quantity:item.quantity+1}//... le data reloade huda pahile jasto data thyo paxi ni testai hos data bhanera kaam garxa
            }
            return item
        })
        setData1(updateData)
        localStorage.setItem('cartItems',JSON.stringify(updateData))

    }

    //decrement QTy
    const decrementyQty=id=>{
        const updateData=data1.map(item=>{
            if(item.id===id && item.quantity>1){
                return{...item,quantity:item.quantity-1}
            }
            return item
        })
        setData1(updateData)
        localStorage.setItem('cartItems',JSON.stringify(updateData))
    }

    //remove CartItem handler
    const removeCartItem=id=>{
        const cartItems=JSON.parse(localStorage.getItem('cartItems'))

        const filterCart=cartItems.filter(item=>item.id!==id)
        setData1(filterCart)
        localStorage.setItem('cartItems',JSON.stringify(filterCart))
        toast.success('Item is successfully removed from Cart')

    }
  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <div className="container">
        <div className="row d-flex justify-content-evenly my-4">
            {
                data1.length===0   //==garesi 0 hunxa nai tara ===garem bhane strong 0 hunxa nai 
                ?
                (
                    <h2 className="my-5 text-danger text-center">Your cart is Empty</h2>
                )
                :
                (  
                    //jsx ma 2 ita tag lai sangai lekhana mildaina teyi bhayera hamile yo frangement(<></>) tag lagako
                    <>
                    <h2 className="text-center">Your Cart Items</h2>
                    <div className="col-md-6 shadow">
                        {
                            data1.map((item,p)=>(
                                <Fragment key={p}>
                                    <hr />
                                    <div className="row d-flex justify-content-evenly align-items-center">
                                        <div className="col-2">
                                            <img src={item.image} alt={item.title} width={`100`} />
                                        </div>
                                        <div className="col-3">
                                            <span><strong>{item.title}</strong></span>
                                        </div>
                                        <div className="col-3 text-warning">${item.price}</div>
                                        <div className="col-2 d-flex">
                                            <button className="btn btn-danger" onClick={()=>decrementyQty(item.id)}>-</button>
                                            <input type="number" className='form-control border-0 text-center' value={item.quantity} readOnly/>
                                            <button className="btn btn-primary" onClick={()=>incrementQty(item.id)}>+</button>
                                            </div>
                                        <div className="col-1">
                                            <button className="btn btn-danger" onClick={()=>removeCartItem(item.id)}>
                                                <FaTrash/>
                                            </button>
                                        </div>
                                    </div>
                                    <hr/>
                                </Fragment >
                                
                            ))
                        }
                    </div>
                    <div className="col-md-3 p-2 shadow">
                    <h5>Cart Summary</h5>
                    <hr/>
                    <span><strong>Units:</strong>
                    {data1.reduce((total,item)=> total+Number(item.quantity),0)}{" "}
                    </span>
                    <br/>
                    <span><strong>Price:</strong>
                    ${data1.reduce((total,item)=>total+(item.quantity* item.price),0)}
                    </span>
                    <hr/>
                  <button className='btn btn-warning'>Check out</button>
                    
                    </div>
                    </>
                )
            }
        </div>
    </div>
    </>
  )
}

export default Cart
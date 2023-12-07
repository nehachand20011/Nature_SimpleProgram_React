import React, { useState } from 'react'
import { useEffect } from 'react'
// import axios from 'axios';
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./productcart.css"


const ProductCart = () => {
    const [data1, setData] = useState({})
    const params = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))


        // const id= params.data1_id
        // axios.get(`https://fakestoreapi.com/products/${id}`)
        // .then(res=>setData1(res.data))
        // .catch(err=>console.log(err))

    }, [])

    //handling add to cart
    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) ||[]
        const data1Item ={
            id: data1.id,
            title:data1.title,
            price:data1.price,
            image:data1.image,
            category:data1.category,
            rating: data1.rating,
            quantity:1
        }

        const existingItem = cartItems.find((item)=>item.id===data1.id)
        if (existingItem) {
            toast.error('Product is already in cart')
        }
        else {
            cartItems.push(data1Item)
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            toast.success(`${data1Item.title}is successfully added to cart`)
        }


    }
    return (
        <>
        <ToastContainer position='top-center' theme='dark'/>
            <div className="container">
                <div className="card">
                    <div className="container-fliud ">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content ">
                                    <div className="tab-pane active " id="pic-1"><img src={data1.image} height={500} /></div>
                                    <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
                                    <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                                    <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
                                    <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
                                </div>
                                
                                <ul className="preview-thumbnail nav nav-tabs">
                                    <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                </ul>

                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{data1.title}</h3>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <span className="review-no">41 reviews</span>
                                </div>
                                <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                                <h4 className="price">current price: <span>$180</span></h4>
                                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                                <h5 className="sizes">sizes:
                                    <span className="size" data-toggle="tooltip" title="small">s</span>
                                    <span className="size" data-toggle="tooltip" title="medium">m</span>
                                    <span className="size" data-toggle="tooltip" title="large">l</span>
                                    <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                                </h5>
                                <h5 className="colors">colors:
                                    <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                    <span className="color green"></span>
                                    <span className="color blue"></span>
                                </h5>
                                <div className="action">
                                    <button className="add-to-cart btn btn-default"onClick={addToCart}>add to cart</button>
                                    <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProductCart
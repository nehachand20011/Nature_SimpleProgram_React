import React from 'react'
import "./mystyle.css"

import { Link } from 'react-router-dom'

const ProductsFetch = ({data}) => {
    console.log(data)
  return (
    <>
  <div className="col  ">
    <div className="card ">
      <img src={data.image} className="card-img-top"  height={100} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <h5>${data.price}</h5>
      {/* truncate=yesle space dine kaam garxa */}
        <p className="card-text text-truncate">{data.description}</p>
        
        <Link to={`/fetch/${data.id}`}> <div className="btn btn-primary">See More</div></Link>

      </div>
    </div>
  </div>


    </>
  )
}

export default ProductsFetch
import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <>
    <div className="container-fluid mt-2 mb-2">
    <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card">
      <img src="/one.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <Link to='#'className="btn btn-primary">View Detail</Link>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/two.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <Link to='#'className="btn btn-primary">View Detail</Link>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/three.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <Link to='#'className="btn btn-primary">View Detail</Link>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/one.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <Link to='#'className="btn btn-primary">View Detail</Link>

      </div>
    </div>
  </div>
</div>
    </div>
    
    </>
  )
}

export default Card
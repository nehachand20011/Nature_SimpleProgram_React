import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductsFetch from './ProductsFetch'
import { ColorRing } from 'react-loader-spinner'
import axios from 'axios'

const Fetch = () => {
  const [data1, setData] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct =async () => {
      try{
        const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
      setLoading(false)
    }catch (err){
      console.log(err);
    }
    };
    // fetch("https://fakestoreapi.com/products")
    //   .then(res => res.json())
    //   .then(data => setData(data))
    //   setLoading(false)
    //   .catch(err => console.log(err))

      setTimeout(()=>{
       fetchProduct();
      },2000)
  }, [])

  return (
    <>
      <div className='container-Fluid mt-2 mb-2'>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {
            loading ? (
              <div style={{height:'50vh'}}>
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
              </div>
            )
              :
              (
                
                  data1.slice(0,8).map((p, i) => {
                    return <>

                      <ProductsFetch data={p} />


                    </>
                  })
                
              )
          }

        </div>
      </div>

    </>
  )
}

export default Fetch
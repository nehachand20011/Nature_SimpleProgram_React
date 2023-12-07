import React,{useState,useEffect} from 'react'

const Effect = () => {
    const [data,setData]=useState(1)
    const [num, setNum]=useState(1)

    useEffect(()=>{
        alert('This is page effect')
    },[ num, data]) //ya nere hamile num rakhem bhane num ko value ma matra msg aaune gareko if num ko thau ma empty huntyo bhane chai dubai ma msg aaudaina if num ko thau ma data rakhem bhane chai hamro data wala add ma chi msg aauxa id data ra num dubai rakhem bhane chai dubai ma aauxa if dubai nalhaesi dubaqi ma msg aauadaian if hami le tya array nai na rakhem bhane chai dubai ma msg aauxa
  return (
    <>
    <h2 className='text-danger'>{data}</h2>
    <button className='btn btn-warning' onClick={()=>setData(data+1)}>Add</button>

    <h2 className='text-info'>{num}</h2>
    <button className='btn btn-secondary' onClick={()=>setNum (num+1)}>Add</button>

    </>
  )
}

export default Effect
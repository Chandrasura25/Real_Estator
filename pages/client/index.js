import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
const fetcher = async () => {
    let response = await fetch('http://localhost:4900/products/1');
    let data = await response.json();
    return data.singleProduct
}
const ClientFetching = () => {
    const { data, error } = useSWR('client', fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading</div>

    // const [data, setdata] = useState([])
    // const [isloading, setisloading] = useState(true)
    // useEffect(() => {
    //     getApi()
    // }, [])
    // const getApi = async()=>{
    //     let response = await fetch('http://localhost:4900/products');
    //     let data = await response.json();
    //     setdata(data.allProducts)
    //     setisloading(false)
    // }
    // console.log(data);
    return (
        <div>ClientFetching
            <h1>{data.name}</h1>
            <h2>{data.price}</h2>
        </div>
    )
}

export default ClientFetching
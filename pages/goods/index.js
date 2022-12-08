import React from 'react'

const Goods = ({goods}) => {
  return (
    <>
    <div>
    {goods.map((good)=>( 
        <div key={good.id}>
            <h4>{good.name}</h4>
            <p>{good.price}</p>
        </div>
    ))} 
    </div>
    </>
  )
}

export default Goods

export async function getStaticProps(){
    let response = await fetch('http:localhost:4900/products')
    let data = await response.json();
    return{
        props:{goods:data.allProducts}
    }
}
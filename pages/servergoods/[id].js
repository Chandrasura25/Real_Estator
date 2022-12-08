import React from 'react'

const SingleGood = ({ good }) => {
    return (
        <div>
            <h1>{good.name}</h1>
            <h2>{good.price}</h2>
        </div>
    )
}

export default SingleGood
export async function getServerSideProps(context) {
    let response = await fetch(`http://localhost:4900/products/${context.params.id}`);
    let data = await response.json();
    return {
        props: {
            good: data.singleProduct
        }
    }

}
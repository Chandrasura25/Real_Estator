import React from 'react'

const SingleGood = ({ good }) => {
    return (
        <div>
        <h3>{good.name}</h3>
        <p>{good.price}</p>
        </div>
    )
}

export default SingleGood

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
        ],
        fallback: false
    }
}
export async function getStaticProps(context) {
    let response = await fetch(`http:localhost:4900/products/${context.params.id}`)
    let data = await response.json();

    return {
        props: { good: data.singleProduct }
    }
}
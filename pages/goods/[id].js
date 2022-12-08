import React from 'react'

const SingleGood = ({ good }) => {
    // console.log(good);
    return (
        <div>SingleGood</div>
    )
}

export default SingleGood

export async function getStaticPaths() {
    // return {
    //     paths: [
    //         { params: { id: '1' } },
    //         { params: { id: '2' } },
    //         { params: { id: '3' } },
    //     ],
    //     fallback: false
    // }
}
export async function getStaticProps(context) {
    let response = await fetch(`http:localhost:4900/products/${context.params.id}`)
    let data = await response.json();
    console.log(data);

    return {
        props: { good: data.singleProduct }
    }
}
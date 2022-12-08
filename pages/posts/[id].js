import { useRouter } from 'next/router'
import React from 'react'

const MoreDetails = ({post}) => {
  // let router = useRouter()
  // if(router.isFallback){
  //   return <div>loading....</div>
  // }
  return (
    <>
    <div className="col-3 mx-auto mt-5">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{post.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted ">{post.id}</h6>
          <p class="card-text">{post.body}</p>
          b5
        </div>
      </div>
    </div>
    </>
  )
}

export default MoreDetails


export async function getStaticPaths(){
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  let data = await response.json();
  let paths = data.map((post)=>{
    return{
      params:{id:`${post.id}`}
    }
  })
  // return{
  //   paths,
  //   fallback:false
  // }
  // fallback = true,false,'blocking'
  return{
    paths:[
      {params:{id:'1'}},
      {params:{id:'2'}},
      {params:{id:'3'}},
    ],
    fallback:'blocking',
    revalidate:10
  }
}

export const getStaticProps= async(context)=>{
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  let data = await response.json();
  return{
    props:{post:data}
  }
}
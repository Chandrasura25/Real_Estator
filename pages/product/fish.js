import { useRouter } from 'next/router'
import React from 'react'

const Fish = () => {
    let router = useRouter()
    const takeUsHome = () =>{
        alert('home');
        router.push('/')
    }
  return (
    <div>Fish
        <button className="btn btn-secondary" onClick={takeUsHome}>Take me home</button>
    </div>
  )
}

export default Fish
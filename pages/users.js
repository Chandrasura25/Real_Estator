import React from 'react'

const Users = (props) => {
    console.log(props.users)
  return (
    <>
    <div>
        {props.users.map((user)=>(
            <div key={user.id}>
                <h1>{user.name}</h1>
            </div>
        ))}
    </div>
    </>
  )
}

export default Users;
export const getStaticProps = async ()=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    return{
        props:{users:data}
    }
   }
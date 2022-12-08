import Link from 'next/link'
import React from 'react'

const Post = ({ posts }) => {
    return (
        <>
            <div className="row">
                {posts.map((post) => (
                    <div key={post.id} className='col-3'>
                        <Link href={`/posts/${post.id}`}>
                            <div className="card m-1">
                                <p className="card-title fw-bold my-1 text-center display-5">{post.id}</p>
                                <div className="card-body">
                                    <h3>{post.body}</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Post

export const getStaticProps = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    return {
        props: { posts: data }
    }
}
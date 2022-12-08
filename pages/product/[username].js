import React from 'react'
import { useRouter } from 'next/router'

const Parameter = () => {
  let router = useRouter()
  let username = router.query.username;

  return (
    <div>Parameter
      <p className="display-5 text-success">{username}</p>

    </div>
  )
}

export default Parameter
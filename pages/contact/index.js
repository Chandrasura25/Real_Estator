import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div>
       <Link href={'/'}>Back to landing page</Link> 
       <Link href={'/contact/more'} className="text-success m-2">Back to more</Link> 
    </div>
    
  )
}

export default Contact
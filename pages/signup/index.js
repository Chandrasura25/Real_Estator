import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [message, setmessage] = useState('')
    const signup = () => {
        let obj = { firstname, lastname, email, password }
        axios.post('/api/signup', obj).then((res) => {
            setmessage(res.data);
        })

    }
    return (
        <>
            <div className="col-md-7 mt-5 shadow-sm mx-auto">
                <div className="row">
                    <div className="col-6 bg-success">
                        {message !== '' ? <div className='text-light display-5'>{message}</div> : null}
                    </div>
                    <div className="col-6">
                        <h3 className='display-5 text-uppercase text-center'>Register</h3>
                        <div className="p-2">
                            <input type="text" name="firstname" id="" onChange={(e) => setfirstname(e.target.value)} className="form-control mb-2" placeholder='Firstname' />
                            <input type="text" name="lastname" id="" onChange={(e) => setlastname(e.target.value)} className="form-control mb-2" placeholder='Lastname' />
                            <input type="email" name="email" id="" onChange={(e) => setemail(e.target.value)} className="form-control mb-2" placeholder='Email Address' />
                            <input type="password" name="password" id="" onChange={(e) => setpassword(e.target.value)} className="form-control mb-2" placeholder='Password' />
                            <button className="btn btn-outline-success mb-2" onClick={signup}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
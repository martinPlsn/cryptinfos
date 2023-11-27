import React from 'react'

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary'>
      <div className='p-3 bg-white w-25'>
            <form action="">
                <div className='mb3'>
                   <label htmlFor="email"> Email </label> 
                    <input type="email" placeholder='Enter Email' className='form-control'> </input>
                </div>
                <div  className='mb3'>
                <label htmlFor="password"> Password </label> 
                    <input type="password" placeholder='password' className='form-control'> </input>
                </div>
                <button className='btn btn-success'>Login</button>


            </form>
      </div>
    </div>
  )
}

export default Login

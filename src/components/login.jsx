import React from 'react'
import Imput from './UI/input'
import CustomButton from './UI/button'
function Login() {
  return (
    <div>
        <Imput type="text" placeholder="email" className="form-controls" label="email"/>
        <Imput type="password" placeholder="pasword" className="form-controls" label="pasword"/>
        <div className="d-flex justify-content-center">
                <CustomButton className="m-3" variant="danger" name="reset"/>
        </div>
    </div>
  )
}

export default Login
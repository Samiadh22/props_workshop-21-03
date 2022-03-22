import React from 'react'
import NavBar from '../UI/navBar'
import Imput from '../UI/input'
import CustomButton from '../UI/button'
import {Form} from 'react-bootstrap'
import Login from '../login'
function main() {
  return (
    <div>
     <NavBar/>
     <Form>
        <Imput type="file" placeholder="avatar" className="form-controls" label="avatar"/>
        <Imput type="text" placeholder="username" className="form-controls" label="username"/>
        <Imput type="text" placeholder="email" className="form-controls" label="email"/>
        <Imput type="password" placeholder="pasword" className="form-controls" label="pasword"/>
            <div className="d-flex justify-content-center">
                <CustomButton className="m-3" variant="danger" name="reset"/>
                <CustomButton className="m-3" variant="success" name="envoyer"/>
            </div>
     </Form>
     <Login/>

    </div>
  )
}

export default main
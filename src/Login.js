import React from 'react'
import { auth } from './firebase'
import firebase from 'firebase'
import './Login.css'
const Login = () => {

    const loginWithGoogle =()=>{
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
        .then((result)=>{
            // console.log(result);
        }).catch(e=>console.log(e))
    }
    return (
        <div className="login_container">
            <div onClick={loginWithGoogle}>

            <img src="https://img.icons8.com/fluent/48/000000/google-logo.png"/>
            <p>Sign in with Google</p>
            </div>

        </div>
    )
}

export default Login

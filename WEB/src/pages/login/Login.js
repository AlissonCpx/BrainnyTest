import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import Vector from "../../images/Vector.png"
import Ellipse_1 from "../../images/Ellipse_3.png"
import Ellipse_2 from "../../images/Ellipse_4.png"
import Ellipse_3 from "../../images/Ellipse_5.png"

import { history } from '../../history'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const verifyLogin = () => {

        const values = {
            email: email,
            password: password
        }

        try {
            /*
            axios.post('http://localhost:3333/login', values).then(resp => {

                console.log(resp)
                
            })*/
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="Ellipse1">
                <img src={Ellipse_1} />
                <div className="Ellipse2">
                    <img src={Ellipse_2} />
                    <div className="Ellipse3">
                        <img src={Ellipse_3} />
                    </div>
                </div>
            </div>

            <div className="Titles">
                <h1>Register</h1>
                <h2>ACCESS CONTROL</h2>
            </div>


            <div className="teste">
                <img className="Img" src={Vector} />

                <div className="Form">

                    <div className="Login">
                        <div className="Login-Group">
                            <label className="Label">Email</label>
                            <input id="email" type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} className="Login-Field" />
                        </div>
                        <div className="Login-Group">
                            <label className="Label">Senha</label>
                            <input name="password" type="password" onChange={e => setPassword(e.target.value)} value={password} className="Login-Field" />


                        </div>
                        <button className="Login-Btn" onClick={verifyLogin} type="submit">Login</button>
                    </div>


                </div>
            </div>

        </>
    )
}



export default Login;
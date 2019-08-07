import React, { Fragment, useState } from 'react'
import './Backgroundproperty.css'
import axios from 'axios'

const SignIn = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()
        console.log("SUCCESS")
    }


    return (

        <div>
            <section class="hero-wrap">
                <div class="container">
                    <div class="row no-gutters slider-text align-items-end justify-content-start">
                        <div class="col-md-9 pb-4">
                            <h1 class="mb-3 bread">Log in to your account</h1>
                        </div>
                    </div>
                </div>
            </section>

            <h2>Sign in</h2>
            <div class="col-md-12 tour-wrap">
                <form onSubmit={e => onSubmit(e)}>
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="row">Email</th>
                                <td>
                                    <input type="email" name="email" value={email} onChange={e => onChange(e)} />
                                </td>
                                <td></td>
                            </tr>

                            <tr>
                                <th scope="row">Password</th>
                                <td>
                                    <input type="password" name="password" value={password} onChange={e => onChange(e)} />
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <button>Sign In</button>
                                </td>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
                </form>

            </div>

            <style>{"\
                    h2{\
                    text-align: left;\
                    }\
                "}</style>

        </div>
    )
}
export default SignIn
import React, { Fragment, useState } from 'react'
import './Backgroundproperty.css'
import axios from 'axios'

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault()
        
        const newUser = {
            name, email, password
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const body = JSON.stringify(newUser)

            const res = await axios.post('/api/users', body, config)
            console.log(res.data)
        } catch (err) {
            console.error(err.response.data)
        }
    }

        return (
            <Fragment>
                <section class="hero-wrap">
                    <div class="container">
                        <div class="row no-gutters slider-text align-items-end justify-content-start">
                        <div class="col-md-9 pb-4">
                            <h1 class="mb-3 bread">Create new account</h1>
                        </div>
                        </div>
                    </div>

                </section>
                <br />
                <div class="container">
                    <div class="row">
                        <h2>Sign up</h2>
                        <div class="col-md-12 tour-wrap">
                            <form onSubmit={e => onSubmit(e)}>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Name</th>
                                            <td>
                                                <input type="text" name="name" onChange={e => onChange(e)} value={name} required />
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>
                                                <input type="email" name="email" onChange={e => onChange(e)} value={email} required/>
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Password</th>
                                            <td>
                                                <input type="password" name="password" onChange={e => onChange(e)} value={password} required minLength='6'/>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button>Submit</button>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </form>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    
}
export default SignUp
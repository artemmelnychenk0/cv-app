/* eslint-disable no-useless-constructor */
import React, { useState } from "react";
import "../styles/general.css"
import Preview from "./preview";

const General = () => {
    const [personalInfo, setPersonalInfo] = useState({
        first: '',
        last: '',
        email: '',
        phone: ''
    })
    const [submitted, setSubmitted] = useState(false);
    const [info, setInfo] = useState([])



    const handleChange = (e) => {

        const { name, value } = e.target;
        setPersonalInfo((prevInfo) => {
            let newInfo = { ...prevInfo, [name]: value };
            return newInfo
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault()
        setInfo(arr => [...arr, `${first}`, `${last}`, `${email}`, `${phone}`])
        setSubmitted(true)
    }

    const editForm = () => {
        setInfo(arr => arr.slice(5))
        setSubmitted(false)
    }

    const { first, last, email, phone } = personalInfo;


    return (

        <div>
            <h3>Personal Information</h3>
            {submitted === false &&
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" name="first" value={first} onChange={handleChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="last" value={last} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={email} onChange={handleChange} />
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" className="tel" name="phone" value={phone} onChange={handleChange} />
                    </label>
                    <div className="text-center">
                        <button type="submit">Save</button>
                    </div>
                </form>}
            {submitted === true &&
                <Preview array={info} />
            }
            {submitted === true &&
                <div className="edit">
                    <button onClick={editForm} >Edit</button>
                </div>
            }

        </div>
    )


}
export default General
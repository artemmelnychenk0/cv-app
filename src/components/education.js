/* eslint-disable no-useless-constructor */
import React, { useState } from "react";
import Preview from "./preview";



const Education = () => {
    const [education, setEducation] = useState({
        degree: '',
        uni: '',
        from: '',
        to: ''
    })
    const [submitted, setSubmitted] = useState(false);
    const [info, setInfo] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation((prevInfo) => {
            let newInfo = { ...prevInfo, [name]: value };
            return newInfo
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInfo(arr => [...arr, `${degree}`, `${uni}`, `${from}`, `${to}`])
        setSubmitted(true)
    }

    const editForm = () => {
        setInfo(arr => arr.slice(5))
        setSubmitted(false)

    }

    const { degree, uni, from, to } = education;


    return (
        <div>
            <h3>Education and Training</h3>
            {submitted === false &&
                <form onSubmit={handleSubmit}>
                    <label>
                        Degree:
                        <input type="text" name="degree" value={degree} onChange={handleChange} />
                    </label>
                    <label>
                        Organization:
                        <input type="text" name="uni" value={uni} onChange={handleChange} />
                    </label>
                    <label>
                        From
                        <input type="date" className="date" name="from" value={from} onChange={handleChange} />
                    </label>
                    <label>
                        To:
                        <input type="date" className="date" name="to" value={to} onChange={handleChange} />
                    </label>
                    <div className="text-center">
                        <button type="submit">Save</button>
                    </div>
                </form>
            }
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
export default Education
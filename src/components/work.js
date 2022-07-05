/* eslint-disable no-useless-constructor */
import React, { useState } from "react";
import Preview from "./preview";


const Work = () => {
    const [work, setWork] = useState({
        title: '',
        employer: '',
        from: '',
        to: '',
        respons: '',
    })
    const [submitted, setSubmitted] = useState(false);
    const [info, setInfo] = useState([])



    const handleChange = (e) => {

        const { name, value } = e.target;
        setWork((prevInfo) => {
            let newInfo = { ...prevInfo, [name]: value };
            return newInfo
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault()
        setInfo(arr => [...arr, `${title}`, `${employer}`, `${from}`, `${to}`, `${respons}`])
        setSubmitted(true)
    }

    const editForm = () => {
        setInfo(arr => arr.slice(5))
        setSubmitted(false)
    }

    const { title, employer, from, to, respons } = work;

    return (
        <div>
            <h3>Work Experience</h3>
            {submitted === false &&
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input type="text" name="title" value={title} onChange={handleChange} />
                    </label>
                    <label>
                        Employer:
                        <input type="text" name="employer" value={employer} onChange={handleChange} />
                    </label>
                    <label>
                        From
                        <input type="date" name="from" className="date" value={from} onChange={handleChange} />
                    </label>
                    <label>
                        To:
                        <input type="date" name="to" className="date" value={to} onChange={handleChange} />
                    </label>
                    <label>
                        Responsibilities:
                        <input type="textarea" className="textarea" name="respons" rows="4" cols="50" value={respons} onChange={handleChange} />
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
export default Work
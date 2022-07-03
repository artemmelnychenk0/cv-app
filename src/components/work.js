/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Preview from "./preview";
import uniqid from 'uniqid'

class Work extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            employer: '',
            from: '',
            to: '',
            respons: '',
            id: uniqid(),
            info: [],
            submitted: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.editForm = this.editForm.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const { title, employer, from, to, respons, info } = this.state
        this.setState({
            info: info.concat(title, employer, from, to, respons),
            id: uniqid(),
            submitted: true
        })
    }

    editForm() {
        this.setState({
            submitted: false,
            info: this.state.info.slice(5),
        })
    }

    render() {
        const submitted = this.state.submitted;
        return (
            <div>
                <h3>Work Experience</h3>
                {submitted === false &&
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Title:
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                        </label>
                        <label>
                            Employer:
                            <input type="text" name="employer" value={this.state.employer} onChange={this.handleChange} />
                        </label>
                        <label>
                            From
                            <input type="date" name="from" className="date" value={this.state.from} onChange={this.handleChange} />
                        </label>
                        <label>
                            To:
                            <input type="date" name="to" className="date" value={this.state.to} onChange={this.handleChange} />
                        </label>
                        <label>
                            Responsibilities:
                            <input type="textarea" className="textarea" name="respons" rows="4" cols="50" value={this.state.respons} onChange={this.handleChange} />
                        </label>
                        <div className="text-center">
                            <button type="submit">Save</button>
                        </div>
                    </form>
                }
                {submitted === true &&
                    <Preview array={this.state.info} />
                }
                {submitted === true &&
                    <div className="edit">
                        <button onClick={this.editForm} >Edit</button>
                    </div>
                }
            </div>
        )
    }

}
export default Work
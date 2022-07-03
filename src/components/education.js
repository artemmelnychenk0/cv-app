/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Preview from "./preview";
import uniqid from 'uniqid'


class Education extends Component {
    constructor() {
        super();
        this.state = {
            degree: '',
            uni: '',
            from: '',
            to: '',
            id: uniqid(),
            info: [],
            submitted: false
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
        const { degree, uni, from, to, info } = this.state
        this.setState({
            info: info.concat(degree, uni, from, to),
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
                <h3>Education and Training</h3>
                {submitted === false &&
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Degree:
                            <input type="text" name="degree" value={this.state.degree} onChange={this.handleChange} />
                        </label>
                        <label>
                            Organization:
                            <input type="text" name="uni" value={this.state.uni} onChange={this.handleChange} />
                        </label>
                        <label>
                            From
                            <input type="date" className="date" name="from" value={this.state.from} onChange={this.handleChange} />
                        </label>
                        <label>
                            To:
                            <input type="date" className="date" name="to" value={this.state.to} onChange={this.handleChange} />
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
export default Education
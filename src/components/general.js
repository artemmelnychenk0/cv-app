/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "../styles/general.css"
import Preview from "./preview";

class General extends Component {
    constructor() {
        super();
        this.state = {
            first: '',
            last: '',
            email: '',
            phone: '',
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
        const { first, last, email, phone, info } = this.state
        e.preventDefault()
        this.setState({
            info: info.concat(first, last, email, phone),
            submitted: true
        })
    }

    editForm() {
        this.setState({
            info: this.state.info.slice(5),
            submitted: false
        })

    }



    render() {
        const submitted = this.state.submitted;

        return (
            <div>
                <h3>Personal Information</h3>
                {submitted === false &&
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            First Name:
                            <input type="text" name="first" value={this.state.first} onChange={this.handleChange} />
                        </label>
                        <label>
                            Last Name:
                            <input type="text" name="last" value={this.state.last} onChange={this.handleChange} />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </label>
                        <label>
                            Phone Number:
                            <input type="tel" className="tel" name="phone" value={this.state.phone} onChange={this.handleChange} />
                        </label>
                        <div className="text-center">
                            <button type="submit">Save</button>
                        </div>
                    </form>}
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
export default General
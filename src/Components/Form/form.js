import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        binary: ''
    }

    state = this.initialState

    handleChange = (event) => {
        //add regex here to allow only digits, and to consist only of one's and zero's
        //no more than 8 digits
        //[REGEX] /^[01]{0,8}$/g
        const { name, value } = event.target
        const pattern = /^[01]{0,8}$/g
        let isValid = pattern.test(value);
        console.log("valid: ", isValid)
        if (isValid) {
            this.setState({
                [name]: value,
            })
        }
    }

    render() {
        const { binary } = this.state;

        return (
            <form>
                <label htmlFor="binary">Binary Value</label>
                <input
                    type="text"
                    name="binary"
                    id="binary"
                    value={binary}
                    onChange={this.handleChange} />
            </form>
        );
    }
}

export default Form;
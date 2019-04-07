import React, { Component } from 'react';

// @TODO set up invisible recaptcha
// @TODO formik library

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      msg: '',
      input: {
        email: '',
        msg: ''
      },
      errors: {
        email: '',
        msg: ''
      }
    }

    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate(fieldName, value) {
    switch(fieldName) {
      case 'email':
        let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (!emailValid) {
          let errors = {...this.state.errors};
          errors.email = `${value} is an invalid email.`; 
          this.setState({ errors });
        }
        break;
      case 'msg':
        if (!value.length >= 10) {
          let errors = {...this.state.errors};
          errors.msg = "Message should be at least 10 characters long.";
          this.setState({ errors });
        }
        break;
      default:
        break;
    }
  }

  handleChange(e) {
    e.preventDefault();

    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })

    this.validate(name, value);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <section className="contact">
        <form handleChange={this.handleSubmit} className="contact-form">
          <input
            type="email"
            placeholder="Email..."
            name="email"
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
          { this.state.errors.email 
              ? <span className="error">this.state.errors.email</span>
              : null
          }

          <textarea
            name="msg"
            rows="5"
            placeholder="Message..."
            required
          />
          <button 
            type="submit"
            disabled={this.state.errors.email || this.state.errors.msg || !this.state.email || !this.state.msg }
          >Send
          </button>
        </form>
      </section>
    )
  }

}

export default Contact;

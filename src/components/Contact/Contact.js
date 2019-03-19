import { Component } from 'react';
import axios from 'axios';

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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate = (fieldName, value) => {
    switch(filedName) {
      case 'email':
        let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        errors.email = emailValid ? '' : ' is invalid';
        break;
      case 'msg':
        msgValid = value.length >= 10;
        errors.msg = msgValid ? '' : ' msg should before more than 10 characters long.';
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
          <textarea
            name="msg"
            rows="5"
            placeholder="Message..."
            name="content"
            required
          />
          <button 
            type="submit"
            disabled={this.errors.email || this.errors.msg }}
          >Send
          </button>
        </form>
      </section>
    )
  }

}

export default Contact;


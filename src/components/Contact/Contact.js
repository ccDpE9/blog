import { Component } from 'react';
import axios from 'axios';

// @TODO formik library

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
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
            rows="5"
            placeholder="Message..."
            name="content"
            required
          />
          <button type="submit">Send</button>
        </form>
      </section>
    )
  }
  
}

export default Contact;


import React, { Component } from 'react';

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      articles: []
    };
  }

  async componentWillMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    this.setState({ loading: true });

    /*
    await API.get('https://api.thedogapi.com/v1/images/search?size=thumbnail&limit=10', path)
      .then(res => {
        this.setState({
          articles: res.data
        });
      });
      */
  }

  render() {
    return (
      <section className="articles">
        <ul className="articles-list">
          <li className="articles-list__item">
          </li>
        </ul>
      </section>
    )
  }
}

export default Articles;


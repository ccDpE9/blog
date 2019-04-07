import { Component } from 'react';

import { API, Storage } from 'aws-amplify';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  async componentDidMount() {
    try {
      let article = await this.getArticle();

      this.setState({ article });
    } catch(e) {
      alert(e);
    }
  }

  getArticle() {
    return API.get('articles', `/article/${this.props.match.params.slug}`);
  }

  render() {
    return (
      <section clasName="article">
      </section>
    )
  }

}

export default Article;

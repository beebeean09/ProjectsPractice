import React from 'react';
import RedditForm from './form.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "" , posts: "", comments: "", errors: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchPosts(username) {
    fetch(`https://www.reddit.com/user/${username}/submitted.json`)
    .then(res => res.json())
    .then(json => json.data.children)
    .then(children => console.log(children));
  }

  fetchComments(username) {
    return fetch(`https://www.reddit.com/user/${username}/submitted.json`)
    .then(res => res.json())
    .then(json => json.data.children)
    .then(children => console.log(children));
  }


  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    let username = this.state.username;
    console.log(username);
    this.fetchPosts(username);
    this.fetchComments(username);
    this.setState({username: ""});
  }

  render() {
    return (
      <div className="main-container">
        <RedditForm />
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label>Reddit Username:
              <input
                value={this.state.username}
                onChange={this.update('username')}
                placeholder='Username'>
              </input>
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Main;

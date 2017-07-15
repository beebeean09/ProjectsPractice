import React from 'react';
import RedditForm from './form.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "" , posts: "", comments: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchPosts() {

  }

  fetchComments() {

  }


  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.fetchPosts();
    this.fetchComments();
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
            <input stype="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Main;

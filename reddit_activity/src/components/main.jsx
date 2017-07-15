import React from 'react';
import RedditForm from './form.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "" , posts: "", comments: "", errors: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchPosts(username) {
    // title, score, link
    fetch(`https://www.reddit.com/user/${username}/submitted.json`)
    .then(res => res.json())
    .then(json => json.data.children)
    .then(children => console.log(children));
  }

  fetchComments(username) {
    // body, score, link
    return fetch(`https://www.reddit.com/user/${username}/comments.json`)
    .then(res => res.json())
    .then(json => json.data.children)
    .then(commentList => {
      let comments = commentList.map(comment =>
        [comment.data.body, comment.data.score, comment.data.link_url]);
      // let comments = commentList[0].data;
      this.setState({comments: comments});
      // this.setState({
      //   comments: 'hello'
      // });
      console.log(this.state.comments);
    }
    );
  }


  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    let username = this.state.username;
    // this.fetchPosts(username);
    this.fetchComments(username);
    this.setState({username: ""});
  }

  render() {
    let comments;
    debugger;
    if (this.state.comments) {
      comments = this.state.comments.map((comment, idx) =>
        <ul key={idx}>{comment.body}</ul>);
    }


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
        <div>
          <h2>Comments</h2>
          {comments}
        </div>
      </div>
    );
  }
}

export default Main;

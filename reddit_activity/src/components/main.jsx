import React from 'react';
import CommentsList from './comments_list.jsx';
import PostsList from './posts_list.jsx';
import '../main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "" , posts: "", comments: "", errors: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  fetchPosts(username) {
    // title, score, link
    fetch(`https://www.reddit.com/user/${username}/submitted.json`)
    .then(res => res.json())
    .then(json => json.data.children)
    .then(postList => {
      let posts = [];
      postList.forEach(post => {
        let userPosts = {};
        userPosts["title"] = post.data.title;
        userPosts["score"] = post.data.score;
        userPosts["link"] = post.data.link;
        posts.push(userPosts);
      });
        this.setState({posts: posts});
    })
    .catch(err => this.setState({errors: [err, "Username does not exist."]}));
  }

  fetchComments(username) {
    // body, score, link
    return fetch(`https://www.reddit.com/user/${username}/comments.json`)
    .then(res => res.json())
    .then(json => json.data.children)
    .then(commentList => {
      let comments = [];
      commentList.forEach(comment => {
        let userComments = {};
        userComments["body"] = comment.data.body;
        userComments["score"] = comment.data.score;
        userComments["link"] = comment.data.link_url;
        comments.push(userComments);
      });
      this.setState({comments: comments});
    })
    .catch(err => this.setState({errors: [err, "Username does not exist."]}));
  }


  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    let username = this.state.username;
    this.fetchPosts(username);
    this.fetchComments(username);
    this.setState({username: ""});
  }

  

  renderErrors() {
    let errors;
    if (this.state.errors) {
      errors = this.state.errors.map((err, idx) =>
        <ul className="errors" key={idx}>Error Message: {err.toString()}</ul>
      );
    }
    return errors;
  }

  render() {
    let posts = this.state.posts;
    let comments = this.state.comments;

    return (
      <div className="main-container">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label>Input Reddit Username:
              <input
                className="form-input"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder='Username'>
              </input>
            </label>
            <input className="button" type="submit" value="Submit"/>
          </form>
          {this.renderErrors()}
        </div>
        <div>
          <h2>Posts</h2>
          <PostsList posts={posts}/>
          <h2>Comments</h2>
          <CommentsList comments={comments}/>
        </div>
      </div>
    );
  }
}

export default Main;

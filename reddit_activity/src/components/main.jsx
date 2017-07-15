import React from 'react';
import RedditForm from './form.jsx';
import CommentsList from './comments_list.jsx';
import PostsList from './posts_list.jsx';

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
    .then(postList => {
      let posts = postList.map(post =>
        [post.data.title, post.data.score, post.data.url]);
        this.setState({posts: posts});
    })
    .catch(err => this.setState({errors: err}));
  }

  fetchComments(username) {
    // body, score, link
    return fetch(`https://www.reddit.com/user/${username}/comments.json`)
    .then(res => res.json())
    .then(json => json.data.children)
    .then(commentList => {
      let comments = commentList.map(comment =>
        [comment.data.body, comment.data.score, comment.data.link_url]);
      this.setState({comments: comments});
    }
    )
    .catch(err => this.setState({errors: err}));
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
      errors = this.state.errors.map(err =>
        <ul>Error Message: {err}</ul>
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
            <label>Reddit Username:
              <input
                value={this.state.username}
                onChange={this.update('username')}
                placeholder='Username'>
              </input>
            </label>
            <input type="submit" value="Submit"/>
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

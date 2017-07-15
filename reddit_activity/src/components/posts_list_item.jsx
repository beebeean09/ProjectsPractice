import React from 'react';
import '../posts.css';

class PostsListItem extends React.Component {

  render() {
    const post = this.props.post;

    return(
      <div className="posts-list-item">
        <h3>Title:</h3>
        <ul>{post.title}</ul>
        <h3>Score:</h3>
        <ul>{post.score}</ul>
        <h3>Link:</h3>
        <ul><a href={post.link}>Click here for link!</a></ul>
      </div>
    );
  }
}

export default PostsListItem;

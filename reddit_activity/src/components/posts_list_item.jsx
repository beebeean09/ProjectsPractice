import React from 'react';

class PostsListItem extends React.Component {

  render() {
    const post = this.props.post;

    return(
      <div className="post-item">
        <h3>Title:</h3>
        <ul>{post[0]}</ul>
        <h3>Score:</h3>
        <ul>{post[1]}</ul>
        <h3>Link:</h3>
        <ul><a href={post[2]}>{post[2]}</a></ul>
      </div>
    );
  }
}

export default PostsListItem;

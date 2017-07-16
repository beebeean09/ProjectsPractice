import React from 'react';
import '../styles/comments.css';

class CommentsListItem extends React.Component {

  render() {
    const comment = this.props.comment;

    return(
      <div className="comments-list-item">
        <h3>Body:</h3>
        <ul>{comment.body}</ul>
        <h3>Score:</h3>
        <ul>{comment.score}</ul>
        <h3>Link:</h3>
        <ul><a href={comment.link}>Click here for link!</a></ul>
      </div>
    );
  }
}

export default CommentsListItem;

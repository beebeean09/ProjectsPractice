import React from 'react';

class CommentsListItem extends React.Component {

  render() {
    const comment = this.props.comment;

    return(
      <div className="comment-item">
        <h3>Body:</h3>
        <ul>{comment[0]}</ul>
        <h3>Score:</h3>
        <ul>{comment[1]}</ul>
        <h3>Link:</h3>
        <ul><a href={comment[2]}>{comment[2]}</a></ul>
      </div>
    );
  }
}

export default CommentsListItem;

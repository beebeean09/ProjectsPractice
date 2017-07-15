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
        <h3>Url:</h3>
        <ul>{comment[2]}</ul>
      </div>
    );
  }
}

export default CommentsListItem;

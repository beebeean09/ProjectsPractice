import React from 'react';
import '../comments.css';

class CommentsListItem extends React.Component {

  render() {
    const comment = this.props.comment;

    return(
      <div className="comments-list-item">
        <h3>Body:</h3>
        <ul>{comment[0]}</ul>
        <h3>Score:</h3>
        <ul>{comment[1]}</ul>
        <h3>Link:</h3>
        <ul><a href={comment[2]}>Click here for link!</a></ul>
      </div>
    );
  }
}

export default CommentsListItem;

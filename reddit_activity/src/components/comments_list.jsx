import React from 'react';
import CommentsListItem from './comments_list_item.jsx';

class CommentsList extends React.Component {

  render() {
    let comments;
    if (this.props.comments) {
      comments = this.props.comments.map((comment, idx) =>
        <CommentsListItem key={idx} comment={comment} />
      );
    }

    return(
      <div className="comments-list">
        {comments}
      </div>
    );
  }
}

export default CommentsList;

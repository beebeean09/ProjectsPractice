import React from 'react';
import CommentsListItem from './comments_list_item';

class CommentsList extends React.Component {

  render() {
    const comments = this.props.comments.map((comment, idx) =>
      <CommentListItem comment={comment} />
    );

    return(
      <div className="comments-list">
        {comments}
      </div>
    );
  }
}

export default CommentsList;

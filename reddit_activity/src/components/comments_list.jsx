import React from 'react';
import CommentsListItem from './comments_list_item.jsx';
import '../styles/comments.css';

class CommentsList extends React.Component {

  render() {
    let comments;
    let sortBy = (a,b) => {
      if (a.score > b.score) {
        return 1;
      } else if (a.score < b.score) {
        return -1;
      } else {
        return 0;
      }
    };

    if (this.props.comments) {
      comments = this.props.comments.sort(sortBy).map((comment, idx) =>
        <CommentsListItem key={idx} comment={comment} />
      );
    } else {
      comments = <ul>Please input Username to see your comments.</ul>;
    }

    return(
      <div className="comments-list">
        {comments}
      </div>
    );
  }
}

export default CommentsList;

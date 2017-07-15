import React from 'react';
import PostsListItem from './posts_list_item.jsx';
import '../posts.css';

class PostsList extends React.Component {

  render() {
    let posts;
    let sortBy = (a,b) => {
      if (a.score > b.score) {
        return 1;
      } else if (a.score < b.score) {
        return -1;
      } else {
        return 0;
      }
    };

    if (this.props.posts) {
      posts = this.props.posts.sort(sortBy).map((post, idx) =>
        <PostsListItem key={idx} post={post} />
      );
    } else {
      posts = <ul>Please input Username to see your posts.</ul>;
    }

    return (
      <div className="posts-list">
        {posts}
      </div>
    );
  }
}

export default PostsList;

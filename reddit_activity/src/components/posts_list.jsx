import React from 'react';
import PostsListItem from './posts_list_item.jsx';

class PostsList extends React.Component {

  render() {
    let posts;

    if (this.props.posts) {
      posts = this.props.posts.map((post, idx) =>
        <PostsListItem key={idx} post={post} />
      );
    }

    return (
      <div className="posts-list">
        {posts}
      </div>
    );
  }
}

export default PostsList;

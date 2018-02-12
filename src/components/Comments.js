
  // Responsible for Listing our Comments

  import React, { Component } from 'react';
  import PropTypes from 'prop-types';
  import CommentItem from './CommentItem';

  class Comments extends Component {

    // Pass delete ID upward
    deleteComment(id){
      this.props.onDelete(id);
    }

    render() {

      console.log(this.props.comments);

      let commentItems;

      if(this.props.comments) commentItems = this.props.comments.map(comment=>{
        return (
            <CommentItem onDelete={this.deleteComment.bind(this)} comment={comment} key={comment.id} />
        );
      });

      return (
        <div className="Comments">
          <h2>Comments</h2>
          <ul>
            {commentItems}
          </ul>
        </div>
      );
    }
  }

  Comments.propTypes = {
    comments: PropTypes.array,
    onDelete: PropTypes.func
  }

  export default Comments;

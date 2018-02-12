
  // Responsible for Individual comments
  import React, { Component } from 'react';
  import PropTypes from 'prop-types';

  class CommentItem extends Component {

    deleteComment(id){
      this.props.onDelete(id);
    }

    render() {

      let comment = this.props.comment;

      return (
        <li className="CommentItem">
          <article>
            <h3>{comment.name}</h3>
            <p><em>{comment.email}</em></p>
            <p>{comment.body}</p>
            <p>
              <button onClick={this.deleteComment.bind(this, this.props.comment.id)}>
              DELETE
              </button>
            </p>
          </article>
        </li>
      );
    }
  }

  CommentItem.propTypes = {
    comment: PropTypes.object,
    onDelete: PropTypes.func
  }

  export default CommentItem;

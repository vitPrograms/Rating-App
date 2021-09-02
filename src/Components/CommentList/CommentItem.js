import React from 'react'
import './CommentList'

export default function CommentItem( { comment } ) {

    return (
        <li className='comment'>
            <div className='comment-date'>
                {comment.date.getDate() + '/' + (comment.date.getMonth() + 1) + '/' + comment.date.getFullYear()}
            </div>
            <hr />
            <div className='comment-text'>
                {comment.text}
            </div>
        </li>
    )
}
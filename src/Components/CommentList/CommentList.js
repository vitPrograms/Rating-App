import React from 'react'
import CommentAdd from './CommentAdd'
import CommentItem from './CommentItem'
import './CommentList.css'


export default function CommentList( { comments, onClickSendComment }) {

    return (
        <ul className='comment-list'>
            <CommentAdd onClickSendComment={onClickSendComment}/>
            {comments ? (
                comments.map((comment, index) => <CommentItem comment={comment} key={comment.id} />)
                ) : (
                    'Comments is empty'
                )
            }
        </ul>
    )
}
import React from 'react'
import './CommentList.css'

export default function CommentAdd( { onClickSendComment } ) {

    function sendComment(){
        const textValue = document.querySelector('.add-comment-text')
        const result = {}

        if(!textValue.value){
            textValue.placeholder = 'Ви написали занадто мало символів'
            setTimeout(() => textValue.placeholder = 'Enter your comment...', 2000)
            return;
        }

        onClickSendComment(textValue.value)
        textValue.value = ''
    }

    return (
        <li className='add-comment-container'>
            <textarea unselectable='true' placeholder='Enter your comment...' className='add-comment-text'/>
            <button type='submit' className='add-comment-button' onClick={() => sendComment()}>Send</button>
        </li>
    )
}
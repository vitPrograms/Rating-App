import React, { useState } from 'react'
import CommentList from '../CommentList/CommentList'
import './TeacherInfo.css'

export default function TeacherInfo( {teacher} ) {

    let date = new Date()

    let [comments, setComments] = useState([
            {id: 1, date: date, text: 'Lorem ipsun test Lorem ipsun testLorem ipsun testLorem ipsun ', teacherId: 2}
        ])

    function onClickSendComment(text){
        const result = {id: 10, date: new Date(), text, teacherId: teacher.id}
        setComments([...comments, result])
        console.log(comments)
    }

    return (
        <div className='teacher-container'>
            <div className='content-teacher-card'>
                <div className='teacher-image-container'>
                    <img src={teacher.image} alt='item-img' className='teacher-image' width='100%' draggable='false' />
                </div>
                <h2>{teacher.firstName} {teacher.lastName}</h2>
                <h1>{teacher.rating}/5</h1>
                <CommentList comments={comments} teacher={teacher} onClickSendComment={onClickSendComment}/>
            </div>
        </div>
    )
}
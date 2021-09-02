import React from 'react'
import './TeacherItem.css'

export default function TeacherItem({ teacher, currentTeacher }){

    function clickOnTeacherCart(id) {
        console.log('Current teacher pressed: ',id)
        currentTeacher(id)
        document.querySelector('a.active').className = ''
    }

    return (
        <div className='container-item' onClick={() => clickOnTeacherCart(teacher.id)}>
            <div className='content-item'> 
                <div className='image-container'>
                    <img src={teacher.image} alt='item-img' className='image' width='100%' draggable='false'/>
                </div>
                <div className='fullName'>
                    <span> { teacher.firstName } </span>
                    <span> { teacher.lastName } </span>
                </div>
                <h1 className='rating'>
                    { teacher.rating }/5
                </h1>
            </div>
        </div>
    )
}
import React from 'react'
import TeacherItem from '../TeacherItem/TeacherItem'

export default function TeacherList({ teachers, currentTeacher }) {
    
    const styles = {
        ul: {
            listStyle: 'none',
            dispay: 'inline-block'
        }
    }

    return (
        <ul styles={styles.ul}>
            {teachers.map((teacher) => <TeacherItem teacher={teacher} key={teacher.id} currentTeacher={currentTeacher}/>)}
        </ul>
    )
}
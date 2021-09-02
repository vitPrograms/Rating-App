import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import TeacherInfo from './Components/TeacherInfo/TeacherInfo'
import TeacherList from './Components/TeacherList/TeacherList'

function App() {
  let [teachers, setTeachers] = useState([])
  let [current, setCurrent] = useState('')
  let [teacherInfo, setTeacherInfo] = useState({})

  useEffect(() => {
    fetch('http://localhost:8080/teacher/all')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setTeachers(data)
        })
        .catch(function (error){
          console.log('error: ', error)
        })
  }, [])

  function onClickTeacherButton() {
    if(current !== 'TEACHER_LIST')
      setCurrent('TEACHER_LIST')
    else {
      setCurrent('')
    }
  }

  function currentTeacher(id) {
    setCurrent('TEACHER_INFO')
    setTeacherInfo(teachers.find(teacher => teacher.id === id))
  }


  return (
    <div className="App">
      <NavBar onClickTeacherButton = {onClickTeacherButton}/>
      <div className='content'>
        {current === 'TEACHER_LIST' && <TeacherList teachers={teachers} currentTeacher={currentTeacher}/>}
        {current === 'TEACHER_INFO' && <TeacherInfo teacher={teacherInfo}/>}
        {!current && <h2>Empty page</h2>}
      </div>
    </div>
  );
}

export default App;

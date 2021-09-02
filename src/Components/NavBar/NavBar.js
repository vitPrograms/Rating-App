import React from 'react'
import './NavBar.css'

export default function NavBar({ onClickTeacherButton }){

    function teacherClick(event) {
        let target = event.target
        target.className ? target.className = '' :  target.className = 'active'
        onClickTeacherButton()
    }

    function ratingClick() {
        console.log('Rating')
    }

    function searchClick(event) {
        event.preventDefault()
        console.log('Search')
    }
    

    return (
        <div className='navbar'>
            <i className="material-icons logo">cast_for_education</i>
            <ul className='list'>
                <li className='list-item'><a onClick={(event) => teacherClick(event)} >Викладачі</a></li>
                <li className='list-item'><a onClick={ratingClick}>Рейтинг</a></li>
                <li className='list-item'>
                    <form>
                        <input type='text' placeholder='Введіть ПІБ викладача' className='search-field'/>
                        <input type='submit' 
                            className='search' 
                            onClick={event => searchClick(event)} />
                    </form>
                </li>
            </ul>
        </div>
    )
}

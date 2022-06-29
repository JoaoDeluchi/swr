import React from 'react'
import { Link } from 'react-router-dom'
import { useQueryGetUser } from '../../services/user'
import './styles.css'

export const Header = () => {
    const { mutate } = useQueryGetUser({userName: 'JoaoDeluchi'})

    return <>
        <div className='Header'>
            <button onClick={mutate} >Reload</button>
            <Link to="/">Login</Link>
            <Link to="/location">Location</Link>
            <Link to="/company">Company</Link>
            <Link to="/name">Name</Link>
        </div>
    </>
}
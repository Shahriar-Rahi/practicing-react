import React, { useState, useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import logo from './logo.svg';

const Nav = () => {

    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const result = await axios('https://www.breakingbadapi.com/api/characters');
        const listOfChars = result.data;
        listOfChars.map(item => setItems(item.name));
    }
    useEffect(() => {
        fetchItems();
    }, [])
    return (
        <nav className="nav">
            <div class="logo">
                <img src={logo} alt="" width="130" />
            </div>
            <ul className="nav-links">
                <Link to='/about'>
                    <li>about</li>
                </Link>
                <Link to='/character'>
                    <li>character</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav

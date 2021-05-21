import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CharacterDetail = ({match}) => {

    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const result = await axios(`https://www.breakingbadapi.com/api/characters/${match.params.id}`);
        const items = result.data;
        setItems(items);

    }
    useEffect(() => {
        fetchItems();
    }, [])
    return (
        <div>
            {items.map(item => (
            <div key={item.char_id} className='card'>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img src={item.img} alt='' />
                    </div>
                    <div className='card-back'>
                        <h1>{item.name}</h1>
                        <ul>
                            <li>
                                <strong>Actor Name:</strong> {item.portrayed}
                            </li>
                            <li>
                                <strong>Nickname:</strong> {item.nickname}
                            </li>
                            <li>
                                <strong>Birthday:</strong> {item.birthday}
                            </li>
                            <li>
                                <strong>Status:</strong> {item.status}
                            </li>
                        </ul>
                    </div>
                </div>
                <h1>{item.name}</h1>
            </div>
            
            ))}
            
        </div>
    )
}

export default CharacterDetail

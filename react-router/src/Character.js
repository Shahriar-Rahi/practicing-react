import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Character = () => {

    const [items, setItems] = useState([]);
    const fetchItems = async () =>{
        const result = await axios('https://www.breakingbadapi.com/api/characters');
        const items = result.data;
        setItems(items);

    }
    useEffect(()=>{
        fetchItems();
    },[])
    return (
        <div>
            
        {items.map(item=>(
            <h1 key={item.char_id}>
                <Link to={`/character/${item.char_id}`}>{item.name}</Link>
            </h1>
        ))}
        </div>
    )
}

export default Character

import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"

const AutoCompleteSearchBar = () => {

    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const fetchData = async () => {
        const data = await axios(`https://dummyjson.com/recipes/search?q=${input}`);
        setResults(data.data.recipes || []);
    }

    useEffect(() => {
        fetchData();
    }, [input])


    return (
        <>
            <h1 className='auto'>Auto Complete Search Bar</h1>

            <div className='search-bar-container'>
                <input
                className='search-input'
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                
            </div>
            <div className='results-container'>
                    {results.map((r) => (
                        <span className='result' key={r.id}>{r.name}</span>
                    ))}
                </div>
        </>
    )
}

export default AutoCompleteSearchBar

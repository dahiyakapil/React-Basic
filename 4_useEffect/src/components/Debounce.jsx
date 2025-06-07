import React, { useEffect, useState } from 'react'

const Debounce = () => {
    const [search, setSearch] = useState("");
    const [debounce, setDebounce] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounce(search);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [search]);

    function handleChange(e) {
        setSearch(e.target.value);
    }

    return (
        <>
            <input
                type="text"
                placeholder='Search here'
                value={search}
                onChange={handleChange}
            />
            <p>Live Text: {search}</p>
            <p>Debounced Text (after 1 sec): {debounce}</p>
        </>
    );
}

export default Debounce;

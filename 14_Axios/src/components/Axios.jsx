import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Axios = () => {
    const [userdata, setUserData] = useState([]);

    const API_URL = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(API_URL); // axios returns response object
                setUserData(response.data); // Store user data in state
                console.log(response.data);  // Log actual data
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData(); 

        return () => {
            console.log("Cleanup"); 
        };
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {userdata.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Axios;

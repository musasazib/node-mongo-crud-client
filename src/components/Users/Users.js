import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>Users Available: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >{user.name} = {user.email}
                        <button>X</button>
                        <button>Update</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;
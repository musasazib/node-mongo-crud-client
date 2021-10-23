import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(rsc => rsc.json())
            .then(data => setUser(data))
    }, [id])
    return (
        <div>
            <h3>Update: {user.name}</h3>
            <p><small>{id}</small></p>
        </div>
    );
};

export default UpdateUser;
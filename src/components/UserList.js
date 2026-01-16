import React, { useEffect, useState } from "react";

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
            setloading(false);
        });
    }, []);
    if (loading) {
        return <p>Loading users...</p>;
    }
    return (
        <div>
            <h2>User Directory</h2>
            <ul>
                {users.map((user) => (
                    <li key={user .id}>
                        <strong>{user .name}</strong> - {user .email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
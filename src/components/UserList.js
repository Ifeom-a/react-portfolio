import React, { useEffect, useState } from "react";

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
            setloading(false);
        });
    }, []);

    const filteredUsers = users.filter((user) => user .name.toLowerCase().includes(searchTerm.toLowerCase())
);
    if (loading) {
        return <p>Loading users...</p>;
    }
    return (
        <div>
            <h2>User Directory</h2>

            <input
            type="text"
            placeholder="Search users by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: "8px", marginBottom: "10px", width: "100px"}}
            />
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user .id}>
                        <strong>{user .name}</strong> - {user .email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
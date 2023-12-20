
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BrandCollaboration = () => {
    const [collaborations, setCollaborations] = useState([]);

    useEffect(() => {
        axios.get('/api/collaborations')
            .then(response => {
                setCollaborations(response.data);
            })
            .catch(error => console.error('Error fetching collaborations:', error));
    }, []);

    return (
        <div>
            <h2>Brand Collaborations</h2>
            {collaborations.map(collab => (
                <div key={collab.id}>
                    <p>Brand: {collab.brand}</p>
                    <p>Status: {collab.status}</p>
                    {/* More collaboration details */}
                </div>
            ))}
        </div>
    );
};

export default BrandCollaboration;

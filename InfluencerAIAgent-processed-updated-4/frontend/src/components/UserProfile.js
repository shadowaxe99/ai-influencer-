
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        axios.get('/api/profile')
            .then(response => {
                setProfile(response.data);
            })
            .catch(error => console.error('Error fetching profile:', error));
    }, []);

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {profile.name}</p>
            <p>Occupation: {profile.occupation}</p>
            {/* More profile details */}
        </div>
    );
};

export default UserProfile;

import React, { useEffect, useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return navigate('/login');

      try {
        const res = await API.get('/auth/profile', {
          headers: { Authorization: `Bearer ${token}` }
,
        });
        setUser(res.data);
      } catch (err) {
        console.error('Profile fetch failed');
        navigate('/login');
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;

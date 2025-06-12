import React, { useEffect, useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/auth/profile', {
        headers: { Authorization: token },
      });
      setUser(res.data);
    } catch (err) {
      console.error(err);
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Container className="mt-5">
      {user ? (
        <>
          <h2>Welcome, {user.name} 👋</h2>
          <p>Email: {user.email}</p>
          <Button variant="danger" onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <Alert variant="info">Loading profile...</Alert>
      )}
    </Container>
  );
}

export default Dashboard;

// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Container, Button, Card, Row, Col, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const res = await axios.get('http://localhost:5000/api/auth/profile', {
        headers: {
          Authorization: token,
        },
      });

      setUser(res.data);
    } catch (err) {
      console.error('❌ Failed to fetch profile:', err);
      localStorage.removeItem('token');
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-container">
        <Spinner animation="border" variant="primary" />
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h2 className="welcome-text">Welcome, {user.name} 👋</h2>
      <p className="email-text">📧 {user.email}</p>

      <Row className="stats-row">
        <Col md={4}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>🧑‍💻 Projects</Card.Title>
              <Card.Text>12 Active Projects</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>💬 Messages</Card.Title>
              <Card.Text>3 New Messages</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>🤝 Connections</Card.Title>
              <Card.Text>27 Developer Connections</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="logout-section">
        <Button variant="danger" onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}

export default Dashboard;

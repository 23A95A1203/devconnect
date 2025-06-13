import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './Register.css'; // Make sure this path is correct

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsSuccess(false);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      setMessage('✅ Registered Successfully!');
      setIsSuccess(true);
    } catch (err) {
      if (err.response && err.response.data.error) {
        setMessage(`❌ ${err.response.data.error}. Please login or use "Forgot Password".`);
      } else {
        setMessage('❌ Something went wrong!');
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h3>Register</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter username" onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} required />
          </Form.Group>
          <Button type="submit" className="w-100 btn-success mt-3">
            Register
          </Button>
          {message && (
            <p className={`message ${isSuccess ? 'text-success' : 'text-danger'}`}>{message}</p>
          )}
        </Form>
        <p className="mt-3">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;

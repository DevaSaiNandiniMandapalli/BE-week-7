// src/components/Signup.js
import { useState } from 'react';
import API from '../api';

const Signup = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post('/signup', formData);
            localStorage.setItem('token', data.token);
            alert('Signup successful');
        } catch (err) {
            console.error(err);
            alert('Signup failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;

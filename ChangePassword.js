// src/components/ChangePassword.js
import { useState } from 'react';
import API from '../api';

const ChangePassword = () => {
    const [formData, setFormData] = useState({ currentPassword: '', newPassword: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.put('/change-password', formData);
            alert(data.message);
        } catch (err) {
            console.error(err);
            alert('Failed to change password');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="password" name="currentPassword" placeholder="Current Password" onChange={handleChange} />
            <input type="password" name="newPassword" placeholder="New Password" onChange={handleChange} />
            <button type="submit">Change Password</button>
        </form>
    );
};

export default ChangePassword;

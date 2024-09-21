// src/components/DeleteAccount.js
import API from '../api';

const DeleteAccount = () => {
    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete your account?')) {
            try {
                await API.delete('/delete-account');
                localStorage.removeItem('token');
                alert('Account deleted');
            } catch (err) {
                console.error(err);
                alert('Failed to delete account');
            }
        }
    };

    return (
        <button onClick={handleDelete}>Delete Account</button>
    );
};

export default DeleteAccount;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin, userLogout, userUpdateProfile } from '../app/actions';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, user, profile } = useSelector(state => state.user);
    const [loginForm, setLoginForm] = useState({ username: '', email: '' });
    const [profileForm, setProfileForm] = useState({ name: '', email: '', avatar: '' });

    const handleLogin = (e) => {
        e.preventDefault();
        const userData = {
            id: Date.now(),
            username: loginForm.username
        };
        const profileData = {
            name: loginForm.username,
            email: loginForm.email,
            avatar: `https://ui-avatars.com/api/?name=${loginForm.username}&background=random`
        };
        dispatch(userLogin(userData, profileData));
        setLoginForm({ username: '', email: '' });
    };

    const handleLogout = () => {
        dispatch(userLogout());
    };

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        dispatch(userUpdateProfile(profileForm));
        setProfileForm({ name: '', email: '', avatar: '' });
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '8px' }}>
            <h2>User Profile</h2>
            
            {!isLoggedIn ? (
                <div>
                    <h3>Login</h3>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={loginForm.username}
                            onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={loginForm.email}
                            onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h3>Welcome, {profile.name}!</h3>
                    <p>Email: {profile.email}</p>
                    {profile.avatar && <img src={profile.avatar} alt="Avatar" style={{width: '50px', height: '50px', borderRadius: '50%'}} />}
                    
                    <div style={{ marginTop: '20px' }}>
                        <h4>Update Profile</h4>
                        <form onSubmit={handleProfileUpdate}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={profileForm.name}
                                onChange={(e) => setProfileForm({...profileForm, name: e.target.value})}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={profileForm.email}
                                onChange={(e) => setProfileForm({...profileForm, email: e.target.value})}
                            />
                            <input
                                type="url"
                                placeholder="Avatar URL"
                                value={profileForm.avatar}
                                onChange={(e) => setProfileForm({...profileForm, avatar: e.target.value})}
                            />
                            <button type="submit">Update Profile</button>
                        </form>
                    </div>
                    
                    <button onClick={handleLogout} style={{ marginTop: '10px', backgroundColor: '#ff4444', color: 'white' }}>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;


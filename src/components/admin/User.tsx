import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';

const User = () => {
    const [userData, setUserData] = useState({
        email: '',
        name: '',
        avatar: '',
        id: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/db.json');
                const user = response.data.users.find(user => user.id === 4);
                setUserData(user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Profile</h2>
                <div className="flex items-center mb-6">
                    <img
                        className="w-16 h-16 rounded-full mr-4"
                        src={userData.avatar}
                        alt="User avatar"
                    />
                    <div>
                        <h3 className="text-xl font-semibold">{userData.name}</h3>
                        <p className="text-gray-600">Team Manager | Arizona, United States</p>
                    </div>
                    <div className="ml-auto flex space-x-4">
                        <button className="text-gray-500 hover:text-gray-900">
                            <i className="fab fa-facebook"></i>
                        </button>
                        <button className="text-gray-500 hover:text-gray-900">
                            <i className="fab fa-x"></i>
                        </button>
                        <button className="text-gray-500 hover:text-gray-900">
                            <i className="fab fa-linkedin"></i>
                        </button>
                        <button className="text-gray-500 hover:text-gray-900">
                            <i className="fab fa-instagram"></i>
                        </button>
                        <button className="text-gray-500 hover:text-gray-900">
                            <i className="fas fa-edit"></i>
                        </button>
                    </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <p className="mt-1 text-gray-900">{userData.name}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email address</label>
                            <p className="mt-1 text-gray-900">{userData.email}</p>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button className="text-gray-500 hover:text-gray-900">
                            <i className="fas fa-edit"></i> Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;

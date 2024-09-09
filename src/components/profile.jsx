import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import user from '../asset/user.jpg'; // Ensure the path is correct

// Profile Component
const Profile = () => {
    return (
        <div className="p-8 flex flex-col items-center ">
            <div className="items-center">
                <div className="bg-black rounded-xl h-54 w-80 flex flex-col items-center justify-center text-white mt-9">
                    <img src={user} className="w-30 h-32 rounded-full mt-[-46px]" alt="User" />
                    <h1 className="mt-3 text-lg font-bold">Gem</h1>
                    <hr className="my-1 border-white w-3/4" />
                    <button className="p-4 space-x-2 hover:text-gray-500 flex items-center">
                        <span>Account Details</span>
                        <FontAwesomeIcon icon={faAddressCard} className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

// UserForm Component
const UserForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        birthDate: '',
        role: '',
        email: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className=" flex flex-col items-center">
        <div className="w-80 bg-black p-3 rounded-xl shadow-lg   ">
            <div className="mb-4 ">
                <label htmlFor="fullName" className="block text-white font-semibold mb-1">
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-60 h-8 p-2 border border-gray-300 rounded text-sm"
                    placeholder="Full Name"
                />
            </div>

            {/* Birth Date and Role */}
            <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="birthDate" className="block text-white font-semibold mb-1">
                        Tanggal Lahir
                    </label>
                    <input
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        className="w-full h-8 p-2 border border-gray-300 rounded text-sm"
                        placeholder="Tanggal Lahir"
                    />
                </div>
                <div>
                    <label htmlFor="role" className="block text-white font-semibold mb-1">
                        Role
                    </label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full h-8 text-sm p-2 border border-gray-300 rounded"
                        placeholder="Role"
                    />
                </div>
            </div>

            {/* Email */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-white font-semibold mb-1">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 h-8 text-sm border border-gray-300 rounded"
                    placeholder="Email"
                />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-white font-semibold mb-1">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded h-8 text-sm"
                    placeholder="Phone Number"
                />
            </div>
        </div>
        </div>
    );
};

// Main Component that combines Profile and UserForm
const UserProfile = () => {
    return (
        <div>
            {/* Profile Section */}
            <Profile />

            {/* User Form Section */}
            <UserForm />
        </div>
    );
};

export default UserProfile;

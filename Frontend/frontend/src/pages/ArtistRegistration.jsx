import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ArtistRegistration = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        art_form: '',
        years_of_experience: '',
        guru_or_teacher: '',
        location: '',
        contact_number: '',
        email: '',
        government_id: '',
        state: '',
        district: '',
        village_town: '',
        ancestral_lineage: '',
        image: null,
        work_samples: null
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const data = new FormData();
            
            // Append all form data to FormData
            Object.keys(formData).forEach(key => {
                if (formData[key] !== null && formData[key] !== '') {
                    data.append(key, formData[key]);
                }
            });
            
            await axios.post('http://localhost:8000/register/artisians/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            navigate('/success'); // Redirect to success page after registration
        } catch (err) {
            console.error('Registration error:', err);
            if (err.response) {
                // Server responded with a status other than 2xx
                setError(`Error: ${err.response.status} - ${err.response.data.message || 'Server Error'}`);
            } else if (err.request) {
                // Request was made but no response received
                setError('No response from server. Please check your network connection.');
            } else {
                // Something else caused the error
                setError('An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-gray-900">Artisan Registration</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Join our platform to showcase your traditional art form
                    </p>
                </div>
                
                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Personal Information */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                                Age
                            </label>
                            <input
                                type="number"
                                name="age"
                                id="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="art_form" className="block text-sm font-medium text-gray-700">
                                Art Form *
                            </label>
                            <input
                                type="text"
                                name="art_form"
                                id="art_form"
                                required
                                value={formData.art_form}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="years_of_experience" className="block text-sm font-medium text-gray-700">
                                Years of Experience *
                            </label>
                            <input
                                type="number"
                                name="years_of_experience"
                                id="years_of_experience"
                                required
                                value={formData.years_of_experience}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="guru_or_teacher" className="block text-sm font-medium text-gray-700">
                                Guru/Teacher
                            </label>
                            <input
                                type="text"
                                name="guru_or_teacher"
                                id="guru_or_teacher"
                                value={formData.guru_or_teacher}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        
                        {/* Contact Information */}
                        <div>
                            <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700">
                                Contact Number
                            </label>
                            <input
                                type="text"
                                name="contact_number"
                                id="contact_number"
                                value={formData.contact_number}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="government_id" className="block text-sm font-medium text-gray-700">
                                Government ID
                            </label>
                            <input
                                type="text"
                                name="government_id"
                                id="government_id"
                                value={formData.government_id}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        
                        {/* Location Information */}
                        <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                State *
                            </label>
                            <input
                                type="text"
                                name="state"
                                id="state"
                                required
                                value={formData.state}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                                District *
                            </label>
                            <input
                                type="text"
                                name="district"
                                id="district"
                                required
                                value={formData.district}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="village_town" className="block text-sm font-medium text-gray-700">
                                Village/Town *
                            </label>
                            <input
                                type="text"
                                name="village_town"
                                id="village_town"
                                required
                                value={formData.village_town}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                Full Address *
                            </label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                required
                                value={formData.location}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                    
                    {/* Additional Information */}
                    <div>
                        <label htmlFor="ancestral_lineage" className="block text-sm font-medium text-gray-700">
                            Ancestral Lineage (Describe your family's history with this art form)
                        </label>
                        <textarea
                            name="ancestral_lineage"
                            id="ancestral_lineage"
                            rows="3"
                            value={formData.ancestral_lineage}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        ></textarea>
                    </div>
                    
                    {/* File Uploads */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                Profile Image
                            </label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="mt-1 block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                file:bg-indigo-50 file:text-indigo-700
                                hover:file:bg-indigo-100"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="work_samples" className="block text-sm font-medium text-gray-700">
                                Work Samples (PDF/Images)
                            </label>
                            <input
                                type="file"
                                name="work_samples"
                                id="work_samples"
                                accept=".pdf,image/*"
                                onChange={handleFileChange}
                                className="mt-1 block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                file:bg-indigo-50 file:text-indigo-700
                                hover:file:bg-indigo-100"
                            />
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">Fields marked with * are required</p>
                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                        >
                            {loading ? 'Registering...' : 'Register as Artisan'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ArtistRegistration;
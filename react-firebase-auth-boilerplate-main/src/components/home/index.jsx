import React from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden p-8 space-y-6">
                <div className="flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center shadow-lg animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                </div>

                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                        Welcome back!
                    </h1>
                    <p className="text-lg font-medium text-gray-800">
                        {currentUser.displayName || currentUser.email}
                    </p>
                </div>

                <div className="flex justify-center">
                    <button 
                        onClick={() => navigate('/profile')}
                        className="py-3 px-8 bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-white font-bold rounded-full shadow-lg transition-all transform hover:scale-105 animate-bounce"
                    >
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;

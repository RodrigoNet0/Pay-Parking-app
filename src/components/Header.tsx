import React from 'react';
import { IoIosCard } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';

export const Header = () => {
    return (
        <div className="bg-gray-600 max-w-full h-14 rounded-lg shadow-sm flex justify-between items-center px-5">
            <h1 className="text-yellow-500 text-2xl font-sans">Parking Pay</h1>
            <div className="text-white">
                <IoIosCard className="mr-3" />
                <FaUserCircle />
            </div>
        </div>
    );
}

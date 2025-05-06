import React from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
    return (
        <div className="flex flex-1 max-w-3xl mx-auto mt-2 ml-4 ">
            <div className="relative flex flex-1">
                <div className="relative flex items-center border border-gray-300 rounded-l-full w-full rounded-r-full">
                    <button className="px-4 py-2 text-gray-700 border-r border-gray-300 rounded-l-full hover:bg-gray-50 flex items-center">
                        Products
                        <svg className="w-2.5 h-2.5 ml-3 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full px-4 py-2 focus:outline-none"
                    />
                <button className="flex items-center justify-center px-6 py-2 text-white bg-[#E94234] rounded-r-full hover:bg-red-600 rounded-l-full">
                    <Search size={20} className="mr-2" /> Search
                </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
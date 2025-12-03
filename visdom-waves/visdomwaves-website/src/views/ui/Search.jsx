import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

export default function Search({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm animate-fadeIn">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full text-4xl font-bold text-primary-navy border-b-2 border-neutral-200 py-4 focus:outline-none focus:border-primary-blue bg-transparent placeholder-neutral-300"
                        autoFocus
                    />
                    <button
                        onClick={onClose}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-neutral-400 hover:text-primary-blue transition-colors"
                    >
                        <FiX className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </div>
    );
}

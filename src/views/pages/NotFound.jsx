import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-navy via-primary-blue to-primary-purple px-4 pt-20">
            <div className="max-w-3xl w-full">
                <div className="text-center text-white">
                    <h1 className="text-9xl font-bold mb-4 opacity-20">404</h1>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                            Page Not Found
                        </h2>

                        <p className="text-xl text-white/90 mb-8">
                            We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps it never existed.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-blue font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
                            >
                                <FiHome className="mr-2" />
                                Go to Homepage
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
                            >
                                Contact Support
                            </Link>
                        </div>

                        <div className="pt-8 border-t border-white/20">
                            <p className="text-white/80 mb-4">Popular pages you might be looking for:</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                                <Link to="/services" className="text-white/90 hover:text-white hover:underline">
                                    Services
                                </Link>
                                <Link to="/products" className="text-white/90 hover:text-white hover:underline">
                                    Products
                                </Link>
                                <Link to="/about" className="text-white/90 hover:text-white hover:underline">
                                    About Us
                                </Link>
                                <Link to="/blog" className="text-white/90 hover:text-white hover:underline">
                                    Blog
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

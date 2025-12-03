import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { heroImages } from "@/config/images";
import {
    FiCode,
    FiCpu,
    FiSmartphone,
    FiCloud,
    FiZap,
    FiUsers,
    FiTarget,
    FiTrendingUp,
    FiAward,
    FiHeart,
    FiArrowRight
} from "react-icons/fi";

export default function Home() {
    const navigate = useNavigate();
    const { user, mobileUser } = useSelector((state) => state.auth);

    const handleDemoClick = (url) => {
        if (user || mobileUser) {
            window.open(url, "_blank");
        } else {
            navigate("/login");
        }
    };

    return (
        <>
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    {/* Background Image */}
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImages.home.url}
                            alt={heroImages.home.alt}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/90 via-primary-blue/85 to-primary-purple/90"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col items-center justify-center min-h-[600px] text-center">
                            <h1 className="text-display-lg md:text-[5rem] text-white mb-6 animate-fade-up leading-tight">
                                Building Tomorrow's<br />
                                <span className="text-brand-vibrantTeal">Digital Solutions</span>
                            </h1>
                            <p className="text-heading-lg text-white/90 mb-8 max-w-3xl animate-fade-up">
                                A new wave of innovation from Hyderabad - bringing fresh perspectives to AI, digital transformation, and custom software development
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
                                <Link to="/products" className="btn-primary bg-white text-primary-blue hover:bg-neutral-100">
                                    Explore Our Products
                                </Link>
                                <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-blue">
                                    Let's Talk
                                </Link>
                            </div>

                            {/* Feature Cards */}
                            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                                <div className="card bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-all">
                                    <FiCpu className="w-12 h-12 mb-3 mx-auto text-brand-vibrantTeal" />
                                    <h3 className="text-heading-lg mb-3 font-heading">AI-Powered Solutions</h3>
                                    <p className="text-neutral-200 text-sm">
                                        Machine learning and intelligent automation for modern businesses
                                    </p>
                                </div>
                                <div className="card bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-all">
                                    <FiCode className="w-12 h-12 mb-3 mx-auto text-brand-vibrantTeal" />
                                    <h3 className="text-heading-lg mb-3 font-heading">Custom Development</h3>
                                    <p className="text-neutral-200 text-sm">
                                        Web and mobile applications built with cutting-edge technology
                                    </p>
                                </div>
                                <div className="card bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-all">
                                    <FiZap className="w-12 h-12 mb-3 mx-auto text-brand-vibrantTeal" />
                                    <h3 className="text-heading-lg mb-3 font-heading">Rapid Delivery</h3>
                                    <p className="text-neutral-200 text-sm">
                                        Agile startup approach - fast iteration, quick deployment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industries Section */}
                <section className="py-20 bg-neutral-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                                Industries We Serve
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                                Delivering innovative solutions across multiple sectors
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Education", slug: "education", desc: "EdTech platforms & learning systems" },
                                { name: "Healthcare", slug: "healthcare", desc: "Telemedicine & hospital management" },
                                { name: "Technology", slug: "technology", desc: "Software development & cloud solutions" },
                                { name: "Construction", slug: "construction", desc: "BIM integration & IoT solutions" },
                                { name: "Temple Projects", slug: "temple-projects", desc: "Digital heritage preservation" },
                                { name: "Consulting", slug: "consulting", desc: "Business intelligence & analytics" },
                            ].map((industry) => (
                                <Link
                                    key={industry.name}
                                    to={`/industries/${industry.slug}`}
                                    className="card hover:scale-105 transition-transform cursor-pointer group"
                                >
                                    <h3 className="text-heading-lg font-heading text-primary-blue group-hover:text-primary-navy mb-2 transition-colors">
                                        {industry.name}
                                    </h3>
                                    <p className="text-neutral-600 text-sm">{industry.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Products Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                                Our Products & Solutions
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                                Ready-to-deploy products and custom solutions built with cutting-edge technology
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* EdTech Platform */}
                            <div className="card hover:shadow-2xl transition-all group border-2 border-primary-blue/20">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="p-3 bg-gradient-to-br from-primary-blue to-primary-purple rounded-xl">
                                        <FiCode className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-heading-xl font-heading text-primary-navy group-hover:text-primary-blue transition-colors">
                                            EduWave Platform
                                        </h3>
                                        <span className="text-sm text-primary-blue font-semibold">Live Product</span>
                                    </div>
                                </div>
                                <p className="text-neutral-600 mb-4">
                                    AI-powered Learning Management System designed for modern educational institutions. Features personalized learning paths, real-time analytics, and seamless integration capabilities.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-semibold">
                                        AI/ML
                                    </span>
                                    <span className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-semibold">
                                        EdTech
                                    </span>
                                    <span className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-semibold">
                                        Cloud-Based
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => handleDemoClick("https://visdom-wave-main-iu5j.vercel.app/")}
                                        className="btn-primary bg-primary-blue hover:bg-primary-navy text-white flex-1 text-center"
                                    >
                                        Try Live Demo
                                    </button>
                                    <Link
                                        to="/products/edtech-platform"
                                        className="btn-outline border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white flex-1 text-center"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>

                            {/* Custom Solutions */}
                            <div className="card hover:shadow-2xl transition-all group">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="p-3 bg-gradient-to-br from-primary-purple to-primary-blue rounded-xl">
                                        <FiSmartphone className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-heading-xl font-heading text-primary-navy group-hover:text-primary-blue transition-colors">
                                            Custom Development
                                        </h3>
                                        <span className="text-sm text-neutral-600 font-semibold">Tailored Solutions</span>
                                    </div>
                                </div>
                                <p className="text-neutral-600 mb-4">
                                    From concept to deployment, we build custom web and mobile applications tailored to your specific business needs using React, Next.js, React Native, and cloud technologies.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-sm text-neutral-700">
                                        <span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2"></span>
                                        Enterprise Web Applications
                                    </li>
                                    <li className="flex items-center text-sm text-neutral-700">
                                        <span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2"></span>
                                        Mobile Apps (iOS & Android)
                                    </li>
                                    <li className="flex items-center text-sm text-neutral-700">
                                        <span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2"></span>
                                        AI/ML Integration
                                    </li>
                                    <li className="flex items-center text-sm text-neutral-700">
                                        <span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2"></span>
                                        Cloud Infrastructure
                                    </li>
                                </ul>
                                <Link
                                    to="/services"
                                    className="btn-primary bg-neutral-100 text-primary-navy hover:bg-neutral-200 w-full text-center"
                                >
                                    View All Services
                                </Link>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <Link
                                to="/products"
                                className="btn-primary bg-primary-blue hover:bg-primary-navy text-white inline-flex items-center"
                            >
                                Explore All Products
                                <FiArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-20 bg-gradient-to-br from-primary-navy to-primary-blue text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-display-sm font-heading mb-4">
                                Why Choose VisdomWaves
                            </h2>
                            <p className="text-lg text-white/80 max-w-2xl mx-auto">
                                The advantages of working with a fresh, innovative startup focused on delivering real value
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all text-center">
                                <div className="w-16 h-16 bg-brand-vibrantTeal/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                    <FiZap className="w-8 h-8 text-brand-vibrantTeal" />
                                </div>
                                <h3 className="text-heading-lg font-heading mb-3">Startup Agility</h3>
                                <p className="text-white/80">
                                    Fast decision-making, rapid iterations, and flexible approaches. We move quickly without corporate bureaucracy.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all text-center">
                                <div className="w-16 h-16 bg-brand-vibrantTeal/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                    <FiUsers className="w-8 h-8 text-brand-vibrantTeal" />
                                </div>
                                <h3 className="text-heading-lg font-heading mb-3">Direct Access</h3>
                                <p className="text-white/80">
                                    Work directly with our founding team. No layers of management - just skilled engineers and clear communication.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all text-center">
                                <div className="w-16 h-16 bg-brand-vibrantTeal/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                    <FiTrendingUp className="w-8 h-8 text-brand-vibrantTeal" />
                                </div>
                                <h3 className="text-heading-lg font-heading mb-3">Modern Tech Stack</h3>
                                <p className="text-white/80">
                                    Latest technologies and best practices. React, Next.js, AI/ML, cloud-native - built for the future.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all text-center">
                                <div className="w-16 h-16 bg-brand-vibrantTeal/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                    <FiHeart className="w-8 h-8 text-brand-vibrantTeal" />
                                </div>
                                <h3 className="text-heading-lg font-heading mb-3">Passionate Team</h3>
                                <p className="text-white/80">
                                    We're building something we believe in. Every project gets our full dedication and attention to detail.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all text-center">
                                <div className="w-16 h-16 bg-brand-vibrantTeal/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                    <FiTarget className="w-8 h-8 text-brand-vibrantTeal" />
                                </div>
                                <h3 className="text-heading-lg font-heading mb-3">Results-Focused</h3>
                                <p className="text-white/80">
                                    We measure success by your outcomes. Practical solutions that solve real problems and deliver value.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all text-center">
                                <div className="w-16 h-16 bg-brand-vibrantTeal/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                    <FiAward className="w-8 h-8 text-brand-vibrantTeal" />
                                </div>
                                <h3 className="text-heading-lg font-heading mb-3">Deep Expertise</h3>
                                <p className="text-white/80">
                                    50+ years of combined experience. Our team brings knowledge from top tech companies and successful projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary-blue text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-display-sm font-heading mb-6">
                            Let's Build Something Amazing Together
                        </h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
                            Whether you need a custom solution or want to explore our products, we're ready to help bring your ideas to life
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-primary bg-white text-primary-blue hover:bg-neutral-100 inline-flex items-center">
                                Schedule a Call
                                <FiArrowRight className="ml-2" />
                            </Link>
                            <Link to="/products" className="btn-outline border-white text-white hover:bg-white hover:text-primary-blue">
                                Try Our Products
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

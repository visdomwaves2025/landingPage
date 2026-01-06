import React from "react";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllProducts, getProductBySlug } from "@/config/data/products";
import {
    FiCheck,
    FiStar,
    FiTrendingUp,
    FiUsers,
    FiArrowRight,
    FiPlay,
    FiCpu,
    FiBarChart2,
    FiEdit,
    FiVideo,
    FiSmartphone,
    FiHome,
    FiZap,
    FiShield,
    FiWind,
    FiMic,
    FiActivity,
    FiDollarSign,
    FiCalendar,
    FiBookmark,
    FiPackage,
    FiGlobe,
    FiBook,
    FiMonitor,
    FiServer,
    FiDatabase,
    FiTool,
    FiCamera,
    FiHeadphones,
    FiMapPin,
    FiShoppingCart,
    FiMail,
    FiLock,
} from "react-icons/fi";

export default function ProductDetailPage() {
    const { slug } = useParams();
    const product = getProductBySlug(slug || "");
    const navigate = useNavigate();
    const { user, mobileUser } = useSelector((state) => state.auth);

    const handleDemoClick = (url) => {
        if (user || mobileUser) {
            navigate(url);
        } else {
            navigate("/login");
        }
    };

    if (!product) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={product.heroImage}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white text-sm font-semibold mb-4">
                            {product.category}
                        </div>
                        <h1 className="text-display-lg text-white mb-6 animate-fade-up">
                            {product.name}
                        </h1>
                        <p className="text-heading-lg text-white/90 max-w-3xl mx-auto mb-8 animate-fade-up">
                            {product.tagline}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
                            {product.demo.available && (
                                <button
                                    onClick={() => handleDemoClick(product.demo.url || "#")}
                                    className="btn-primary bg-white text-primary-blue hover:bg-neutral-100 inline-flex items-center"
                                >
                                    <FiPlay className="mr-2" />
                                    {product.demo.type === "video"
                                        ? "Watch Demo"
                                        : product.demo.type === "live"
                                            ? "Try Live Demo"
                                            : "Explore Sandbox"}
                                </button>
                            )}
                            <Link
                                to="/contact"
                                className="btn-outline border-white text-white hover:bg-white hover:text-primary-blue"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-display-sm font-heading text-primary-navy mb-6">
                                Overview
                            </h2>
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                {product.description}
                            </p>

                            <h3 className="text-heading-xl font-heading text-primary-navy mb-4">
                                Key Benefits
                            </h3>
                            <ul className="space-y-3">
                                {product.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <FiCheck className="w-6 h-6 text-primary-blue mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-neutral-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8">
                            {/* Showcase Image */}
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 transform hover:scale-[1.02] transition-transform duration-500">
                                <img
                                    src={product.showcaseImage}
                                    alt={`${product.name} Interface`}
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="bg-gradient-to-br from-primary-blue to-primary-purple rounded-2xl p-8 text-white shadow-lg">
                                <h3 className="text-xl font-heading mb-6">
                                    Technology Stack
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {product.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-semibold"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            Powerful Features
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Everything you need to succeed, all in one platform
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {product.features.map((feature, idx) => (
                            <div key={idx} className="card hover:scale-105 transition-transform">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary-blue to-primary-purple rounded-xl flex items-center justify-center mb-4">
                                    {getIconComponent(feature.icon)}
                                </div>
                                <h3 className="text-heading-lg font-heading text-primary-navy mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study Section */}
            <section className="py-20 bg-gradient-to-br from-primary-navy to-primary-blue text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading mb-4">
                            Success Story
                        </h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Real results from real clients
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <div className="flex items-center space-x-3 mb-6">
                                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                                        {product.caseStudy.industry}
                                    </span>
                                    <span className="text-white/80">
                                        {product.caseStudy.client}
                                    </span>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-lg mb-2">Challenge</h4>
                                        <p className="text-white/80">
                                            {product.caseStudy.challenge}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-lg mb-2">Solution</h4>
                                        <p className="text-white/80">
                                            {product.caseStudy.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/10 rounded-xl p-6">
                                <h4 className="font-semibold text-lg mb-6">Key Results</h4>
                                <div className="space-y-4">
                                    {product.caseStudy.results.map((result, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <FiTrendingUp className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-white/90 text-sm">{result}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-blue text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-display-sm font-heading mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
                        Join thousands of satisfied customers transforming their operations
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => handleDemoClick("/contact")}
                            className="btn-primary bg-white text-primary-blue hover:bg-neutral-100 inline-flex items-center"
                        >
                            Schedule a Demo
                            <FiArrowRight className="ml-2" />
                        </button>
                        <Link
                            to="#pricing"
                            className="btn-outline border-white text-white hover:bg-white hover:text-primary-blue"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Helper function to get icon component for icon names
function getIconComponent(iconName) {
    const iconMap = {
        brain: <FiCpu className="w-6 h-6 text-white" />, // AI-Powered Personalization
        chart: <FiBarChart2 className="w-6 h-6 text-white" />, // Real-Time Analytics Dashboard
        building: <FiBook className="w-6 h-6 text-white" />, // Multi-Institution Support (books/schools)
        edit: <FiEdit className="w-6 h-6 text-white" />, // Interactive Content Creation
        video: <FiVideo className="w-6 h-6 text-white" />, // Virtual Classroom Integration
        mobile: <FiSmartphone className="w-6 h-6 text-white" />, // Mobile-First Design
        home: <FiHome className="w-6 h-6 text-white" />, // Unified Control Hub
        zap: <FiZap className="w-6 h-6 text-white" />, // AI Energy Optimization
        shield: <FiShield className="w-6 h-6 text-white" />, // Advanced Security
        wand: <FiTool className="w-6 h-6 text-white" />, // Scene Automation (settings/tools)
        mic: <FiMic className="w-6 h-6 text-white" />, // Voice Assistant Integration
        activity: <FiActivity className="w-6 h-6 text-white" />, // Energy Monitoring
        dollar: <FiDollarSign className="w-6 h-6 text-white" />, // Digital Donation Management
        calendar: <FiCalendar className="w-6 h-6 text-white" />, // Event & Festival Planning
        users: <FiUsers className="w-6 h-6 text-white" />, // Devotee Database
        bookmark: <FiBookmark className="w-6 h-6 text-white" />, // Pooja Booking System
        package: <FiPackage className="w-6 h-6 text-white" />, // Prasadam & Inventory
        globe: <FiGlobe className="w-6 h-6 text-white" />, // Multi-Language Support
    };
    return iconMap[iconName] || <FiStar className="w-6 h-6 text-white" />;
}

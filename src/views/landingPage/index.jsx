import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { heroImages } from "@/config/images";
import {
    FiCode,
    FiCpu,
    FiSmartphone,
    FiChevronsRight,
    FiMessageSquare,
    FiLayers,
    FiCheckCircle,
    FiBookOpen,
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

                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col items-center justify-center min-h-[600px] text-center">
                            <h1 className="text-display-lg md:text-[5rem] font-bold text-white mb-6 animate-fade-up leading-tight tracking-tight drop-shadow-2xl">
                                Building Tomorrow's<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-vibrantTeal to-primary-purple animate-pulse">Digital Solutions</span>
                            </h1>
                            <p className="text-heading-lg text-neutral-200 mb-8 max-w-3xl animate-fade-up delay-100 font-light leading-relaxed drop-shadow-md">
                                A new wave of innovation from Hyderabad - bringing fresh perspectives to AI, digital transformation, and custom software development
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-200">
                                <Link to="/products" className="btn-primary bg-primary-blue hover:bg-primary-blue/80 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(100,255,218,0.4)] hover:shadow-[0_0_30px_rgba(100,255,218,0.6)] transition-all transform hover:-translate-y-1">
                                    Explore Our Products
                                </Link>
                                <Link to="/contact" className="btn-outline border-2 border-white/30 text-white hover:bg-white/10 hover:border-white font-bold py-4 px-8 rounded-full backdrop-blur-sm transition-all transform hover:-translate-y-1">
                                    Let's Talk
                                </Link>
                            </div>

                            {/* Feature Cards */}
                            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl animate-fade-up delay-300">
                                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl group text-left shadow-lg border border-white/20">
                                    <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <FiCpu className="w-8 h-8 text-primary-blue" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-primary-navy mb-3">AI-Powered Solutions</h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed">
                                        Machine learning and intelligent automation for modern businesses. Unlock the power of data.
                                    </p>
                                </div>
                                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl group text-left shadow-lg border border-white/20">
                                    <div className="w-16 h-16 bg-primary-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <FiCode className="w-8 h-8 text-primary-purple" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-primary-navy mb-3">Custom Development</h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed">
                                        Web and mobile applications built with cutting-edge technology stacks like Next.js and React Native.
                                    </p>
                                </div>
                                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl group text-left shadow-lg border border-white/20">
                                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <FiChevronsRight className="w-8 h-8 text-yellow-600" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-primary-navy mb-3">Rapid Delivery</h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed">
                                        Agile startup approach - fast iteration, quick deployment. We move at the speed of your business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industries Section */}
                <section className="py-20 bg-neutral-50 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
                                Industries We Serve
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                                Delivering innovative solutions across multiple sectors with domain-specific expertise.
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
                                    className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-lg transition-all group hover:-translate-y-1"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-heading font-bold text-primary-navy group-hover:text-primary-blue transition-colors">
                                            {industry.name}
                                        </h3>
                                        <FiArrowRight className="text-neutral-400 group-hover:text-primary-blue transition-all group-hover:translate-x-1" />
                                    </div>
                                    <p className="text-neutral-500 text-sm">{industry.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Products Section */}
                <section className="py-20 bg-white border-t border-neutral-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
                                Our Products & Solutions
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                                Ready-to-deploy products and custom solutions built with cutting-edge technology.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* EdTech Platform */}
                            <div className="bg-white p-8 rounded-2xl group border border-neutral-200 shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                                <div className="flex items-center space-x-4 mb-6 relative z-10">
                                    <div className="p-4 bg-primary-blue/10 rounded-xl">
                                        <FiCode className="w-8 h-8 text-primary-blue" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-heading font-bold text-primary-navy group-hover:text-primary-blue transition-colors">
                                            EduWave Platform
                                        </h3>
                                        <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded">Live Product</span>
                                    </div>
                                </div>
                                <p className="text-neutral-600 mb-8 leading-relaxed">
                                    AI-powered Learning Management System designed for modern educational institutions. Features personalized learning paths, real-time analytics, and seamless integration capabilities.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1 bg-neutral-100 text-primary-blue border border-neutral-200 rounded-full text-sm font-medium">
                                        AI/ML
                                    </span>
                                    <span className="px-3 py-1 bg-neutral-100 text-primary-blue border border-neutral-200 rounded-full text-sm font-medium">
                                        EdTech
                                    </span>
                                    <span className="px-3 py-1 bg-neutral-100 text-primary-blue border border-neutral-200 rounded-full text-sm font-medium">
                                        Cloud-Based
                                    </span>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => handleDemoClick("https://visdom-wave-main-iu5j.vercel.app/")}
                                        className="btn-primary bg-primary-blue text-white flex-1 text-center py-3 rounded-lg font-bold shadow-lg hover:bg-blue-600 transition-all"
                                    >
                                        Try Live Demo
                                    </button>
                                    <Link
                                        to="/products/edtech-platform"
                                        className="btn-outline border border-neutral-300 text-primary-navy hover:bg-neutral-50 flex-1 text-center py-3 rounded-lg font-bold transition-all"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>

                            {/* Custom Solutions */}
                            <div className="bg-white p-8 rounded-2xl group border border-neutral-200 shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-purple/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                                <div className="flex items-center space-x-4 mb-6 relative z-10">
                                    <div className="p-4 bg-primary-purple/10 rounded-xl">
                                        <FiSmartphone className="w-8 h-8 text-primary-purple" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-heading font-bold text-primary-navy group-hover:text-primary-blue transition-colors">
                                            Custom Development
                                        </h3>
                                        <span className="text-sm text-neutral-500 font-semibold">Tailored Solutions</span>
                                    </div>
                                </div>
                                <p className="text-neutral-600 mb-8 leading-relaxed">
                                    From concept to deployment, we build custom web and mobile applications tailored to your specific business needs using React, Next.js, React Native, and cloud technologies.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-sm text-neutral-600">
                                        <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                                        Enterprise Web Applications
                                    </li>
                                    <li className="flex items-center text-sm text-neutral-600">
                                        <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                                        Mobile Apps (iOS & Android)
                                    </li>
                                    <li className="flex items-center text-sm text-neutral-600">
                                        <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                                        AI/ML Integration
                                    </li>
                                    <li className="flex items-center text-sm text-neutral-600">
                                        <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                                        Cloud Infrastructure
                                    </li>
                                </ul>
                                <Link
                                    to="/services"
                                    className="btn-outline border border-neutral-300 text-primary-navy hover:bg-neutral-50 w-full text-center block py-3 rounded-lg font-bold transition-all"
                                >
                                    View All Services
                                </Link>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <Link
                                to="/products"
                                className="inline-flex items-center gap-2 text-primary-blue font-bold hover:text-primary-navy transition-colors group"
                            >
                                Explore All Products
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-20 bg-neutral-50 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
                                Why Choose VisdomWaves
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                                The advantages of working with a fresh, innovative startup focused on delivering real value
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl text-center group shadow-sm hover:shadow-lg transition-all border border-neutral-200">
                                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform">
                                    <FiChevronsRight className="w-8 h-8 text-primary-blue" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-primary-navy mb-3">Startup Agility</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    Fast decision-making, rapid iterations, and flexible approaches. We move quickly without corporate bureaucracy.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl text-center group shadow-sm hover:shadow-lg transition-all border border-neutral-200">
                                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform">
                                    <FiMessageSquare className="w-8 h-8 text-primary-blue" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-primary-navy mb-3">Direct Access</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    Work directly with our founding team. No layers of management - just skilled engineers and clear communication.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl text-center group shadow-sm hover:shadow-lg transition-all border border-neutral-200">
                                <div className="w-16 h-16 bg-primary-purple/10 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform">
                                    <FiLayers className="w-8 h-8 text-primary-purple" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-primary-navy mb-3">Modern Tech Stack</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    Latest technologies and best practices. React, Next.js, AI/ML, cloud-native - built for the future.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl text-center group shadow-sm hover:shadow-lg transition-all border border-neutral-200">
                                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform">
                                    <FiCode className="w-8 h-8 text-red-500" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-primary-navy mb-3">Passionate Team</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    We're building something we believe in. Every project gets our full dedication and attention to detail.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl text-center group shadow-sm hover:shadow-lg transition-all border border-neutral-200">
                                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform">
                                    <FiCheckCircle className="w-8 h-8 text-primary-blue" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-primary-navy mb-3">Results-Focused</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    We measure success by your outcomes. Practical solutions that solve real problems and deliver value.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl text-center group shadow-sm hover:shadow-lg transition-all border border-neutral-200">
                                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform">
                                    <FiBookOpen className="w-8 h-8 text-yellow-600" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-primary-navy mb-3">Deep Expertise</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    50+ years of combined experience. Our team brings knowledge from top tech companies and successful projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary-blue/10 backdrop-blur-lg z-0"></div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
                            Let's Build Something Amazing Together
                        </h2>
                        <p className="text-xl mb-10 text-neutral-600">
                            Whether you need a custom solution or want to explore our products, we're ready to help bring your ideas to life
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-primary bg-primary-blue hover:bg-primary-blue/80 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-primary-blue/30 inline-flex items-center justify-center transition-all">
                                Schedule a Call
                                <FiArrowRight className="ml-2" />
                            </Link>
                            <Link to="/products" className="btn-outline border-2 border-primary-navy/20 text-primary-navy hover:bg-white/50 font-bold py-4 px-10 rounded-full transition-all">
                                Try Our Products
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

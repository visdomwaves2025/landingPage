import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    FiCode,
    FiTrendingUp,
    FiZap,
    FiUsers,
    FiTarget,
    FiCpu,
    FiSmartphone,
    FiCloud,
    FiShield,
    FiArrowRight,
    FiPlay
} from "react-icons/fi";

export default function CaseStudiesPage() {
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
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-navy to-primary-blue pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-display-lg text-white mb-6 animate-fade-up">
                            Our Work & <span className="text-brand-vibrantTeal">Capabilities</span>
                        </h1>
                        <p className="text-heading-lg text-white/90 max-w-3xl mx-auto animate-fade-up">
                            From live products to custom solutions - see what we've built and what we can create for you
                        </p>
                    </div>
                </div>
            </section>

            {/* Live Product Showcase */}
            <section className="py-24 bg-gradient-to-b from-white via-neutral-50/50 to-white relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary-blue/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="px-4 py-2 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-semibold">
                                Live & Operational
                            </span>
                        </div>
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            Our Live Product
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                            Real, working solutions you can try right now
                        </p>
                    </div>

                    {/* EduWave Platform Card - Redesigned */}
                    <div className="relative group">
                        {/* Glow effect on hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-blue via-brand-vibrantTeal to-primary-purple rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

                        <div className="relative bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden">
                            {/* Top accent bar */}
                            <div className="h-1.5 bg-gradient-to-r from-primary-blue via-brand-vibrantTeal to-primary-purple"></div>

                            <div className="p-8 lg:p-12">
                                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                                    {/* Left Section - Product Info */}
                                    <div className="lg:col-span-3 space-y-8">
                                        {/* Header */}
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                            <div className="p-4 bg-gradient-to-br from-primary-blue via-primary-purple to-brand-vibrantTeal rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                                                <FiCode className="w-10 h-10 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-3xl lg:text-4xl font-heading text-primary-navy mb-2">
                                                    EduWave Platform
                                                </h3>
                                                <div className="flex items-center gap-2">
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-semibold border border-green-200">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                        Live & Operational
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="prose prose-lg max-w-none">
                                            <p className="text-neutral-700 text-lg leading-relaxed">
                                                AI-powered Learning Management System designed for modern educational institutions.
                                                Built from the ground up with <span className="font-semibold text-primary-navy">scalability</span>,
                                                <span className="font-semibold text-primary-navy"> personalization</span>, and
                                                <span className="font-semibold text-primary-navy"> user experience</span> in mind.
                                            </p>
                                        </div>

                                        {/* Key Features */}
                                        <div className="space-y-4">
                                            <h4 className="text-xl font-heading text-primary-navy font-semibold">Key Features</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {[
                                                    "Personalized learning paths with AI recommendations",
                                                    "Real-time analytics and progress tracking",
                                                    "Interactive course creation tools",
                                                    "Seamless integration capabilities",
                                                    "Mobile-responsive design",
                                                    "Cloud-based infrastructure"
                                                ].map((feature, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary-blue/5 transition-colors group/feature">
                                                        <div className="mt-1 flex-shrink-0">
                                                            <div className="w-2 h-2 bg-gradient-to-br from-primary-blue to-brand-vibrantTeal rounded-full group-hover/feature:scale-125 transition-transform"></div>
                                                        </div>
                                                        <span className="text-neutral-700 text-sm leading-relaxed">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Technology Tags */}
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200">
                                            {["AI/ML", "EdTech", "React", "Next.js", "Cloud-Based", "TypeScript"].map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-4 py-2 bg-gradient-to-br from-primary-blue/10 to-primary-purple/10 text-primary-blue rounded-lg text-sm font-semibold border border-primary-blue/20 hover:border-primary-blue/40 hover:shadow-md transition-all"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Section - CTA & Demo */}
                                    <div className="lg:col-span-2">
                                        <div className="relative h-full bg-gradient-to-br from-primary-blue via-primary-purple to-brand-vibrantTeal rounded-2xl p-8 text-white overflow-hidden">
                                            {/* Decorative pattern */}
                                            <div className="absolute inset-0 opacity-10">
                                                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
                                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mb-24"></div>
                                            </div>

                                            <div className="relative z-10 h-full flex flex-col justify-between">
                                                <div>
                                                    <div className="inline-flex items-center gap-2 mb-6">
                                                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                                        <span className="text-sm font-semibold uppercase tracking-wider">Live Demo</span>
                                                    </div>
                                                    <h4 className="text-3xl font-heading font-bold mb-4">
                                                        Try It Live
                                                    </h4>
                                                    <p className="text-white/90 text-lg leading-relaxed mb-8">
                                                        Experience our EdTech platform firsthand. See the interface,
                                                        explore features, and understand the user experience we deliver.
                                                    </p>
                                                </div>

                                                <div className="space-y-5">
                                                    {/* Progress Indicator */}
                                                    <div className="bg-white/15 backdrop-blur-md rounded-xl p-5 border border-white/20">
                                                        <div className="flex items-center justify-between mb-3">
                                                            <span className="text-sm font-semibold uppercase tracking-wider">Development Status</span>
                                                            <span className="text-lg font-bold">100%</span>
                                                        </div>
                                                        <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                                                            <div
                                                                className="h-full bg-gradient-to-r from-green-400 to-brand-vibrantTeal rounded-full shadow-lg"
                                                                style={{ width: '100%' }}
                                                            ></div>
                                                        </div>
                                                        <p className="text-white/70 text-xs mt-2">Production Ready</p>
                                                    </div>

                                                    {/* Action Buttons */}
                                                    <div className="space-y-3">
                                                        <button
                                                            onClick={() => handleDemoClick("https://visdom-wave-main-iu5j.vercel.app/")}
                                                            className="group/btn block w-full bg-white text-primary-blue hover:bg-neutral-50 rounded-xl px-6 py-4 text-center font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                                        >
                                                            <span className="inline-flex items-center justify-center gap-2">
                                                                <FiPlay className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                                                Launch Live Demo
                                                            </span>
                                                        </button>

                                                        <Link
                                                            to="/products/edtech-platform"
                                                            className="block w-full bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 rounded-xl px-6 py-4 text-center font-semibold transition-all duration-300 hover:border-white/50"
                                                        >
                                                            View Full Details
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Capabilities */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            What We Build
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Our technical expertise spans the full stack of modern development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FiCpu className="w-8 h-8" />,
                                title: "AI & Machine Learning",
                                description: "Intelligent systems with ML algorithms, predictive analytics, and automated decision-making",
                                capabilities: ["Natural Language Processing", "Recommendation Systems", "Predictive Analytics", "Computer Vision"]
                            },
                            {
                                icon: <FiCode className="w-8 h-8" />,
                                title: "Web Applications",
                                description: "Enterprise-grade web platforms built with modern frameworks and best practices",
                                capabilities: ["React & Next.js", "Responsive Design", "Real-time Features", "API Development"]
                            },
                            {
                                icon: <FiSmartphone className="w-8 h-8" />,
                                title: "Mobile Development",
                                description: "Native and cross-platform mobile apps for iOS and Android",
                                capabilities: ["React Native", "Cross-platform", "Offline-first", "Push Notifications"]
                            },
                            {
                                icon: <FiCloud className="w-8 h-8" />,
                                title: "Cloud Solutions",
                                description: "Scalable cloud infrastructure and deployment strategies",
                                capabilities: ["AWS/Azure/GCP", "Auto-scaling", "Microservices", "CI/CD Pipelines"]
                            },
                            {
                                icon: <FiShield className="w-8 h-8" />,
                                title: "Security & Compliance",
                                description: "Enterprise-grade security measures and industry compliance",
                                capabilities: ["Data Encryption", "GDPR Compliance", "Secure APIs", "Audit Logging"]
                            },
                            {
                                icon: <FiTrendingUp className="w-8 h-8" />,
                                title: "Digital Transformation",
                                description: "End-to-end modernization of business processes and systems",
                                capabilities: ["Process Automation", "System Integration", "Legacy Migration", "Analytics"]
                            }
                        ].map((capability, idx) => (
                            <div key={idx} className="card hover:shadow-xl transition-all group">
                                <div className="p-4 bg-gradient-to-br from-primary-blue to-primary-purple rounded-xl inline-block mb-4 text-white">
                                    {capability.icon}
                                </div>
                                <h3 className="text-heading-lg font-heading text-primary-navy mb-3 group-hover:text-primary-blue transition-colors">
                                    {capability.title}
                                </h3>
                                <p className="text-neutral-600 mb-4">
                                    {capability.description}
                                </p>
                                <ul className="space-y-2">
                                    {capability.capabilities.map((cap, capIdx) => (
                                        <li key={capIdx} className="flex items-center text-sm text-neutral-700">
                                            <span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2"></span>
                                            {cap}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            How We Work
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Our startup approach combines agility with deep technical expertise
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                number: "01",
                                title: "Discovery & Planning",
                                description: "Deep dive into your requirements, goals, and technical constraints. We map out the complete solution architecture.",
                                icon: <FiTarget className="w-6 h-6" />
                            },
                            {
                                number: "02",
                                title: "Rapid Prototyping",
                                description: "Quick iterations to validate ideas and get early feedback. See your vision come to life in weeks, not months.",
                                icon: <FiZap className="w-6 h-6" />
                            },
                            {
                                number: "03",
                                title: "Development & Testing",
                                description: "Clean code, best practices, and continuous testing. We build for scale and maintainability from day one.",
                                icon: <FiCode className="w-6 h-6" />
                            },
                            {
                                number: "04",
                                title: "Launch & Support",
                                description: "Smooth deployment and ongoing support. We don't disappear after launch - we ensure your success.",
                                icon: <FiUsers className="w-6 h-6" />
                            }
                        ].map((step, idx) => (
                            <div key={idx} className="relative">
                                <div className="card hover:shadow-xl transition-all h-full">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="text-5xl font-bold text-primary-blue/20">
                                            {step.number}
                                        </div>
                                        <div className="p-2 bg-primary-blue/10 rounded-lg text-primary-blue">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-heading-lg font-heading text-primary-navy mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-neutral-600">
                                        {step.description}
                                    </p>
                                </div>
                                {idx < 3 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-blue/30"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Expertise */}
            <section className="py-20 bg-gradient-to-br from-primary-navy to-primary-blue text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading mb-4">
                            Backed by Deep Expertise
                        </h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            While we're a new startup, our team brings decades of combined experience
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all">
                            <div className="text-5xl font-bold mb-2">50+</div>
                            <div className="text-white/80 text-lg">Years Combined Experience</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all">
                            <div className="text-5xl font-bold mb-2">6+</div>
                            <div className="text-white/80 text-lg">Industry Verticals</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all">
                            <div className="text-5xl font-bold mb-2">100%</div>
                            <div className="text-white/80 text-lg">Code Quality Focus</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all">
                            <div className="text-5xl font-bold mb-2">24/7</div>
                            <div className="text-white/80 text-lg">Dedicated Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-display-sm font-heading text-primary-navy mb-6">
                        Ready to Build Something Amazing?
                    </h2>
                    <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                        Let's discuss your project and explore how we can bring your vision to life
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="btn-primary bg-primary-blue hover:bg-primary-navy text-white inline-flex items-center justify-center"
                        >
                            Start Your Project
                            <FiArrowRight className="ml-2" />
                        </Link>
                        <Link
                            to="/products"
                            className="btn-outline border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
                        >
                            Explore Our Products
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

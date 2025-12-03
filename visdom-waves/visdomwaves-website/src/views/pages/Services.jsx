import React from "react";
import { Link } from "react-router-dom";
import { heroImages } from "@/config/images";
import {
    FiBriefcase,
    FiCpu,
    FiCode,
    FiSmartphone,
    FiLayers,
    FiTrendingUp,
    FiCloud,
    FiShield,
} from "react-icons/fi";

export default function ServicesPage() {
    const services = [
        {
            slug: "ai-machine-learning",
            icon: <FiCpu className="w-12 h-12" />,
            title: "AI & Automation",
            description: "Transform your business with intelligent automation and AI-driven insights",
            features: [
                "AI Strategy & Roadmap",
                "Machine Learning Solutions",
                "Process Automation",
                "Predictive Analytics",
                "Natural Language Processing",
            ],
        },
        {
            slug: "digital-transformation",
            icon: <FiTrendingUp className="w-12 h-12" />,
            title: "Digital Transformation",
            description: "Modernize your business with comprehensive digital transformation strategies",
            features: [
                "Cloud Migration",
                "Legacy System Modernization",
                "Digital Strategy Consulting",
                "Change Management",
                "Business Process Reengineering",
            ],
        },
        {
            slug: "web-development",
            icon: <FiCode className="w-12 h-12" />,
            title: "Web Development",
            description: "Build scalable, high-performance web applications tailored to your needs",
            features: [
                "Enterprise Web Applications",
                "E-commerce Platforms",
                "Progressive Web Apps",
                "CMS Solutions",
                "API Development",
            ],
        },
        {
            slug: "mobile-app-development",
            icon: <FiSmartphone className="w-12 h-12" />,
            title: "Mobile App Development",
            description: "Create engaging mobile experiences for iOS and Android platforms",
            features: [
                "Native iOS Development",
                "Native Android Development",
                "Cross-Platform Apps",
                "React Native Solutions",
                "Mobile UI/UX Design",
            ],
        },
        {
            slug: null, // No detail page yet
            icon: <FiBriefcase className="w-12 h-12" />,
            title: "IT Consulting",
            description: "Expert guidance on technology strategy and implementation",
            features: [
                "Technology Assessment",
                "Infrastructure Design",
                "Security Consulting",
                "Performance Optimization",
                "Technical Architecture",
            ],
        },
        {
            slug: null, // No detail page yet
            icon: <FiLayers className="w-12 h-12" />,
            title: "Design Services",
            description: "Create beautiful, user-centric designs that drive engagement",
            features: [
                "UI/UX Design",
                "Brand Identity",
                "Graphic Design",
                "Design Systems",
                "User Research",
            ],
        },
        {
            slug: "cloud-computing",
            icon: <FiCloud className="w-12 h-12" />,
            title: "Cloud Solutions",
            description: "Leverage the power of cloud computing for scalability and efficiency",
            features: [
                "AWS Cloud Services",
                "Azure Solutions",
                "Cloud Architecture",
                "DevOps & CI/CD",
                "Cloud Security",
            ],
        },
        {
            slug: null, // No detail page yet
            icon: <FiShield className="w-12 h-12" />,
            title: "Cybersecurity",
            description: "Protect your digital assets with comprehensive security solutions",
            features: [
                "Security Audits",
                "Penetration Testing",
                "Compliance Management",
                "Threat Detection",
                "Security Training",
            ],
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImages.services.url}
                        alt={heroImages.services.alt}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/90 to-primary-blue/90"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-display-lg text-white mb-6 animate-fade-up">
                            Our <span className="text-brand-vibrantTeal">Services</span>
                        </h1>
                        <p className="text-heading-lg text-white/90 max-w-3xl mx-auto animate-fade-up">
                            Comprehensive technology solutions tailored to your business needs
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="card hover:shadow-2xl transition-all group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-primary-blue group-hover:text-primary-purple transition-colors">
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-heading-xl font-heading text-primary-navy mb-3 group-hover:text-primary-blue transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-neutral-600 mb-4">{service.description}</p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center text-sm text-neutral-700">
                                                    <span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        {service.slug ? (
                                            <Link
                                                to={`/services/${service.slug}`}
                                                className="mt-6 text-primary-blue hover:text-primary-navy font-semibold text-sm flex items-center group-hover:underline"
                                            >
                                                Learn More
                                                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                            </Link>
                                        ) : (
                                            <button className="mt-6 text-neutral-400 font-semibold text-sm flex items-center cursor-not-allowed">
                                                Coming Soon
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            Our Process
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            A proven methodology for delivering exceptional results
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Discovery", desc: "Understanding your business needs and goals" },
                            { step: "02", title: "Strategy", desc: "Crafting a tailored solution roadmap" },
                            { step: "03", title: "Execution", desc: "Building and implementing your solution" },
                            { step: "04", title: "Support", desc: "Ongoing maintenance and optimization" },
                        ].map((process, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">{process.step}</span>
                                </div>
                                <h3 className="text-heading-lg font-heading text-primary-navy mb-2">
                                    {process.title}
                                </h3>
                                <p className="text-neutral-600 text-sm">{process.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            Technologies We Work With
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Leveraging cutting-edge technologies to build exceptional solutions
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            "React",
                            "Next.js",
                            "Node.js",
                            "Python",
                            "AWS",
                            "Azure",
                            "TypeScript",
                            "MongoDB",
                            "PostgreSQL",
                            "Docker",
                            "Kubernetes",
                            "TensorFlow",
                        ].map((tech, idx) => (
                            <div
                                key={idx}
                                className="card text-center hover:shadow-lg transition-shadow"
                            >
                                <p className="font-semibold text-primary-navy">{tech}</p>
                            </div>
                        ))}
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
                        Let's discuss how our services can help transform your business
                    </p>
                    <button className="btn-primary bg-white text-primary-blue hover:bg-neutral-100">
                        Schedule a Consultation
                    </button>
                </div>
            </section>
        </div>
    );
}

import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getServiceBySlug } from "@/config/data/services";
import { serviceImages } from "@/config/images";
import {
    FiCheck,
    FiArrowRight,
    FiCpu,
    FiBarChart2,
    FiCode,
    FiZap,
    FiShield,
    FiMic,
    FiImage,
    FiMonitor,
    FiShoppingCart,
    FiMapPin,
    FiRefreshCw,
    FiSliders,
    FiCloud,
    FiUsers,
    FiDatabase,
    FiGitBranch,
    FiServer,
    FiSettings,
    FiAward,
    FiSmartphone,
} from "react-icons/fi";

// Map service slugs to their respective images
function getServiceImage(slug) {
    const imageMap = {
        'ai-machine-learning': serviceImages.aiMachineLearning,
        'digital-transformation': serviceImages.digitalTransformation,
        'web-development': serviceImages.webDevelopment,
        'mobile-app-development': serviceImages.mobileDevelopment,
        'cloud-computing': serviceImages.cloudComputing,
    };

    return imageMap[slug] || serviceImages.aiMachineLearning;
}

export default function ServiceDetailPage() {
    const { slug } = useParams();
    const service = getServiceBySlug(slug || "");
    const serviceImage = getServiceImage(slug || "");

    if (!service) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={serviceImage.url}
                        alt={serviceImage.alt}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/90 via-primary-blue/85 to-primary-purple/90"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-8">
                        <h1 className="text-display-lg text-white mb-6 animate-fade-up">
                            {service.title}
                        </h1>
                        <p className="text-heading-lg text-white/90 max-w-3xl mx-auto mb-8 animate-fade-up">
                            {service.tagline}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
                            <Link
                                to="/contact"
                                className="btn-primary bg-white text-primary-blue hover:bg-neutral-100"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/services"
                                className="btn-outline border-white text-white hover:bg-white hover:text-primary-blue"
                            >
                                View All Services
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
                                {service.overview.title}
                            </h2>
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                {service.overview.content}
                            </p>
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-primary-blue to-primary-purple rounded-2xl p-8 text-white">
                            <h3 className="text-heading-xl font-heading mb-6">
                                Technology Stack
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {service.technologies.map((tech, idx) => (
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
            </section>

            {/* Features Section */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            What We Deliver
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Comprehensive solutions tailored to your business needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="card hover:scale-105 transition-transform flex flex-col items-center text-center"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-purple rounded-lg flex items-center justify-center mb-4">
                                    {getFeatureIcon(service.slug, idx)}
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

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            Our Process
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            A proven methodology that delivers results
                        </p>
                    </div>

                    <div className="space-y-8">
                        {service.process.map((step, idx) => (
                            <div
                                key={idx}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                            {step.step}
                                        </div>
                                        <h3 className="text-heading-xl font-heading text-primary-navy">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-neutral-600 mb-6 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                                    <div className="card bg-neutral-50">
                                        <h4 className="font-semibold text-primary-navy mb-4">
                                            Deliverables:
                                        </h4>
                                        <ul className="space-y-2">
                                            {step.deliverables.map((deliverable, dIdx) => (
                                                <li
                                                    key={dIdx}
                                                    className="flex items-start text-neutral-700"
                                                >
                                                    <FiCheck className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" />
                                                    <span>{deliverable}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-neutral-600">
                            Everything you need to know about {service.title.toLowerCase()}
                        </p>
                    </div>

                    <div className="space-y-6">
                        {service.faqs.map((faq, idx) => (
                            <div key={idx} className="card">
                                <h3 className="text-heading-lg font-heading text-primary-navy mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {faq.answer}
                                </p>
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
                            Real results from a real client
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <div className="flex items-center space-x-3 mb-6">
                                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                                        {service.caseStudy.industry}
                                    </span>
                                    <span className="text-white/80">
                                        {service.caseStudy.client}
                                    </span>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-lg mb-2">Challenge</h4>
                                        <p className="text-white/80">
                                            {service.caseStudy.challenge}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-lg mb-2">Solution</h4>
                                        <p className="text-white/80">
                                            {service.caseStudy.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/10 rounded-xl p-6">
                                <h4 className="font-semibold text-lg mb-6">Key Results</h4>
                                <div className="space-y-4">
                                    {service.caseStudy.results.map((result, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <FiAward className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
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
                        Let's discuss how we can help transform your business with{" "}
                        {service.title.toLowerCase()}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="btn-primary bg-white text-primary-blue hover:bg-neutral-100 inline-flex items-center"
                        >
                            Schedule Consultation
                            <FiArrowRight className="ml-2" />
                        </Link>
                        <Link
                            to="/services"
                            className="btn-outline border-white text-white hover:bg-white hover:text-primary-blue"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Helper function to get feature icon based on service and feature index
function getFeatureIcon(serviceSlug, featureIndex) {
    // AI & Machine Learning Solutions
    if (serviceSlug === 'ai-machine-learning') {
        const aiIcons = [
            <FiCpu key="cpu" className="w-6 h-6 text-white" />, // Predictive Analytics
            <FiCode key="code" className="w-6 h-6 text-white" />, // NLP
            <FiImage key="image" className="w-6 h-6 text-white" />, // Computer Vision
            <FiBarChart2 key="chart" className="w-6 h-6 text-white" />, // Recommendation Systems
            <FiGitBranch key="git" className="w-6 h-6 text-white" />, // AI Model Development
            <FiServer key="server" className="w-6 h-6 text-white" />, // Model Deployment & MLOps
        ];
        return aiIcons[featureIndex] || <FiSettings className="w-6 h-6 text-white" />;
    }

    // Digital Transformation Consulting
    if (serviceSlug === 'digital-transformation') {
        const digitalIcons = [
            <FiMapPin key="map" className="w-6 h-6 text-white" />, // Digital Strategy & Roadmap
            <FiRefreshCw key="refresh" className="w-6 h-6 text-white" />, // Legacy System Modernization
            <FiSliders key="sliders" className="w-6 h-6 text-white" />, // Process Automation
            <FiCloud key="cloud" className="w-6 h-6 text-white" />, // Cloud Migration
            <FiMonitor key="monitor" className="w-6 h-6 text-white" />, // Digital Workplace
            <FiUsers key="users" className="w-6 h-6 text-white" />, // Change Management
        ];
        return digitalIcons[featureIndex] || <FiSettings className="w-6 h-6 text-white" />;
    }

    // Web Application Development
    if (serviceSlug === 'web-development') {
        const webIcons = [
            <FiCode key="code-web" className="w-6 h-6 text-white" />, // Custom Web Applications
            <FiShoppingCart key="cart" className="w-6 h-6 text-white" />, // E-Commerce Platforms
            <FiSmartphone key="phone" className="w-6 h-6 text-white" />, // Progressive Web Apps
            <FiDatabase key="db" className="w-6 h-6 text-white" />, // API Development & Integration
            <FiShield key="shield" className="w-6 h-6 text-white" />, // Security & Compliance
            <FiZap key="zap" className="w-6 h-6 text-white" />, // Performance Optimization
        ];
        return webIcons[featureIndex] || <FiSettings className="w-6 h-6 text-white" />;
    }

    // Default fallback
    return <FiSettings className="w-6 h-6 text-white" />;
}

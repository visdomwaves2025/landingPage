import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getIndustryBySlug, getAllIndustries } from "@/config/data/industries";
import {
    FiCheck, FiTrendingUp, FiTarget, FiAward, FiArrowRight,
} from "react-icons/fi";
import { FiSettings, FiBarChart2, FiUsers, FiDatabase, FiCloud, FiCode, FiShield, FiBook, FiMonitor, FiTool, FiHeart } from "react-icons/fi";

export default function IndustryPage() {
    const { slug } = useParams();
    const industry = getIndustryBySlug(slug || "");

    if (!industry) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-white to-neutral-100 pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-display-lg text-primary-navy mb-6 animate-fade-up">
                            {industry.name} <span className="text-primary-blue">Solutions</span>
                        </h1>
                        <p className="text-heading-lg text-neutral-600 max-w-3xl mx-auto animate-fade-up">
                            {industry.tagline}
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl text-neutral-700 leading-relaxed">{industry.description}</p>
                    </div>
                </div>
            </section>

            {/* Industry Challenges */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            Industry Challenges We Solve
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Understanding your unique obstacles is the first step to transformation
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {industry.challenges.map((challenge, idx) => (
                            <div key={idx} className="card hover:shadow-lg transition-shadow">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        {getChallengeIcon(industry.slug, idx)}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-heading-md font-heading text-primary-navy mb-2">
                                            {challenge.title}
                                        </h3>
                                        <p className="text-neutral-600">{challenge.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            Our Solutions
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Tailored technology solutions designed specifically for your industry
                        </p>
                    </div>
                    <div className="space-y-12">
                        {industry.solutions.map((solution, idx) => (
                            <div
                                key={idx}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                                    <h3 className="text-heading-xl font-heading text-primary-navy mb-4">
                                        {solution.title}
                                    </h3>
                                    <p className="text-neutral-700 mb-6">{solution.description}</p>
                                    <ul className="space-y-3">
                                        {solution.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start space-x-3">
                                                <FiCheck className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                                                <span className="text-neutral-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                                    <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-neutral-100">
                                        <div className="absolute inset-0 bg-primary-blue/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                                        <img
                                            src={getImageForSolution(industry.slug, solution.title, idx)}
                                            alt={solution.title}
                                            className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-primary-navy text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading mb-4 text-white">
                            Measurable Business Impact
                        </h2>
                        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                            Real results from clients in your industry
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {industry.benefits.map((benefit, idx) => (
                            <div key={idx} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm">
                                <div className="text-5xl font-bold mb-2 text-primary-blue">
                                    {benefit.value}
                                </div>
                                <h3 className="text-heading-md font-heading mb-2 text-white">{benefit.title}</h3>
                                <p className="text-neutral-300 text-sm">{benefit.description}</p>
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
                            Technologies We Use
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Leveraging cutting-edge technologies for optimal results
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {industry.technologies.map((tech, idx) => (
                            <div
                                key={idx}
                                className="px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <span className="font-semibold text-primary-navy">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="card bg-primary-navy text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                            <div>
                                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-semibold mb-4 border border-white/20">
                                    Success Story
                                </div>
                                <h2 className="text-display-sm font-heading mb-4 text-white">{industry.caseStudy.client}</h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-heading-lg font-heading mb-2 flex items-center text-primary-blue">
                                            {getCaseStudyIcon(industry.slug, 'challenge')}
                                            <span className="ml-2">Challenge</span>
                                        </h3>
                                        <p className="text-neutral-300">{industry.caseStudy.challenge}</p>
                                    </div>

                                    <div>
                                        <h3 className="text-heading-lg font-heading mb-2 flex items-center text-primary-blue">
                                            {getCaseStudyIcon(industry.slug, 'solution')}
                                            <span className="ml-2">Solution</span>
                                        </h3>
                                        <p className="text-neutral-300">{industry.caseStudy.solution}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                                <h3 className="text-heading-lg font-heading mb-6 flex items-center text-white">
                                    {getCaseStudyIcon(industry.slug, 'results')}
                                    <span className="ml-2">Results Achieved</span>
                                </h3>
                                <div className="space-y-4">
                                    {industry.caseStudy.results.map((result, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <FiAward className="w-5 h-5 mr-3 flex-shrink-0 mt-1 text-brand-vibrantTeal" />
                                            <span className="text-neutral-200 text-sm">{result}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    to="/case-studies"
                                    className="inline-flex items-center mt-8 px-6 py-3 bg-primary-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors w-full justify-center"
                                >
                                    View Full Case Study
                                    <FiArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-blue text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-display-sm font-heading mb-6">
                        Ready to Transform Your {industry.name} Operations?
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
                        Let's discuss how our solutions can help you achieve your goals
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="btn-primary bg-white text-primary-blue hover:bg-neutral-100"
                        >
                            Schedule Consultation
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

// Helper function to get image for solution
function getImageForSolution(industrySlug, solutionTitle, index) {
    const title = solutionTitle.toLowerCase();
    const base = "/images/solutions";

    // Industry specific overrides
    if (industrySlug === 'education' && title.includes('learning management')) return `${base}/education-lms.png`;
    if (industrySlug === 'healthcare' && title.includes('telemedicine')) return `${base}/healthcare-telemed.png`;
    if (industrySlug === 'technology' && title.includes('custom software')) return `${base}/tech-devops.png`;
    if (industrySlug === 'technology' && title.includes('devops')) return `${base}/tech-devops.png`;
    if (industrySlug === 'construction' && title.includes('bim')) return `${base}/construction-bim.png`;
    if (industrySlug === 'temple-projects' && title.includes('donation')) return `${base}/temple-digital.png`;
    if (industrySlug === 'consulting' && title.includes('business intelligence')) return `${base}/consulting-analytics.png`;

    // Generic fallbacks based on keywords
    if (title.includes('app') || title.includes('mobile')) return `${base}/generic-mobile.png`;
    if (title.includes('cloud') || title.includes('hosting')) return `${base}/generic-cloud.png`;
    if (title.includes('ai') || title.includes('data') || title.includes('analytics')) return `${base}/generic-ai.png`;
    if (title.includes('dashboard') || title.includes('management')) return `${base}/generic-dashboard.png`;

    // Index based fallback to ensure variety
    const generics = [
        `${base}/generic-dashboard.png`,
        `${base}/generic-cloud.png`,
        `${base}/generic-mobile.png`,
        `${base}/generic-ai.png`
    ];

    return generics[index % generics.length];
}

// Helper function to get challenge icon based on industry and challenge index
function getChallengeIcon(industrySlug, challengeIndex) {
    // Education industry
    if (industrySlug === 'education') {
        const educationIcons = [
            <FiBook key="book" className="w-6 h-6 text-primary-blue" />, // Fragmented Learning Experiences
            <FiUsers key="users" className="w-6 h-6 text-primary-blue" />, // Student Engagement Challenges
            <FiBarChart2 key="chart" className="w-6 h-6 text-primary-blue" />, // Data Management Complexity
        ];
        return educationIcons[challengeIndex] || <FiSettings className="w-6 h-6 text-primary-blue" />;
    }

    // Healthcare industry
    if (industrySlug === 'healthcare') {
        const healthcareIcons = [
            <FiDatabase key="db" className="w-6 h-6 text-primary-blue" />, // Fragmented Patient Data
            <FiHeart key="heart" className="w-6 h-6 text-primary-blue" />, // Limited Access to Care
            <FiSettings key="settings" className="w-6 h-6 text-primary-blue" />, // Operational Inefficiencies
            <FiShield key="shield" className="w-6 h-6 text-primary-blue" />, // Compliance Complexity
        ];
        return healthcareIcons[challengeIndex] || <FiSettings className="w-6 h-6 text-primary-blue" />;
    }

    // Technology industry
    if (industrySlug === 'technology') {
        const technologyIcons = [
            <FiTrendingUp key="trend" className="w-6 h-6 text-primary-blue" />, // Rapid Scaling Demands
            <FiTool key="tool" className="w-6 h-6 text-primary-blue" />, // Technical Debt
            <FiCloud key="cloud" className="w-6 h-6 text-primary-blue" />, // Security Vulnerabilities
            <FiUsers key="users-tech" className="w-6 h-6 text-primary-blue" />, // Talent Acquisition & Retention
        ];
        return technologyIcons[challengeIndex] || <FiSettings className="w-6 h-6 text-primary-blue" />;
    }

    // Default fallback
    return <FiSettings className="w-6 h-6 text-primary-blue" />;
}

// Helper function to get case study icon based on industry and section
function getCaseStudyIcon(industrySlug, section) {
    // Education industry
    if (industrySlug === 'education') {
        if (section === 'challenge') return <FiBook className="w-6 h-6" />;
        if (section === 'solution') return <FiCode className="w-6 h-6" />;
        if (section === 'results') return <FiBarChart2 className="w-6 h-6" />;
    }

    // Healthcare industry
    if (industrySlug === 'healthcare') {
        if (section === 'challenge') return <FiDatabase className="w-6 h-6" />;
        if (section === 'solution') return <FiMonitor className="w-6 h-6" />;
        if (section === 'results') return <FiAward className="w-6 h-6" />;
    }

    // Technology industry
    if (industrySlug === 'technology') {
        if (section === 'challenge') return <FiTrendingUp className="w-6 h-6" />;
        if (section === 'solution') return <FiCloud className="w-6 h-6" />;
        if (section === 'results') return <FiBarChart2 className="w-6 h-6" />;
    }

    // Default fallback
    return <FiSettings className="w-6 h-6" />;
}

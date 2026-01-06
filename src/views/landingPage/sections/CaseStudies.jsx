import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiTrendingUp, FiUsers, FiDollarSign } from "react-icons/fi";

const caseStudies = [
    {
        id: 1,
        title: "AI-Powered Learning Platform for Education",
        client: "Global University System",
        industry: "Education",
        challenge:
            "Traditional learning management system couldn't scale to support 50,000+ students with personalized learning paths.",
        solution:
            "Developed an AI-powered EdTech platform with adaptive learning algorithms, real-time analytics, and seamless integration with existing systems.",
        results: [
            {
                metric: "Student Engagement",
                value: "+250%",
                icon: <FiUsers className="w-6 h-6" />,
            },
            {
                metric: "Learning Efficiency",
                value: "+180%",
                icon: <FiTrendingUp className="w-6 h-6" />,
            },
            {
                metric: "Cost Reduction",
                value: "40%",
                icon: <FiDollarSign className="w-6 h-6" />,
            },
        ],
        tags: ["AI/ML", "EdTech", "Cloud"],
    },
    {
        id: 2,
        title: "Digital Transformation for Healthcare Provider",
        client: "Regional Medical Center",
        industry: "Healthcare",
        challenge:
            "Fragmented patient data across multiple systems leading to inefficiencies and potential care gaps.",
        solution:
            "Implemented a comprehensive telemedicine platform with integrated EMR, appointment scheduling, and real-time patient monitoring.",
        results: [
            {
                metric: "Patient Satisfaction",
                value: "+95%",
                icon: <FiUsers className="w-6 h-6" />,
            },
            {
                metric: "Operational Efficiency",
                value: "+160%",
                icon: <FiTrendingUp className="w-6 h-6" />,
            },
            {
                metric: "Revenue Growth",
                value: "+85%",
                icon: <FiDollarSign className="w-6 h-6" />,
            },
        ],
        tags: ["Healthcare", "Telemedicine", "HIPAA"],
    },
    {
        id: 3,
        title: "Smart Construction Management System",
        client: "BuildTech Construction",
        industry: "Construction",
        challenge:
            "Manual project tracking and lack of real-time visibility leading to delays and cost overruns.",
        solution:
            "Built an IoT-enabled project management platform with BIM integration, automated reporting, and predictive analytics.",
        results: [
            {
                metric: "Project Delays",
                value: "-75%",
                icon: <FiTrendingUp className="w-6 h-6" />,
            },
            {
                metric: "Safety Incidents",
                value: "-90%",
                icon: <FiUsers className="w-6 h-6" />,
            },
            {
                metric: "Cost Savings",
                value: "35%",
                icon: <FiDollarSign className="w-6 h-6" />,
            },
        ],
        tags: ["IoT", "BIM", "Construction"],
    },
];

export default function CaseStudies() {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                        Success Stories
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Real results from real clients - discover how we've helped businesses transform
                    </p>
                </div>

                <div className="space-y-8">
                    {caseStudies.map((study, idx) => (
                        <div
                            key={study.id}
                            className="card hover:shadow-2xl transition-all group"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Content */}
                                <div className="lg:col-span-2 space-y-4">
                                    <div className="flex items-center space-x-3 text-sm">
                                        <span className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full font-semibold">
                                            {study.industry}
                                        </span>
                                        <span className="text-neutral-500">{study.client}</span>
                                    </div>

                                    <h3 className="text-heading-xl font-heading text-primary-navy group-hover:text-primary-blue transition-colors">
                                        {study.title}
                                    </h3>

                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold text-neutral-800 mb-1">Challenge</h4>
                                            <p className="text-neutral-600">{study.challenge}</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-neutral-800 mb-1">Solution</h4>
                                            <p className="text-neutral-600">{study.solution}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {study.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        to={`/case-studies`}
                                        className="inline-flex items-center text-primary-blue hover:text-primary-navy font-semibold group-hover:underline"
                                    >
                                        Read Full Case Study
                                        <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Results */}
                                <div className="lg:col-span-1 bg-gradient-to-br from-primary-blue to-primary-purple rounded-xl p-6 text-white">
                                    <h4 className="font-heading font-semibold text-lg mb-6">
                                        Key Results
                                    </h4>
                                    <div className="space-y-4">
                                        {study.results.map((result, resultIdx) => (
                                            <div key={resultIdx} className="flex items-start space-x-3">
                                                <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                                                    {result.icon}
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold mb-1">
                                                        {result.value}
                                                    </div>
                                                    <div className="text-white/80 text-sm">
                                                        {result.metric}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/case-studies"
                        className="btn-primary bg-primary-blue hover:bg-primary-navy text-white inline-flex items-center"
                    >
                        View All Case Studies
                        <FiArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

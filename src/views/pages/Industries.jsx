import React from "react";
import { Link } from "react-router-dom";
import { getAllIndustries } from "@/config/data/industries";
import { heroImages } from "@/config/images";
import PageHero from "@/components/PageHero";
import {
    FiBriefcase,
    FiTrendingUp,
    FiShield,
    FiActivity,
    FiCpu,
    FiHome,
    FiUsers,
} from "react-icons/fi";

export default function IndustriesPage() {
    const industries = getAllIndustries();

    const getIcon = (slug) => {
        switch (slug) {
            case "healthcare":
                return <FiActivity className="w-12 h-12" />;
            case "education":
                return <FiBriefcase className="w-12 h-12" />;
            case "technology":
                return <FiCpu className="w-12 h-12" />;
            case "construction":
                return <FiHome className="w-12 h-12" />;
            case "temple-projects":
                return <FiUsers className="w-12 h-12" />;
            case "consulting":
                return <FiTrendingUp className="w-12 h-12" />;
            default:
                return <FiBriefcase className="w-12 h-12" />;
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <PageHero
                title={
                    <>
                        Industries We <span className="text-brand-vibrantTeal">Serve</span>
                    </>
                }
                description="Tailored technology solutions for diverse sectors"
                image={heroImages.industries}
            />

            {/* Industries Grid */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, idx) => (
                            <div
                                key={idx}
                                className="card hover:shadow-2xl transition-all group flex flex-col"
                            >
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className="text-primary-blue group-hover:text-primary-purple transition-colors">
                                        {getIcon(industry.slug)}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-heading-xl font-heading text-primary-navy mb-2 group-hover:text-primary-blue transition-colors">
                                            {industry.name}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-neutral-600 mb-6 flex-grow">{industry.description}</p>

                                <div className="space-y-4">
                                    <h4 className="font-semibold text-primary-navy text-sm uppercase tracking-wider">Key Challenges Solved</h4>
                                    <ul className="space-y-2">
                                        {industry.challenges.slice(0, 3).map((challenge, cIdx) => (
                                            <li key={cIdx} className="flex items-start text-sm text-neutral-700">
                                                <span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                                <span>{challenge.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    to={`/industries/${industry.slug}`}
                                    className="mt-8 text-primary-blue hover:text-primary-navy font-semibold text-sm flex items-center group-hover:underline"
                                >
                                    Explore Solutions
                                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-blue text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-display-sm font-heading mb-6">
                        Don't See Your Industry?
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
                        Our solutions are adaptable. Contact us to discuss how we can help your specific business needs.
                    </p>
                    <Link to="/contact" className="btn-primary bg-white text-primary-blue hover:bg-neutral-100 inline-block">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
